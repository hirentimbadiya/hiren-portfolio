export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-accent-blue dark:text-accent-yellow mb-2">$ cat about.md</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">About Me</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-light-muted dark:text-dark-muted leading-relaxed">
            <p>
              I&apos;m a DevOps Engineer with <strong>3+ years</strong> of experience in cloud
              automation, CI/CD, and infrastructure-as-code on AWS. I focus on building systems
              that are reliable, cost-efficient, and easy to operate.
            </p>
            <p>
              Think automated disaster recovery pipelines, self-healing infrastructure, and
              release workflows that remove manual bottlenecks. I build it, I ship it, I&apos;ll
              be on your floor if it breaks.
            </p>
            <p>
              Currently at <strong>ArmorCode Inc.</strong>, where I&apos;ve cut compute costs,
              sped up pipelines, and built backup/DR for stateful workloads across Terraform,
              Kubernetes, Jenkins, ELK, and GitHub Actions.
            </p>
          </div>

          <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 font-mono text-sm space-y-3">
            <div className="text-accent-green">// quick_facts.json</div>
            <div className="space-y-1 text-light-muted dark:text-dark-muted">
              <p>{`{`}</p>
              <p className="pl-4">&quot;location&quot;: &quot;Gurugram, India&quot;,</p>
              <p className="pl-4">&quot;company&quot;: &quot;ArmorCode Inc.&quot;,</p>
              <p className="pl-4">&quot;role&quot;: &quot;DevOps Engineer&quot;,</p>
              <p className="pl-4">&quot;education&quot;: &quot;B.E. IT — LDCE (8.66 CGPA)&quot;,</p>
              <p className="pl-4">&quot;github_repos&quot;: 41,</p>
              <p className="pl-4">&quot;linkedin_followers&quot;: &quot;3,700+&quot;,</p>
              <p className="pl-4">&quot;coffee_per_day&quot;: &quot;∞&quot;</p>
              <p>{`}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
