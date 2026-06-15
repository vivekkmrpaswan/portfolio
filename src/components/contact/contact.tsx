"use client";

import { Code2, ContactRound, ExternalLink, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { contactLinks } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/animations";

import { ContactForm } from "./contact-form";

const contactIcons = {
  Email: Mail,
  GitHub: Code2,
  LinkedIn: ContactRound,
};

const isContactFormEnabled = true;

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";
  const whileInView = shouldReduceMotion ? undefined : "visible";

  return (
    <section id="contact" className="border-t bg-muted/35">
      <motion.div
        variants={staggerContainer}
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24"
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            I&apos;m currently seeking frontend development opportunities and
            enjoy working on meaningful products. If you&apos;d like to discuss
            a role, project, or collaboration, feel free to get in touch.
          </p>

          <div className="mt-8 grid gap-3">
            {contactLinks.map((link) => {
              const Icon =
                contactIcons[link.label as keyof typeof contactIcons] ?? Mail;

              const isExternal = !link.href.startsWith("mailto:");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group flex min-w-0 items-center justify-between gap-4 rounded-lg border bg-background p-4 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium transition-colors group-hover:text-primary-foreground">
                        {link.label}
                      </span>

                      <span className="block break-all text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/90">
                        {link.value}
                      </span>
                    </span>
                  </span>

                  {isExternal ? (
                    <ExternalLink
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary-foreground"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="h-full">
          {isContactFormEnabled ? <ContactForm /> : <DisabledContactForm />}
        </motion.div>
      </motion.div>
    </section>
  );
}

function DisabledContactForm() {
  return (
    <div
      aria-disabled="true"
      className="rounded-lg border bg-background p-6 opacity-75 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Send aria-hidden className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold tracking-tight">Contact Form</h3>

          <p className="text-sm text-muted-foreground">Disabled by default</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <FormPreviewField label="Name" />
        <FormPreviewField label="Email" />
        <FormPreviewField label="Message" multiline />

        <Button disabled className="w-full">
          Send Message
        </Button>
      </div>
    </div>
  );
}

function FormPreviewField({
  label,
  multiline,
}: Readonly<{ label: string; multiline?: boolean }>) {
  return (
    <div className="grid gap-2">
      <div className="text-sm font-medium text-muted-foreground">{label}</div>

      <div
        className={
          multiline
            ? "min-h-24 rounded-md border bg-muted"
            : "h-10 rounded-md border bg-muted"
        }
      />
    </div>
  );
}
