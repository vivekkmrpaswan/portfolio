"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { featuredProjects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Project } from "@/types";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";
  const whileInView = shouldReduceMotion ? undefined : "visible";

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <motion.div
        variants={staggerContainer}
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            A collection of projects demonstrating modern frontend development,
            full-stack application design, and real-world problem solving.
          </p>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: Readonly<{ project: Project }>) {
  return (
    <Dialog>
      <motion.article
        variants={fadeUp}
        className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
      >
        <DialogTrigger className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <div className="relative aspect-16/10 overflow-hidden border-b bg-muted">
            <Image
              src={project.heroImage}
              alt={`${project.title} interface preview`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contained p-2 transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </DialogTrigger>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Layers3 aria-hidden className="h-4 w-4" />
            {project.category}
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border bg-background px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <Button asChild size="sm">
              <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                <ExternalLink aria-hidden className="h-4 w-4" />
                Demo
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <GitBranch aria-hidden className="h-4 w-4" />
                Code
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={`/projects/${project.slug}`}>
                Details
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.article>

      <ProjectDialog project={project} />
    </Dialog>
  );
}

function ProjectDialog({ project }: Readonly<{ project: Project }>) {
  return (
    <DialogContent>
      <DialogHeader>
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          {project.category}
        </p>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription>{project.summary}</DialogDescription>
      </DialogHeader>

      <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
        <Image
          src={project.heroImage}
          alt={`${project.title} large interface preview`}
          fill
          sizes="(min-width: 768px) 56rem, 100vw"
          className="object-cover"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DetailBlock title="Project Overview" content={project.overview} />
        <DetailBlock title="Problem Statement" content={project.problem} />
        <DetailBlock title="Solution Implemented" content={project.solution} />
        <DetailBlock
          title="Architecture / Technical Approach"
          content={project.architecture}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DetailList title="Key Features" items={project.keyFeatures} />
        <DetailList title="Challenges Faced" items={project.challenges} />
        <DetailList title="Lessons Learned" items={project.lessons} />
        <DetailList title="Technologies Used" items={project.techStack} />
      </div>
    </DialogContent>
  );
}

function DetailBlock({
  title,
  content,
}: Readonly<{ title: string; content: string }>) {
  return (
    <section>
      <h4 className="font-semibold tracking-tight">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{content}</p>
    </section>
  );
}

function DetailList({
  title,
  items,
}: Readonly<{ title: string; items: string[] }>) {
  return (
    <section>
      <h4 className="font-semibold tracking-tight">{title}</h4>
      <ul className="mt-2 grid gap-2 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
