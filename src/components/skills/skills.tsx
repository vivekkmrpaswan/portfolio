"use client";

import { Code2, Database, Server, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { SkillCategory } from "@/types";

const categoryIcons: Record<SkillCategory["title"], typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";
  const whileInView = shouldReduceMotion ? undefined : "visible";

  return (
    <section id="skills" className="border-y bg-muted/35">
      <motion.div
        variants={staggerContainer}
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-20 lg:py-24"
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            Skills developed through hands-on experience building web
            applications, collaborating on projects, and continuously learning
            modern technologies.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title];

            return (
              <motion.article
                key={category.title}
                variants={fadeUp}
                className="rounded-lg border bg-background p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon aria-hidden className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border bg-card px-3 py-1.5 text-sm text-card-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
