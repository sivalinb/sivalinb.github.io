// Professional background is summarized from Siva's supplied résumé.
// Project descriptions refer to independent public implementations.
export const featuredWork = [
  { slug: 'model-quality-lab', focus: 'Model quality & ML platforms', summary: 'Find silent model regressions. Make release decisions from evidence.', demonstrates: 'Paired ranking evaluation, user-cluster uncertainty, training-serving skew, delayed-label joins and durable telemetry.', stack: ['Python / scikit-learn', 'OpenTelemetry', 'Grafana / Kafka'], caption: 'Actual application capture · synthetic fault replay' },
  { slug: 'fleet-reliability-lab', focus: 'Fleet observability & operations', summary: 'Take a signal all the way to verified, useful capacity.', demonstrates: 'Qualification gates, tenant boundaries, durable repair, correlated telemetry and explicit capacity economics.', stack: ['Temporal / Python', 'Mimir / Loki / Tempo', 'OpenTelemetry'], caption: 'Actual animated walkthrough · synthetic hardware' },
  { slug: 'gpu-fleetops', focus: 'Fleet reliability', summary: 'Understand fleet failures. Measure whether a fix helps.', demonstrates: 'Explicit MTBI contracts, matched cohorts, censored statistics, controlled experiments and predictive-health evaluation.', stack: ['Python / SciPy', 'Prometheus', 'Gradio'], caption: 'Calculated reliability figures · synthetic fleet' },
  { slug: 'ai-factory-observability-lab', focus: 'Infrastructure observability', summary: 'Find the connection between a slow workload and its infrastructure.', demonstrates: 'Source contracts, GPU and fabric correlation, coverage checks and owned alert rules.', stack: ['Prometheus', 'Grafana', 'Python'], caption: 'Actual Grafana capture · simulated feeds' },
  { slug: 'ai-incident-investigator', focus: 'AI agent reliability', summary: 'Measure AI advice. Review the repair. Verify recovery.', demonstrates: 'OpenInference traces, evaluation of real local inference, exact approvals and recovery verification.', stack: ['OpenInference', 'Ollama / Gradio', 'Grafana'], caption: 'Actual Gradio capture · synthetic checkout' },
  { slug: 'llm-serving-observatory', focus: 'Inference systems', summary: 'Make the serving path and its measurements visible.', demonstrates: 'Serving architecture, TTFT and decode telemetry, memory budgets and clearly scoped experiments.', stack: ['FastAPI', 'llama.cpp', 'Prometheus'], caption: 'Project architecture diagram' },
  { slug: 'telemetry-cardinality-governor', focus: 'Durable automation', summary: 'A telemetry change needs evidence, a canary and a way back.', demonstrates: 'Temporal workflows, idempotent effects, human approval, measured validation and rollback.', stack: ['Temporal', 'Prometheus', 'Python'], caption: 'Architecture diagram · Temporal and Prometheus lab' },
];

export const strengths = [
  { icon: 'ai-infrastructure', title: 'AI infrastructure', text: 'Inference serving, fleet inventory, hardware context and capacity planning.', tools: 'Python · Go · SQL · Linux', proof: ['gpu-fleetops', 'llm-serving-observatory'] },
  { icon: 'observability', title: 'Observability', text: 'Signals that explain behavior: metric contracts, useful dashboards and source-aware telemetry.', tools: 'Prometheus · Grafana · OpenTelemetry', proof: ['fleet-reliability-lab', 'grafana-data-center-explorer'] },
  { icon: 'systems', title: 'Reliability engineering', text: 'Interruption measurement, reliability statistics, controlled validation and recoverable changes.', tools: 'MTBI · Survival analysis · SLOs · Temporal', proof: ['gpu-fleetops', 'telemetry-cardinality-governor'] },
  { icon: 'community', title: 'Evidence-grounded AI', text: 'Scoped retrieval and agent tools, evaluation traces and review before action.', tools: 'Gemini · LangGraph · Retrieval · Evals', proof: ['ai-incident-investigator', 'gpu-signal-atlas', 'nanga-hatti', 'circlepath-rj'] },
];

export const experience = [
  { company: 'Apple', role: 'Senior Software Engineer', period: '2022–present', context: 'Private Cloud Compute · Observability', text: 'Inference telemetry, fleet inventory, capacity planning, metric governance and automated release validation.' },
  { company: 'Oracle', role: 'Principal Member of Technical Staff', period: '2013–2022', context: 'Exalogic Elastic Cloud', text: 'Enterprise infrastructure architecture, rack deployment planning, production escalation and provisioning software.' },
  { company: 'Telenav & Brocade', role: 'Operations & engineering', period: '2005–2013', context: 'Deployment, networks & production systems', text: 'Deployment tooling, on-call operations, capacity automation, and network fault and performance management.' },
];

export const categoryPicks: Record<string,string[]> = {
  observability: ['fleet-reliability-lab', 'ai-incident-investigator', 'telemetry-cardinality-governor'],
  'ai-infrastructure': ['model-quality-lab', 'gpu-fleetops', 'ai-factory-observability-lab', 'llm-serving-observatory'],
  systems: ['fleet-kernel-workbench', 'fleet-infrastructure-catalog', 'robotreplay'],
  sports: ['racetime-copilot', 'athlete-living-atlas', 'burro-race-replay'],
  community: ['circlepath-rj', 'badaga-care-circle', 'nanga-hatti'],
};
