"use client";

import Image from "next/image";
import { Code2, Contact, ExternalLink, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroActions, siteConfig } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const actionIcons = {
  Resume: FileText,
  GitHub: Code2,
  LinkedIn: Contact,
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";
  const animate = shouldReduceMotion ? undefined : "visible";

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 pb-12 sm:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-0"
    >
      <motion.div
        variants={staggerContainer}
        initial={initial}
        animate={animate}
        className="max-w-3xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-medium uppercase tracking-wide text-primary"
        >
          {siteConfig.role}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          {siteConfig.introduction}
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          {heroActions.map((action) => {
            const Icon = actionIcons[action.label as keyof typeof actionIcons];

            return (
              <Button
                key={action.label}
                asChild
                variant={action.variant}
                size="lg"
                className={cn(
                  "w-full sm:w-auto",
                  action.label !== "Resume" &&
                    "transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary",
                )}
              >
                <a
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                >
                  {Icon ? <Icon aria-hidden className="h-4 w-4" /> : null}
                  {action.label}
                  {action.external ? (
                    <ExternalLink aria-hidden className="h-4 w-4" />
                  ) : null}
                </a>
              </Button>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial={initial}
        animate={animate}
        className="mx-auto w-full max-w-sm lg:max-w-md"
      >
        <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
          <Image
            src={siteConfig.profileImage}
            alt={`${siteConfig.name} professional portrait`}
            width={1024}
            height={1536}
            priority
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
            className="aspect-4/5 w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
