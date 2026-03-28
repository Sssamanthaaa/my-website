import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/projectCard.js";
import projects from "../data/projectsData";

const FILTERS = ["All", "Robotics", "UI/UX", "Security", "Mobile"];

// Stagger container for cards
const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const tilts = useMemo(
    () => projects.map(() => Math.floor(Math.random() * 9) - 4),
    []
  );

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="theme-surface theme-heading snap-start md:px-20 pt-32 pb-16"
    >
      {/* Heading */}
      <motion.div
        className="max-w-5xl mx-auto mb-6 p-6 md:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Projects</h2>
        <p className="theme-muted theme-mono text-base md:text-lg leading-relaxed">
          I've worked on personal, academic, and community projects-individually
          and with teams. Some repos are private; reach out if you'd like access.
        </p>
      </motion.div>

      {/* Filter bar */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-8 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`theme-body px-4 py-1.5 rounded-full text-sm font-medium transition ${
              activeFilter === f
                ? "theme-chip-active"
                : "theme-outline-button"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Card grid - key={activeFilter} remounts the grid on filter change,
          replaying the stagger animation fresh each time */}
      <motion.div
        key={activeFilter}
        className="mx-auto mt-2 grid gap-4
                   grid-cols-2
                   sm:grid-cols-3
                   lg:grid-cols-4
                   xl:grid-cols-5
                   2xl:grid-cols-6
                   max-w-4xl px-6"
        variants={cardContainer}
        initial="hidden"
        animate="show"
      >
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            className="w-full max-w-[200px] h-[300px] mx-auto"
            variants={cardItem}
          >
            <ProjectCard {...p} tilt={tilts[projects.indexOf(p)]} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
