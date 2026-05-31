# Hiren Timbadiya

**DevOps / SRE Engineer**

+91 89052 77091 · [hirentimbadiya74@gmail.com](mailto:hirentimbadiya74@gmail.com) · [linkedin.com/in/hirentimbadiya74](https://linkedin.com/in/hirentimbadiya74) · [github.com/hirentimbadiya](https://github.com/hirentimbadiya)

---

## Summary

DevOps engineer working on cloud infrastructure, CI/CD, and observability for a SaaS security platform. Currently at Armorcode, where I cut compute spend, sped up pipelines, and built backup/DR for stateful workloads across Terraform, Kubernetes, Jenkins, ELK, and GitHub Actions.

---

## Education

**L.D. College of Engineering** — B.E. Information Technology | CGPA: 8.66/10
*Jul 2020 – Jul 2024*

---

## Experience

### DevOps Engineer — Armorcode Inc., Gurugram, India
*May 2024 – Present* · Promoted from Associate DevOps Engineer.

- Killed the daily ~1-hour customer release call by building a polling-based remote execution system: Lambda + API Gateway accepts a JSON payload of Jenkins jobs, stores them in DynamoDB, and customer-side Jenkins polls the table to execute them sequentially, reporting status back.
- Designed cross-region, cross-account Backup & DR for RDS/Aurora, DocumentDB, and OpenSearch using EventBridge + Lambda with KMS encryption and automated health checks.
- Cut compute costs ~11% ($8,600 to $7,640/mo, saving $960/month) by migrating workloads from x86 to ARM Graviton with zero performance regression.
- Boosted CI/CD throughput ~80% and trimmed agent costs by ~$224/mo by migrating Jenkins to ECS/EC2 on-demand agents.
- Cut idle compute spend by ~$300/mo via ECS step scaling driven by SQS queue depth for AI-correlation workloads.
- Built GitHub Actions pipelines with AI-powered PR review and tflint validation on every Terraform PR, catching misconfigs and policy drift before merge.

### Software Engineer Intern, DevOps — LaNet Team Software Solution Pvt. Ltd., Surat, India
*Nov 2023 – Apr 2024* · Internship spanning cloud security, CI/CD, and frontend collaboration.

- Eliminated 40% of overprivileged IAM roles via quarterly security audits, hardening policies and security groups across dev and prod.
- Built parameterized Jenkins CI/CD pipelines with shared libraries, cutting manual release steps and standardizing deploys.
- Set up Prometheus + Grafana dashboards for service health, materially reducing mean time to debug.
- Migrated hardcoded API keys into Google Secret Manager, closing a real credential-exposure gap across environments.

---

## Projects

### Monitoring & Logging Pipeline (Self-hosted ELK on AWS) — [GitHub](https://github.com/hirentimbadiya)
*Terraform, Elasticsearch, Logstash, Kibana, Filebeat, Nginx, CloudWatch, S3*

- Provisioned a production-grade ELK stack on EC2 via Terraform with public/private subnet isolation; Kibana fronted by Nginx reverse proxy with TLS and basic auth.
- Configured 4 Logstash pipelines (Beats, Syslog, HTTP JSON, DLQ reprocessor) with GeoIP enrichment; Filebeat ships container, Nginx, and auth logs from app servers.
- Applied ILM policies (hot/warm/cold/delete) and SLM-based S3 snapshots; migrated off Logz.io and cut incident response time 60%.

### AWS Network Firewall, Egress Filtering (IaC) — [GitHub](https://github.com/hirentimbadiya)
*Terraform, AWS Network Firewall, VPC, CloudWatch, GitHub Actions*

- Provisioned multi-AZ AWS Network Firewall with dedicated firewall subnets per AZ, separate public/private tiers, and NAT-based egress routing.
- Engineered domain-based egress allowlist using `HTTP_HOST` and `TLS_SNI` rule groups, plus stateful rules for DNS, SSH, ICMP, and established TCP flows.
- Phased rollout via a configurable `enable_strict_mode` Terraform var (monitor to strict drop); full observability through CloudWatch logs and GitHub Actions CI running fmt/init/validate on every PR.

---

## Technical Skills

**Languages & Tools:** Java, Python, Bash, Go, Linux, Docker, Kubernetes, Helm, Ansible, Packer

**Cloud & IaC:** AWS (EC2, ECS, EKS, RDS, OpenSearch, Lambda, API Gateway, KMS, EventBridge, WAF, Route 53), GCP, Terraform, CloudFormation

**CI/CD & Observability:** Jenkins, GitHub Actions, GitLab CI, ArgoCD, Prometheus, Grafana, ELK, Loki, New Relic, CloudWatch, SonarQube, Semgrep, Trivy

**Data Stores & Practices:** Elasticsearch, Kafka, Redis | SLOs/SLIs, MTTR reduction, GitOps
