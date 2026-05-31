import { Github, Linkedin, Twitter, Mail, FileDown, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-accent-blue/20 dark:ring-accent-yellow/20">
          <Image src="/hiren.png" alt="Hiren Timbadiya" fill sizes="128px" className="object-cover" priority />
        </div>

        <div className="inline-block font-mono text-xs bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full px-4 py-1.5">
          status: caffeinated &amp; deploying 🚀
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-accent-blue dark:text-accent-yellow">Hiren</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-light-muted dark:text-dark-muted max-w-2xl mx-auto leading-relaxed">
          I build platforms that don&apos;t wake you up at 2 AM
          <br />
          <span className="text-sm font-mono text-accent-red">(unless it&apos;s a real incident)</span>
        </p>

        <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted max-w-xl mx-auto">
          DevOps/SRE Engineer · AWS · Terraform · Kubernetes · CI/CD · Observability
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href="mailto:hirentimbadiya74@gmail.com?subject=Let's%20work%20together"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Sparkles size={16} /> Hire Me
          </a>
          <a
            href="/Hiren-Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-accent-blue dark:border-accent-yellow text-accent-blue dark:text-accent-yellow font-semibold hover:bg-accent-blue/5 dark:hover:bg-accent-yellow/5 transition-colors"
          >
            <FileDown size={16} /> Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <a href="https://github.com/hirentimbadiya" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow hover:scale-105 transition-all" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/hirentimbadiya74/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow hover:scale-105 transition-all" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/heyhiru" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow hover:scale-105 transition-all" aria-label="X/Twitter">
            <Twitter size={20} />
          </a>
          <a href="mailto:hirentimbadiya74@gmail.com" className="p-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow hover:scale-105 transition-all" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <a href="#about" className="inline-block mt-6 font-mono text-sm text-accent-blue dark:text-accent-yellow hover:underline">
          ↓ cat about.md
        </a>
      </div>
    </section>
  );
}
