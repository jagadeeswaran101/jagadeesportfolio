# Jagadeeswaran C — Backend Developer & Systems Architect Portfolio

A modern, interactive, and responsive portfolio for **JAGADEESWARAN C**, featuring a hierarchical **Skills Tree**, **SplashCursor** fluid cursor simulation, **Particles** live background animation from React Bits, and clean sections inspired by modern engineering portfolios.

---

## 1. Professional Overview

- **Name:** JAGADEESWARAN C
- **Title:** Backend Developer & Systems Architect
- **Location:** Tiruppur, Tamil Nadu, India
- **Education:** B.Sc. Computer Science and Applications, VET Institute of Arts and Science (2024–2027, CGPA: 85.43)
- **Primary GitHub:** [github.com/jagadeeswaran101](https://github.com/jagadeeswaran101)
- **Secondary GitHub:** [github.com/jagadees-vet](https://github.com/jagadees-vet)
- **LinkedIn:** [linkedin.com/in/jagadeeswaran-c-8a2649353](https://www.linkedin.com/in/jagadeeswaran-c-8a2649353)
- **Email:** [jagadeeswaran2902@gmail.com](mailto:jagadeeswaran2902@gmail.com)
- **Phone:** +91 9994198907

---

## 2. Interactive Features & Visual Innovations

1. **Hierarchical Skills Tree (`Skills.tsx`):**
   - Root $\to$ Category Branch $\to$ Technology Leaf Node structure.
   - 7 Core Branches: Backend Development, Programming Languages, Databases & Relational Modeling, Frontend Development, Tools & Technologies, Cloud & Deployment, and Reverse Prompt Engineering & AI.
   - Interactive Expand / Collapse individual categories, Master "Expand All" / "Collapse" controls, real-time live search filter.
   - Interactive **Node Inspector**: Selecting any technology node displays verified evidence, key architectural competencies, and patterns.
2. **SplashCursor Fluid Animation (`SplashCursor.jsx`, `SplashCursor.css`):**
   - WebGL fluid dynamics simulation (Navier-Stokes advection, curl, vorticity, divergence, Jacobi pressure solver).
   - Generates colorful fluid velocity trails on mouse movement and multi-splats on user clicks.
   - Rendered as a transparent viewport overlay with `pointer-events: none` layered between the background particles and foreground content.
3. **Particles Background Animation (`Particles.jsx`, `Particles.css`):**
   - Multi-colored particles (`#ffffff`, `#4f8cff`, `#2dd4bf`) drifting across the viewport with twinkling, glow, dynamic line connections, cursor parallax interaction, and click bursts.
   - Rendered with `pointer-events: none` on `z-index: 0` behind all interactive page cards and controls.
4. **Clean 3-Zone Navigation:** Wordmark, clean single-line navigation links, and primary contact affordance. Resume download functionality has been completely removed.
5. **Dedicated Experience Section (`ExperienceSection.tsx`):**
   - Dataglobal Technologies (Blockchain & Cybersecurity Intern).
   - Q-Gate Infotech Private Limited (Technical Operations & GIS Assistant).
   - Independent Backend & Systems Engineering.
6. **Featured Projects (`FeaturedProjects.tsx`):**
   - Benefit Finder (Live Vercel + GitHub).
   - Employee Salary Prediction Engine (Live Vercel + GitHub).
   - Smart Campus Safety Sentinel (Edge YOLOv8 + ESP32 serial system).
   - Vegetable Price Prediction Engine (Smart India Hackathon Award Winner).
   - JPMorgan Chase Systems Exploration (Forage repo).
   - Core Java Systems & Algorithms (GitHub repo).
7. **Dedicated Education Section (`EducationSection.tsx`):**
   - B.Sc. Computer Science and Applications @ VET IAS (CGPA: 85.43).
   - Higher Secondary Certificate (Class XII) in Mathematics & Computer Science.
8. **Achievements & Certifications (`AchievementsSection.tsx`):**
   - Smart India Hackathon Second Prize.
   - Inter-Collegiate Symposium Recognitions (Venkateshwara, Nantha, Gobi Arts).
   - Professional Certifications (Infosys Springboard, GitHub Copilot, IBM SkillsBuild/Coursera, Mindluster, Power BI).
   - In-app interactive preview modal and direct Google Drive archive access.
9. **Contact Section (`ContactSection.tsx`):**
   - Validated inquiry form, one-click copy affordances for email and phone, and direct email client launch.

---

## 3. Technology Stack

- **Framework:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, custom utility classes
- **Animations:** React Bits SplashCursor (WebGL Fluid Dynamics) & Particles (Canvas Network)
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & JetBrains Mono

---

## 4. Setup & Build

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Compile production build
npm run build

# Run TypeScript checks
npm run lint
```
