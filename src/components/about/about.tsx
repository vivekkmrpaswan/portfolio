"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/data/about";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";
  const whileInView = shouldReduceMotion ? undefined : "visible";

  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.3 }}
      className="border-y bg-muted/35"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <motion.div variants={fadeUp}>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional Summary
          </h2>
          <div className="mt-2 overflow-hidden rounded-lg border bg-card shadow-sm">
            <Image
              src={aboutContent.imageUrl}
              alt={`professional desk setup`}
              width={1024}
              height={1536}
              priority
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="grid gap-8">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Biography</h3>
            <p className="mt-3 leading-8 text-muted-foreground">
              {aboutContent.biography}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Summary</h3>
            <p className="mt-3 leading-8 text-muted-foreground">
              {aboutContent.summary}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Current Learning Interests
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {aboutContent.learningInterests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-lg border bg-background px-4 py-3 text-sm text-muted-foreground"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
