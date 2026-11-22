"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { realSystemsProjects } from "@/lib/real-systems-data";
import { RealSystemsGrid } from "./real-systems-grid";

const featuredProjects = realSystemsProjects.filter((p) => p.featured);

export function RealSystemsSection() {
  return (
    <section id="real-systems" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Systems we have delivered
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            From clinics and schools to restaurants and internal tools — every project is built for how teams actually work.
          </p>
        </motion.div>

        {/* Featured Card Grid */}
        <div className="mt-12">
          <RealSystemsGrid projects={featuredProjects} columns={2} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
          >
            See All Systems
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
