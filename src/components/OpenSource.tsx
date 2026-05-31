import { ExternalLink } from "lucide-react";

export function OpenSource() {
  return (
    <section id="opensource" className="py-20 sm:py-24 px-4 sm:px-6 bg-light-card dark:bg-dark-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-accent-blue dark:text-accent-yellow mb-2">$ tail -f opensource.log</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">Open Source</h3>

        <div className="space-y-6">
          <div className="bg-light dark:bg-dark border border-light-border dark:border-dark-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-lg font-bold">Layer5</h4>
                <p className="font-mono text-xs text-light-muted dark:text-dark-muted">Contributor & Community Member · Mar 2023 – Oct 2023</p>
              </div>
              <a href="https://github.com/layer5io/layer5" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md hover:bg-dark/5 dark:hover:bg-white/5" aria-label="Layer5 GitHub">
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-4">
              Active contributor to Layer5&apos;s open-source service mesh ecosystem (Meshery).
              Contributed to projects using Next.js, Go, and CI/CD pipeline automation.
              Invited to join the Layer5 organization on GitHub.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Go", "CI/CD", "JavaScript", "Jenkins"].map((t) => (
                <span key={t} className="font-mono text-xs px-2 py-0.5 rounded-md bg-dark/5 dark:bg-white/5 text-light-muted dark:text-dark-muted">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-light dark:bg-dark border border-light-border dark:border-dark-border rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-3">By the Numbers</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "GitHub Repos", value: "41" },
                { label: "Followers", value: "55" },
                { label: "Stars Earned", value: "15+" },
                { label: "Contributions", value: "100+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-accent-blue dark:text-accent-yellow">{stat.value}</div>
                  <div className="font-mono text-xs text-light-muted dark:text-dark-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
