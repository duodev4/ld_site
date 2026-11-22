"use client";

import { motion } from "framer-motion";

import type { ProjectCardData } from "@/lib/real-systems-data";
import { RealSystemsCard } from "./real-systems-card";

type RealSystemsGridProps = {
  projects: ProjectCardData[];
  columns?: 2 | 3;
};

export function RealSystemsGrid({ projects, columns = 3 }: RealSystemsGridProps) {
  const gridClass =
    columns === 2
      ? "grid gap-5 sm:grid-cols-2"
      : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClass}>
      {projects.map((project, index) => (
        <RealSystemsCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
