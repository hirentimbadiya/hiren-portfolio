const experiences = [
  {
    title: "DevOps Engineer",
    company: "ArmorCode Inc.",
    location: "Gurugram, India · Hybrid",
    period: "Jun 2025 – Present",
    dotColor: "#2563EB",
    bullets: [
      "Own and automate critical cloud + CI/CD infrastructure to improve release speed, reliability, and cost efficiency in a SaaS security platform.",
      "Killed the daily ~1-hour customer release call by building a polling-based remote execution system: Lambda + API Gateway + DynamoDB + Jenkins.",
      "Designed cross-region, cross-account Backup & DR for RDS/Aurora, DocumentDB, and OpenSearch using EventBridge + Lambda with KMS encryption.",
    ],
  },
  {
    title: "Associate DevOps Engineer",
    company: "ArmorCode Inc.",
    location: "Gurugram, India · On-site",
    period: "May 2024 – Jul 2025",
    dotColor: "#F7A501",
    bullets: [
      "Cut compute costs ~11% ($960/mo saved) by migrating workloads from x86 to ARM Graviton with zero performance regression.",
      "Boosted CI/CD throughput ~80% and trimmed agent costs by ~$224/mo by migrating Jenkins to ECS/EC2 on-demand agents.",
      "Cut idle compute spend by ~$300/mo via ECS step scaling driven by SQS queue depth for AI-correlation workloads.",
      "Built GitHub Actions pipelines with AI-powered PR review and tflint validation on every Terraform PR.",
    ],
  },
  {
    title: "Software Engineer Intern, DevOps",
    company: "LaNet Team Software Solution Pvt. Ltd.",
    location: "Surat, India",
    period: "Nov 2023 – Apr 2024",
    dotColor: "#F54E00",
    bullets: [
      "Eliminated 40% of overprivileged IAM roles via quarterly security audits.",
      "Built parameterized Jenkins CI/CD pipelines with shared libraries, standardizing deploys.",
      "Set up Prometheus + Grafana dashboards for service health, reducing mean time to debug.",
      "Migrated hardcoded API keys into Google Secret Manager, closing credential-exposure gaps.",
    ],
  },
  {
    title: "Contributor & Community Member",
    company: "Layer5 (Open Source)",
    location: "Remote",
    period: "Mar 2023 – Oct 2023",
    dotColor: "#16A34A",
    bullets: [
      "Active contributor to Layer5 open-source projects (Meshery, service mesh ecosystem).",
      "Engaged in various open-source projects using Next.js, Go, and CI/CD pipeline automation.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 bg-light-card dark:bg-dark-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-accent-blue dark:text-accent-yellow mb-2">$ ls experience/</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Where I&apos;ve Worked</h3>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-light-border dark:border-dark-border">
              <div
                className="absolute left-[-9px] top-1 w-4 h-4 rounded-full border-4 border-light-card dark:border-dark-card"
                style={{ backgroundColor: exp.dotColor }}
              />
              <div className="pb-8">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h4 className="text-lg font-bold">{exp.title}</h4>
                  <span className="font-mono text-xs text-light-muted dark:text-dark-muted">@ {exp.company}</span>
                </div>
                <p className="font-mono text-xs text-light-muted dark:text-dark-muted mb-3">
                  {exp.period} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-light-muted dark:text-dark-muted flex gap-2">
                      <span className="text-accent-green mt-0.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
