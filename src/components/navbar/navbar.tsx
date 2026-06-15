"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

function subscribe() {
  return () => {};
}

function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  globalThis.scrollTo({ top: 0, behavior: "smooth" });
  globalThis.history.replaceState(null, "", "/");
}

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const isDark = mounted && resolvedTheme === "dark";
  const sectionIds = useMemo(
    () => navigationItems.map((item) => item.href.replace("/#", "")),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  function handleThemeToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  function handleMenuToggle() {
    setIsMenuOpen((current) => !current);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    const id = href.replace("/#", "");
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    globalThis.history.replaceState(null, "", `/#${id}`);
    handleMenuClose();
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="font-semibold tracking-tight"
          onClick={handleLogoClick}
        >
          VIVEK KUMAR
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {navigationItems.map((item) => {
            const sectionId = item.href.replace("/#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-lg text-muted-foreground transition-all duration-200",
                  "hover:bg-primary/30 hover:text-primary",
                  isActive && "bg-primary/30 text-primary",
                )}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle dark mode"
            onClick={handleThemeToggle}
            className="cursor-pointer"
          >
            {isDark ? <Sun aria-hidden /> : <Moon aria-hidden />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
          </Button>
        </div>
      </nav>
      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t bg-background px-6 py-4 md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigationItems.map((item) => {
              const sectionId = item.href.replace("/#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-lg text-muted-foreground transition-all duration-200",
                    "hover:bg-primary/30 hover:text-primary",
                    isActive && "bg-primary/30 text-primary",
                  )}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
