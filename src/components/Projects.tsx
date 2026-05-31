import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "AWS Network Firewall (IaC)",
    description: "Multi-AZ AWS Network Firewall with domain-based egress filtering, TLS_SNI rules, phased rollout via configurable strict mode, and full CI/CD with GitHub Actions.",
    tech: ["Terraform", "AWS", "GitHub Actions"],
    github: "https://github.com/hirentimbadiya/aws-network-firewall-terraform",
  },
  {
    title: "ELK Stack on AWS",
    description: "Production-grade ELK stack on EC2 via Terraform with public/private subnet isolation, 4 Logstash pipelines, ILM policies, S3 snapshots. Cut incident response time 60%.",
    tech: ["Terraform", "Elasticsearch", "Logstash", "Kibana"],
    github: "https://github.com/hirentimbadiya/elk-stack-aws-terraform",
  },
  {
    title: "ECS SQS Autoscaling",
    description: "ECS step scaling driven by SQS queue depth for AI-correlation workloads. Automated cost optimization cutting idle compute spend by ~$300/mo.",
    tech: ["Terraform", "AWS ECS", "SQS", "CloudWatch"],
    github: "https://github.com/hirentimbadiya/ecs-sqs-autoscaling-terraform",
  },
  {
    title: "Video-Peers",
    description: "Real-time P2P video chat application built using WebRTC & Socket.io. 15 stars, 7 forks on GitHub.",
    tech: ["JavaScript", "WebRTC", "Socket.io"],
    github: "https://github.com/hirentimbadiya/Video-Peers",
    stars: 15,
    forks: 7,
  },
  {
    title: "Notes App (Full Stack)",
    description: "End-to-End DevOps project — full-stack notes application with complete CI/CD pipeline, containerization, and Kubernetes deployment.",
    tech: ["JavaScript", "Docker", "Kubernetes", "Jenkins"],
    github: "https://github.com/hirentimbadiya/notes-app",
  },
  {
    title: "NotesApp DevOps",
    description: "DevOps resources including Jenkins Groovy scripts, Helm Chart templates, and Prometheus configurations for the notes application.",
    tech: ["Groovy", "Helm", "Prometheus", "Jenkins"],
    github: "https://github.com/hirentimbadiya/notesapp-devops",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-sm text-accent-blue dark:text-accent-yellow mb-2">$ ls projects/</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Things I&apos;ve Built</h3>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 hover:border-accent-blue dark:hover:border-accent-yellow transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold group-hover:text-accent-blue dark:group-hover:text-accent-yellow transition-colors">
                  {project.title}
                </h4>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md hover:bg-dark/5 dark:hover:bg-white/5" aria-label={`View ${project.title} on GitHub`}>
                  <Github size={16} />
                </a>
              </div>

              <p className="text-sm text-light-muted dark:text-dark-muted mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs px-2 py-0.5 rounded-md bg-dark/5 dark:bg-white/5 text-light-muted dark:text-dark-muted">
                      {t}
                    </span>
                  ))}
                </div>
                {(project.stars || project.forks) && (
                  <div className="flex items-center gap-3 text-xs text-light-muted dark:text-dark-muted">
                    {project.stars && <span className="flex items-center gap-1"><Star size={12} /> {project.stars}</span>}
                    {project.forks && <span className="flex items-center gap-1"><GitFork size={12} /> {project.forks}</span>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/hirentimbadiya?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-xl border border-light-border dark:border-dark-border hover:border-accent-blue dark:hover:border-accent-yellow transition-all">
            <ExternalLink size={14} /> View all 41 repos
          </a>
        </div>
      </div>
    </section>
  );
}
