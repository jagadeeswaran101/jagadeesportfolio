import React from 'react';
import { User, Server, Sparkles, Database, Terminal, Heart, Coffee } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Skills } from './Skills';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-100/70 dark:bg-[#06080e]/95 border-b border-slate-200 dark:border-white/5 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Behind the Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            ABOUT ME
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            A developer who enjoys getting under the hood of backend infrastructure, relational databases, and prompt systems.
          </p>
        </div>

        {/* Conversational Narrative & Focus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Conversational Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 backdrop-blur-md space-y-4 shadow-xl dark:shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                <Coffee className="w-4 h-4" />
                <span>HEY THERE, NICE TO MEET YOU!</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Curious about what makes systems tick underneath.
              </h3>

              <p>
                I am an undergraduate Computer Science and Applications student at{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  VET Institute of Arts and Science College
                </strong>{' '}
                in Erode, Tamil Nadu (graduating in 2027 with a current 85.43 CGPA).
              </p>

              <p>
                What pulled me into software engineering wasn't just putting components on a screen — it was understanding how things really work when an HTTP request leaves the client. I love designing layered controllers in Node.js, organizing relational schemas in MySQL without data anomalies, and making sure APIs fail safely with clear error codes.
              </p>

              <p>
                Along the way, I became fascinated by{' '}
                <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Reverse Prompt Engineering
                </strong>
                . Rather than treating AI code generation like magic, I break down generated codebases, visual layouts, and complex interfaces into structured, deterministic prompts with strict negative constraints and design tokens.
              </p>

              <p className="pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
                Outside of coursework, you will find me participating in collegiate hackathons (like winning 2nd prize at the Smart India Hackathon internal round), testing edge computer vision models with Python & YOLO, and tweaking my Debian Linux setups.
              </p>
            </div>
          </div>

          {/* Highlights & What I Enjoy Building (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 backdrop-blur-md space-y-2.5 shadow-md dark:shadow-xl hover:border-emerald-500/40 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Robust Server-Side Logic</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">REST APIs & Asynchronous Handlers</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Clean middleware pipelines, stateless JWT token rotation, fail-closed Zod validations, and strict HTTP status discipline.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 backdrop-blur-md space-y-2.5 shadow-md dark:shadow-xl hover:border-sky-500/40 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Data Integrity & Normalization</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">MySQL & 3NF Schema Architecture</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Relational schema design preventing orphan records, foreign-key constraints, and compound B-Tree indexes to accelerate lookups.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 backdrop-blur-md space-y-2.5 shadow-md dark:shadow-xl hover:border-purple-500/40 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Reverse Prompt Engineering</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">AI Output & UI Deconstruction</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Extracting design tokens, nested border-radius math, and system invariants from prototypes to generate deterministic prompts.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e18]/90 backdrop-blur-md space-y-2.5 shadow-md dark:shadow-xl hover:border-teal-500/40 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Systems & Edge IoT</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Linux, YOLOv8 & ESP32 UART</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Debian Linux administration, privacy-first edge vision streaming incident telemetry to microcontrollers over hardware serial.
              </p>
            </div>
          </div>
        </div>

        {/* Integrated Skills Matrix (matching exact screenshot design) */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <Skills />
        </div>
      </div>
    </section>
  );
};
