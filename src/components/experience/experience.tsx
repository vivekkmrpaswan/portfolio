"use client";

import { BriefcaseBusiness, CheckCircle2, Trophy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";
  const whileInView = shouldReduceMotion ? undefined : "visible";

  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <motion.div
        variants={staggerContainer}
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            A timeline of frontend development work, responsibilities, and
            measurable outcomes.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8">
          {experience.map((item) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              variants={fadeUp}
              className="relative grid gap-6 rounded-lg border bg-card p-6 text-card-foreground shadow-sm md:grid-cols-[14rem_1fr]"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <BriefcaseBusiness aria-hidden className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-medium text-muted-foreground">
                  {item.duration}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.role}
                </h3>
                <p className="mt-1 text-muted-foreground">{item.company}</p>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <TimelineList
                    icon="responsibilities"
                    title="Responsibilities"
                    items={item.responsibilities}
                  />
                  <TimelineList
                    icon="achievements"
                    title="Achievements"
                    items={item.achievements}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TimelineList({
  icon,
  title,
  items,
}: Readonly<{
  icon: "responsibilities" | "achievements";
  title: string;
  items: string[];
}>) {
  const Icon = icon === "achievements" ? Trophy : CheckCircle2;

  return (
    <div>
      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
        <Icon aria-hidden className="h-4 w-4 text-primary" />
        {title}
      </h4>
      <ul className="mt-3 grid gap-3 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
