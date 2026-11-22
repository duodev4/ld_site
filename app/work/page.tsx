import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { realSystemsProjects } from "@/lib/real-systems-data";
import { RealSystemsGrid } from "@/components/sections/real-systems-grid";

export const metadata: Metadata = {
  title: "Our Work | LinkersDev",
  description:
    "Custom software systems built for healthcare, education, retail, and online business.",
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02050d] text-white">
      {/* Ambient background (matches home) */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(40,120,255,0.16),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_20%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.08]" />

      {/* Minimal top bar */}
      <header className="relative z-10 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </a>
          <span className="text-xl font-bold tracking-tight text-white">LinkersDev</span>
        </div>
      </header>

      <main className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Our Work
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Systems we have built
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              From clinics and schools to restaurants and internal operations — every
              platform is designed around real workflows, teams, and daily business
              operations.
            </p>
          </div>

          {/* Full Grid */}
          <div className="mt-16">
            <RealSystemsGrid projects={realSystemsProjects} columns={3} />
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a
              href="/#final-cta"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
            >
              Start Your Project
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between">
          <span className="text-sm text-slate-500">LinkersDev</span>
          <a href="/" className="text-sm text-slate-400 transition hover:text-white">
            Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
}
