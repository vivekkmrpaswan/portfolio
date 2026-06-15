import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.name}</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
      </div>
    </footer>
  );
}
