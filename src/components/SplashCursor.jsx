import React, { useEffect, useRef } from 'react';
import './SplashCursor.css';

export default function SplashCursor({
  rainbow = true,
  size = 1,
  force = 1,
  swirl = 3,
  trail = 1,
  momentum = 1,
  shading = 1,
  glow = 0.2,
  quality = 'medium',
  clickSplash = true,
  intro = true,
  contained = false,
  zIndex = 1,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let gl = canvas.getContext('webgl2', { alpha: true, depth: false, antialias: false });
    const isWebGL2 = !!gl;
    if (!gl) {
      gl = canvas.getContext('webgl', { alpha: true, depth: false, antialias: false }) ||
           canvas.getContext('experimental-webgl');
    }
    if (!gl) return;

    // Config parameters scaled by props
    const SIM_RESOLUTION = quality === 'high' ? 256 : quality === 'medium' ? 128 : 64;
    const DYE_RESOLUTION = quality === 'high' ? 1024 : quality === 'medium' ? 512 : 256;
    const DENSITY_DISSIPATION = 0.97 - (trail - 1) * 0.02;
    const VELOCITY_DISSIPATION = 0.98 * momentum;
    const PRESSURE = 0.8;
    const PRESSURE_ITERATIONS = 20;
    const CURL = 30 * swirl;
    const SPLAT_RADIUS = 0.25 * size;
    const SPLAT_FORCE = 6000 * force;

    function getResolution(resolution) {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1 / aspectRatio;
      const min = Math.round(resolution);
      const max = Math.round(resolution * aspectRatio);
      if (gl.drawingBufferWidth > gl.drawingBufferHeight) {
        return { width: max, height: min };
      } else {
        return { width: min, height: max };
      }
    }

    // Shader sources
    const baseVertexShaderSource = `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float uGlow;
      void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c * (1.0 + uGlow), a * 0.8);
      }
    `;

    const splatShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `;

    const advectionShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
      }
    `;

    const divergenceShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `;

    const curlShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `;

    const vorticityShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
      }
    `;

    const pressureShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `;

    const gradientSubtractShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;

    // Compiler helper
    function createProgram(vertexSource, fragmentSource) {
      const vs = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vs, vertexSource);
      gl.compileShader(vs);

      const fs = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fs, fragmentSource);
      gl.compileShader(fs);

      const program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      const uniforms = {};
      const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < count; i++) {
        const info = gl.getActiveUniform(program, i);
        uniforms[info.name] = gl.getUniformLocation(program, info.name);
      }

      return { program, uniforms };
    }

    // Quad buffer
    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    function bindQuad(prog) {
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      const loc = gl.getAttribLocation(prog, 'aPosition');
      if (loc !== -1) {
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      }
    }

    // Texture FBO Helpers
    function createFBO(w, h, internalFormat, format, type, filter) {
      gl.activeTexture(gl.TEXTURE0);
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      return {
        texture,
        fbo,
        width: w,
        height: h,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        },
      };
    }

    function createDoubleFBO(w, h, internalFormat, format, type, filter) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, filter);
      let fbo2 = createFBO(w, h, internalFormat, format, type, filter);
      return {
        width: w,
        height: h,
        texelSizeX: 1.0 / w,
        texelSizeY: 1.0 / h,
        get read() { return fbo1; },
        set read(val) { fbo1 = val; },
        get write() { return fbo2; },
        set write(val) { fbo2 = val; },
        swap() {
          const temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        },
      };
    }

    // Texture formats and extension checks
    let type = gl.UNSIGNED_BYTE;
    let internalFormat = gl.RGBA;

    if (isWebGL2) {
      const extFloat = gl.getExtension('EXT_color_buffer_float');
      if (extFloat) {
        internalFormat = gl.RGBA16F;
        type = gl.HALF_FLOAT;
      }
    } else {
      const extHalfFloat = gl.getExtension('OES_texture_half_float');
      const extHalfFloatLinear = gl.getExtension('OES_texture_half_float_linear');
      if (extHalfFloat && extHalfFloatLinear) {
        type = extHalfFloat.HALF_FLOAT_OES;
      }
    }

    const displayProg = createProgram(baseVertexShaderSource, displayShaderSource);
    const splatProg = createProgram(baseVertexShaderSource, splatShaderSource);
    const advectionProg = createProgram(baseVertexShaderSource, advectionShaderSource);
    const divergenceProg = createProgram(baseVertexShaderSource, divergenceShaderSource);
    const curlProg = createProgram(baseVertexShaderSource, curlShaderSource);
    const vorticityProg = createProgram(baseVertexShaderSource, vorticityShaderSource);
    const pressureProg = createProgram(baseVertexShaderSource, pressureShaderSource);
    const gradSubProg = createProgram(baseVertexShaderSource, gradientSubtractShaderSource);

    let density, velocity, divergence, curl, pressure;

    function createFBOs(intFmt, texType) {
      const simRes = getResolution(SIM_RESOLUTION);
      const dyeRes = getResolution(DYE_RESOLUTION);

      density = createDoubleFBO(dyeRes.width, dyeRes.height, intFmt, gl.RGBA, texType, gl.LINEAR);
      velocity = createDoubleFBO(simRes.width, simRes.height, intFmt, gl.RGBA, texType, gl.LINEAR);
      divergence = createFBO(simRes.width, simRes.height, intFmt, gl.RGBA, texType, gl.NEAREST);
      curl = createFBO(simRes.width, simRes.height, intFmt, gl.RGBA, texType, gl.NEAREST);
      pressure = createDoubleFBO(simRes.width, simRes.height, intFmt, gl.RGBA, texType, gl.NEAREST);
    }

    function initFramebuffers() {
      try {
        createFBOs(internalFormat, type);
      } catch (err) {
        console.warn('SplashCursor: Half-float FBO initialization failed, falling back to UNSIGNED_BYTE', err);
        try {
          internalFormat = gl.RGBA;
          type = gl.UNSIGNED_BYTE;
          createFBOs(internalFormat, type);
        } catch (e) {
          console.error('SplashCursor: Failed to initialize framebuffers', e);
        }
      }
    }

    function resizeCanvas() {
      const width = window.innerWidth || 300;
      const height = window.innerHeight || 150;
      if (canvas.width !== width || canvas.height !== height || !velocity) {
        canvas.width = width;
        canvas.height = height;
        initFramebuffers();
      }
    }

    // Always unconditionally initialize framebuffers on initial mount
    canvas.width = window.innerWidth || 300;
    canvas.height = window.innerHeight || 150;
    initFramebuffers();

    window.addEventListener('resize', resizeCanvas);

    // Pointer state
    let pointers = [];
    let pointerColorIndex = 0;

    function generateColor() {
      if (rainbow) {
        pointerColorIndex += 0.05;
        const r = Math.sin(pointerColorIndex) * 0.5 + 0.5;
        const g = Math.sin(pointerColorIndex + 2) * 0.5 + 0.5;
        const b = Math.sin(pointerColorIndex + 4) * 0.5 + 0.5;
        return [r * 0.8 + 0.2, g * 0.8 + 0.2, b * 0.8 + 0.2];
      }
      return [0.2, 0.8, 0.6]; // emerald/cyan
    }

    function splat(x, y, dx, dy, color) {
      if (!velocity || !density || !velocity.write || !density.write || !velocity.read || !density.read) return;
      gl.viewport(0, 0, velocity.width, velocity.height);
      gl.useProgram(splatProg.program);
      gl.uniform1i(splatProg.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(splatProg.uniforms.aspectRatio, (canvas.width || 1) / (canvas.height || 1));
      gl.uniform2f(splatProg.uniforms.point, x, y);
      gl.uniform3f(splatProg.uniforms.color, dx, dy, 0.0);
      gl.uniform1f(splatProg.uniforms.radius, SPLAT_RADIUS / 100.0);
      bindQuad(splatProg.program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, velocity.write.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      velocity.swap();

      gl.viewport(0, 0, density.width, density.height);
      gl.uniform1i(splatProg.uniforms.uTarget, density.read.attach(0));
      gl.uniform3f(splatProg.uniforms.color, color[0], color[1], color[2]);
      gl.bindFramebuffer(gl.FRAMEBUFFER, density.write.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      density.swap();
    }

    function multipleSplats(amount) {
      if (!velocity || !density) return;
      for (let i = 0; i < amount; i++) {
        const color = generateColor();
        color[0] *= 10.0;
        color[1] *= 10.0;
        color[2] *= 10.0;
        const x = Math.random();
        const y = Math.random();
        const dx = 1000 * (Math.random() - 0.5);
        const dy = 1000 * (Math.random() - 0.5);
        splat(x, y, dx, dy, color);
      }
    }

    if (intro && velocity && density) {
      multipleSplats(3);
    }

    // Event listeners
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / canvas.width;
      const y = 1.0 - (e.clientY - rect.top) / canvas.height;
      const dx = (e.movementX || 0) * SPLAT_FORCE;
      const dy = -(e.movementY || 0) * SPLAT_FORCE;
      const col = generateColor();
      splat(x, y, dx, dy, col);
    };

    const onMouseDown = (e) => {
      if (!clickSplash) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / canvas.width;
      const y = 1.0 - (e.clientY - rect.top) / canvas.height;
      for (let i = 0; i < 4; i++) {
        const col = generateColor();
        col[0] *= 6.0;
        col[1] *= 6.0;
        col[2] *= 6.0;
        const dx = 1200 * (Math.random() - 0.5);
        const dy = 1200 * (Math.random() - 0.5);
        splat(x, y, dx, dy, col);
      }
    };

    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const x = (t.clientX - rect.left) / canvas.width;
      const y = 1.0 - (t.clientY - rect.top) / canvas.height;
      const col = generateColor();
      splat(x, y, 200, 200, col);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    let animationFrameId;
    let lastTime = Date.now();

    function update() {
      const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
      lastTime = Date.now();

      if (!velocity || !density || !curl || !divergence || !pressure) {
        animationFrameId = requestAnimationFrame(update);
        return;
      }

      gl.disable(gl.BLEND);

      // Curl
      gl.viewport(0, 0, velocity.width, velocity.height);
      gl.useProgram(curlProg.program);
      gl.uniform2f(curlProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(curlProg.uniforms.uVelocity, velocity.read.attach(0));
      bindQuad(curlProg.program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, curl.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

      // Vorticity
      gl.useProgram(vorticityProg.program);
      gl.uniform2f(vorticityProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(vorticityProg.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(vorticityProg.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProg.uniforms.curl, CURL);
      gl.uniform1f(vorticityProg.uniforms.dt, dt);
      bindQuad(vorticityProg.program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, velocity.write.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      velocity.swap();

      // Divergence
      gl.useProgram(divergenceProg.program);
      gl.uniform2f(divergenceProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(divergenceProg.uniforms.uVelocity, velocity.read.attach(0));
      bindQuad(divergenceProg.program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, divergence.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

      // Pressure Solve (Jacobi iterations)
      gl.useProgram(pressureProg.program);
      gl.uniform2f(pressureProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(pressureProg.uniforms.uDivergence, divergence.attach(1));
      bindQuad(pressureProg.program);
      for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProg.uniforms.uPressure, pressure.read.attach(0));
        gl.bindFramebuffer(gl.FRAMEBUFFER, pressure.write.fbo);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        pressure.swap();
      }

      // Gradient Subtract
      gl.useProgram(gradSubProg.program);
      gl.uniform2f(gradSubProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gradSubProg.uniforms.uPressure, pressure.read.attach(0));
      gl.uniform1i(gradSubProg.uniforms.uVelocity, velocity.read.attach(1));
      bindQuad(gradSubProg.program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, velocity.write.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      velocity.swap();

      // Advection
      gl.useProgram(advectionProg.program);
      gl.uniform2f(advectionProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(advectionProg.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProg.uniforms.uSource, velocity.read.attach(0));
      gl.uniform1f(advectionProg.uniforms.dt, dt);
      gl.uniform1f(advectionProg.uniforms.dissipation, VELOCITY_DISSIPATION);
      bindQuad(advectionProg.program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, velocity.write.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      velocity.swap();

      gl.viewport(0, 0, density.width, density.height);
      gl.uniform2f(advectionProg.uniforms.texelSize, density.texelSizeX, density.texelSizeY);
      gl.uniform1i(advectionProg.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProg.uniforms.uSource, density.read.attach(1));
      gl.uniform1f(advectionProg.uniforms.dissipation, DENSITY_DISSIPATION);
      bindQuad(advectionProg.program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, density.write.fbo);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      density.swap();

      // Display to screen
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.useProgram(displayProg.program);
      gl.uniform1i(displayProg.uniforms.uTexture, density.read.attach(0));
      gl.uniform1f(displayProg.uniforms.uGlow, glow);
      bindQuad(displayProg.program);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

      animationFrameId = requestAnimationFrame(update);
    }

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [rainbow, size, force, swirl, trail, momentum, glow, quality, clickSplash, intro]);

  return (
    <canvas
      ref={canvasRef}
      className="splash-cursor-canvas"
      style={{ zIndex, pointerEvents: 'none' }}
    />
  );
}
