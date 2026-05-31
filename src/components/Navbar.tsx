"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "about.md" },
  { href: "#experience", label: "experience/" },
  { href: "#projects", label: "projects/" },
  { href: "#skills", label: "skills.yml" },
  { href: "#hobbies", label: "hobbies.txt" },
  { href: "#contact", label: "contact.sh" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-light-border dark:border-dark-border bg-light/80 dark:bg-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#" className="font-mono text-sm font-bold text-accent-blue dark:text-accent-yellow">
          ~/hiren
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs px-3 py-1.5 rounded-md text-dark/70 dark:text-white/70 hover:bg-dark/5 dark:hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-3 p-2 rounded-md hover:bg-dark/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2" aria-label="Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-light-border dark:border-dark-border bg-light dark:bg-dark px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-sm py-2 text-dark/70 dark:text-white/70 hover:text-accent-blue dark:hover:text-accent-yellow transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
