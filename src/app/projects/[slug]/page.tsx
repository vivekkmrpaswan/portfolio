import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: Readonly<ProjectPageProps>) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-24">
      <Button asChild variant="ghost" className="-ml-4 mb-8">
        <Link href="/#projects">
          <ArrowLeft aria-hidden className="h-4 w-4" />
          Back to projects
        </Link>
      </Button>

      <p className="text-sm font-medium uppercase tracking-wide text-primary">
        {project.category}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">
        {project.summary}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden className="h-4 w-4" />
            Live Demo
          </a>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <GitBranch aria-hidden className="h-4 w-4" />
            GitHub Repository
          </a>
        </Button>
      </div>

      <div className="relative mt-10 aspect-video overflow-hidden rounded-lg border bg-muted">
        <Image
          src={project.heroImage}
          alt={`${project.title} interface preview`}
          fill
          priority
          sizes="(min-width: 768px) 56rem, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-10 grid gap-8">
        <ProjectSection title="Overview" content={project.overview} />
        <ProjectSection title="Problem Statement" content={project.problem} />
        <ProjectSection
          title="Solution Implemented"
          content={project.solution}
        />
        <ProjectSection
          title="Architecture / Technical Approach"
          content={project.architecture}
        />
        <ProjectList title="Key Features" items={project.keyFeatures} />
        <ProjectList title="Challenges Faced" items={project.challenges} />
        <ProjectList title="Lessons Learned" items={project.lessons} />
        <ProjectList title="Technologies Used" items={project.techStack} />
      </div>
    </main>
  );
}

function ProjectSection({
  title,
  content,
}: Readonly<{
  title: string;
  content: string;
}>) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 leading-7 text-muted-foreground">{content}</p>
    </section>
  );
}

function ProjectList({
  title,
  items,
}: Readonly<{ title: string; items: string[] }>) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
