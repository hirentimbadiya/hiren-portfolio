const skillCategories = [
  { title: "Cloud & IaC", icon: "☁️", skills: ["AWS (EC2, ECS, EKS, RDS, Lambda, API Gateway, KMS, EventBridge, WAF, Route 53)", "GCP", "Terraform", "CloudFormation", "Ansible", "Packer"] },
  { title: "Containers & Orchestration", icon: "🐳", skills: ["Docker", "Kubernetes", "Helm", "ECS", "EKS", "ArgoCD"] },
  { title: "CI/CD", icon: "🔄", skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "GitOps"] },
  { title: "Observability", icon: "📊", skills: ["Prometheus", "Grafana", "ELK Stack", "Loki", "New Relic", "CloudWatch"] },
  { title: "Security", icon: "🔒", skills: ["SonarQube", "Semgrep", "Trivy", "Prowler", "IAM Hardening", "KMS"] },
  { title: "Languages & Tools", icon: "⚡", skills: ["Python", "Bash", "Go", "Java", "Linux", "Git", "Kafka", "Redis"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 bg-light-card dark:bg-dark-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-sm text-accent-blue dark:text-accent-yellow mb-2">$ cat skills.yml</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Tech Stack</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-light dark:bg-dark border border-light-border dark:border-dark-border rounded-2xl p-6 hover:border-accent-blue dark:hover:border-accent-yellow transition-all">
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h4 className="font-bold mb-3">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="font-mono text-xs px-2 py-1 rounded-md bg-dark/5 dark:bg-white/5 text-light-muted dark:text-dark-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
