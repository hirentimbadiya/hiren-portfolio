import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-light-card dark:bg-dark-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-sm text-accent-blue dark:text-accent-yellow mb-2">$ ./contact.sh</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h3>
        <p className="text-light-muted dark:text-dark-muted mb-8 max-w-lg mx-auto">
          Working on hard infrastructure problems or building at scale?
          I&apos;m always open to connecting. Drop me a line.
        </p>

        <div className="bg-light dark:bg-dark border border-light-border dark:border-dark-border rounded-2xl p-6 font-mono text-sm text-left mb-8">
          <div className="text-accent-green mb-2">#!/bin/bash</div>
          <div className="text-light-muted dark:text-dark-muted space-y-1">
            <p>echo &quot;Reaching out to Hiren...&quot;</p>
            <p>&nbsp;</p>
            <p>EMAIL=&quot;hirentimbadiya74@gmail.com&quot;</p>
            <p>LOCATION=&quot;Gurugram, Haryana, India&quot;</p>
            <p>&nbsp;</p>
            <p className="text-accent-yellow"># Pick your preferred channel 👇</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hirentimbadiya74@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-white font-medium hover:opacity-90 transition-opacity">
            <Mail size={16} /> Send Email
          </a>
          <a href="https://www.linkedin.com/in/hirentimbadiya74/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow transition-all">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://x.com/heyhiru" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow transition-all">
            <Twitter size={16} /> @heyhiru
          </a>
          <a href="https://github.com/hirentimbadiya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow transition-all">
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
