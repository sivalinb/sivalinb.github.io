export const details = [
{
  "slug": "fleet-reliability-lab",
  "overview": "A hardware symptom is only the beginning of an operational decision. This lab connects asset identity, telemetry trust, workload progress, a versioned repair procedure, physical intervention, requalification and capacity exposure. Original illustrated scenes animate the story; recorded engine snapshots keep each phase inspectable. A local native stack exercises the actual telemetry and durable workflow boundaries.",
  "capabilities": [
    {
      "title": "Operate the full lifecycle",
      "text": "Qualify fictional GPU capacity, allocate a synthetic workload, inject a fault, isolate it, follow a bounded repair and rerun the baseline before returning capacity."
    },
    {
      "title": "Review safe automation",
      "text": "Inspect token-derived tenancy, compare-and-swap transitions, one-ticket semantics, a durable effect ledger, worker restart recovery and separate technician completion from verified health."
    },
    {
      "title": "Follow the telemetry across real services",
      "text": "Run Prometheus remote write into Mimir, structured OTLP events into Loki, event-derived spans into Tempo, Alertmanager notifications and a provisioned Grafana dashboard."
    },
    {
      "title": "Reason about useful capacity",
      "text": "Distinguish device utilization from workload progress, unknown health from healthy capacity, and illustrative exposure from cash savings. Physical GPU burn-in remains explicitly unmeasured."
    }
  ],
  "notes": [
    {
      "title": "Animated operating story",
      "url": "https://sivalinb.github.io/labs/fleet-reliability/"
    },
    {
      "title": "Architecture, invariants and proposed production scale design",
      "url": "https://github.com/sivalinb/fleet-reliability-lab/blob/main/docs/architecture.md"
    },
    {
      "title": "Live backend verification and execution provenance",
      "url": "https://github.com/sivalinb/fleet-reliability-lab/tree/main/evidence"
    },
    {
      "title": "Public research map and source inventory",
      "url": "https://github.com/sivalinb/fleet-reliability-lab/blob/main/docs/research-map.md"
    },
    {
      "title": "Principal system design and code review exercises",
      "url": "https://github.com/sivalinb/fleet-reliability-lab/blob/main/docs/principal-interview.md"
    }
  ],
  "evidence": [
{
    "title": "A real telemetry stack behind the story",
    "image": "fleet-reliability-lab-grafana.jpg",
    "width": 1280,
    "height": 720,
    "alt": "Actual Grafana dashboard showing fleet lifecycle, telemetry freshness, fabric error rates and synthetic GPU temperature from Mimir",
    "caption": "Actual local Grafana capture. Prometheus remote writes to Mimir; the synthetic hardware source stays explicit. The recorded native verification also retrieves incident events from Loki and Tempo and restarts a real Temporal worker with one repair ticket.",
    "url": "https://github.com/sivalinb/fleet-reliability-lab/blob/main/evidence/stack-verification.json",
    "linkLabel": "Inspect the recorded native verification"
},
    {
      "title": "An illustrated operation with inspectable state",
      "image": "fleet-reliability-lab.jpg",
      "width": 1280,
      "height": 720,
      "alt": "Actual browser capture of the Fleet Reliability Observatory with original robot and GPU rack concept artwork",
      "caption": "Actual local website capture. The original artwork is conceptual; the six operating stories replay synthetic-hardware executions of the transactional state engine.",
      "url": "https://sivalinb.github.io/labs/fleet-reliability/",
      "linkLabel": "Explore the animated operation"
    }
  ]
},
  {
  "slug": "ai-incident-investigator",
  "overview": "A dashboard panel stops showing data after a metric-label migration. This project follows the investigation from actual Grafana queries and a failing screenshot through a real local model call, a tested repair proposal, exact review and verified recovery. OpenInference and Phoenix expose the execution; Gradio makes the evidence and decision inspectable.",
  "capabilities": [
    {
      "title": "Run a complete failure and repair workflow",
      "text": "Start the local Gradio, Grafana, Prometheus and Phoenix stack. Simulate the label migration, inspect the original panel, review the exact query change and verify the recovered measurement."
    },
    {
      "title": "Inspect the investigator itself",
      "text": "Follow actual tool, model and evaluation spans. Record provider-reported tokens and measured durations, then link the later review trace back to the investigation."
    },
    {
      "title": "Evaluate actual local inference",
      "text": "Compare six authored evidence cases against actual Ollama outputs. The recorded Qwen3 run passes three of six cases; the evidence rules pass six. The published result preserves the failures and the model’s advisory boundary."
    },
    {
      "title": "Keep the operational evidence",
      "text": "Retain before/after panel images, proposal and dashboard hashes, review decisions, current query evaluations and an RCA. The public walkthrough replays saved evidence without running a hosted model."
    }
  ],
  "notes": [
    {
      "title": "Full workflow and screenshot tour",
      "url": "https://github.com/sivalinb/ai-incident-investigator/blob/main/docs/WORKFLOW.md"
    },
    {
      "title": "Architecture and approval decisions",
      "url": "https://github.com/sivalinb/ai-incident-investigator/blob/main/docs/ARCHITECTURE.md"
    },
    {
      "title": "OpenInference spans and Prometheus metrics",
      "url": "https://github.com/sivalinb/ai-incident-investigator/blob/main/docs/TELEMETRY.md"
    },
    {
      "title": "Evaluation method and measured failures",
      "url": "https://github.com/sivalinb/ai-incident-investigator/blob/main/docs/EVALUATIONS.md"
    }
  ],
  "evidence": [
    {
      "title": "An exact repair and a recovered panel",
      "image": "ai-incident-investigator.jpg",
      "width": 1280,
      "height": 720,
      "alt": "Actual Gradio workspace showing the original empty Grafana panel, a local model explanation, exact query diff and recovered data",
      "caption": "Actual Gradio and Grafana captures from the synthetic checkout workflow. The model advises; the repair engine independently validates the proposal and verifies recovery.",
      "url": "https://github.com/sivalinb/ai-incident-investigator/blob/main/docs/WORKFLOW.md",
      "linkLabel": "Follow the complete workflow"
    },
    {
      "title": "Measured behavior of the investigator",
      "image": "ai-incident-investigator-grafana.jpg",
      "width": 1280,
      "height": 1703,
      "alt": "Actual Grafana investigator reliability dashboard showing monitoring contracts, operation latency and actual model usage",
      "caption": "Real Prometheus measurements connect tool and model timing to workflow state. Fixtures never create model-token usage, and local hardware cost remains unmeasured.",
      "url": "https://github.com/sivalinb/ai-incident-investigator/blob/main/docs/TELEMETRY.md",
      "linkLabel": "Inspect the telemetry contract"
    },
    {
      "title": "A live model benchmark with failures retained",
      "image": "ai-incident-investigator-evaluation.jpg",
      "width": 1280,
      "height": 720,
      "alt": "Actual Gradio evaluation table showing local Qwen3 results on six authored evidence cases",
      "caption": "The recorded local model passes three of six cases. Expected answers are withheld; the published outputs preserve incorrect classifications and explain the benchmark’s limits.",
      "url": "https://github.com/sivalinb/ai-incident-investigator/blob/main/docs/EVALUATIONS.md",
      "linkLabel": "Read the evaluation method"
    }
  ]
},
  {
    slug: "circlepath-rj",
    overview: "A restorative process needs a prepared team and dependable follow-through. CirclePath brings the coordination around that process into an authenticated Python application: approved case briefings, volunteer role requests, preparation, conferences, repair support and reintegration. A bounded AI coordinator proposes questions, language and next steps; practitioners retain the decisions.",
    capabilities: [
      { title: "Form a prepared team", text: "Volunteers request facilitator, co-facilitator, community-member or support-liaison roles. Training, confidentiality, manager approval and case-review attestations gate participation. Office-only reports and private debriefs stay outside AI context." },
      { title: "Turn context into a reviewed draft", text: "The coordinator retrieves permitted context, calls Gemini for structured output, validates source IDs and task owners, and holds the result for human review. An approved coordination draft can create tasks; participant-agreed repair commitments follow a separate workflow." },
      { title: "Support the whole process", text: "Intersect team availability, schedule meetings, export personal calendars, collect debriefs and record repair evidence. Idempotent reminders surface check-ins and barriers. Consent withdrawal pauses a case; approved summaries and de-identified lessons preserve the learning." },
      { title: "Observe behavior without recording narratives", text: "OpenTelemetry spans follow retrieval, generation, validation and review. Arize receives operational metadata; Prometheus and Grafana expose draft counts, review decisions, tokens and workflow state, with Tempo for traces. The working demo exercised live Gemini and Arize export; 15 integration tests and CI verify workflow and privacy rules." },
    ],
    evidence: [
      { title: "A live Gemini draft, reviewed by a person", image: "circlepath-preparation.png", width: 1032, height: 3057, alt: "Actual CirclePath Gradio screen with a fictional Cedar case, approved Gemini preparation draft, source references, suggested questions and human-review controls", caption: "This unmodified local-app capture shows the live-tested Gemini model, approved draft provenance, editable questions, source references and proposed task ownership. The case and all participant context are fictional.", url: "https://github.com/sivalinb/circlepath-rj#demonstration-walkthrough", linkLabel: "Reproduce the local walkthrough" },
      { title: "See the coordination signals in Grafana", image: "circlepath-grafana.png", width: 595, height: 898, alt: "Actual CirclePath Grafana dashboard showing one AI draft, one human approval and zero overdue tasks for the local demo process", caption: "The running local dashboard reads real Prometheus metrics from fictional workflows. These counters describe the captured process session; they are not program outcomes or a production performance benchmark. Metadata-only traces also export to Arize and Tempo.", url: "https://github.com/sivalinb/circlepath-rj#signals-and-evaluations", linkLabel: "Inspect the telemetry design" },
    ],
    notes: [
      { title: "Coordinator and architecture", url: "https://github.com/sivalinb/circlepath-rj#architecture" },
      { title: "Workflow, authorization and privacy tests", url: "https://github.com/sivalinb/circlepath-rj/tree/main/tests" },
      { title: "Passing integration checks", url: "https://github.com/sivalinb/circlepath-rj/actions/runs/38670518573" },
      { title: "Grafana, OpenTelemetry and Arize", url: "https://github.com/sivalinb/circlepath-rj#grafana-and-opentelemetry" },
      { title: "Calendar and reminder behavior", url: "https://github.com/sivalinb/circlepath-rj#calendar-and-reminders" },
    ],
  },
  {
    slug: "badaga-care-circle",
    overview: "Badaga Care Circle brings general health education, practical caregiver support and family preparedness into one small English/Tamil application. Designed as a discussion demo for one hatti in the Nilgiris, it connects source-based answers to persistent review, shared tasks and a rehearsed family backup plan. The engineering focus is on visible boundaries and verifiable behavior.",
    capabilities: [
      { title: "Make evidence visible", text: "Retrieve twelve versioned bilingual source cards with BM25 and character TF-IDF. Optional OpenAI embeddings and structured drafts sit behind explicit consent; fixed warning and medication boundaries run first." },
      { title: "Keep a human decision in the loop", text: "Withhold template or generated education drafts until a reviewer records a decision. Release checks household scope, language, source version and expiry again. The demo role controls exercise the workflow rather than verify a person's identity." },
      { title: "Share the practical work", text: "Record consented check-ins, move a care task from requested to accepted to completed, and choose two adults to rehearse a family backup. SQLite persists the fictional workflows and review queue." },
      { title: "Inspect the software evidence", text: "Review 53 passing Python tests and 46 bilingual synthetic cases. Actual UI captures show six guide requests, redacted traces, stage timings, status counts and a consent fallback. Optional provider contracts use an in-memory transport, not a live OpenAI call." },
    ],
    evidence: [
      { title: "46/46 local evaluation cases", image: "badaga-care-circle-evals.jpg", width: 531, height: 500, alt: "Actual Gradio evaluation report with 46 passing cases, no critical failures and clinical release false", caption: "The suite was run from the Gradio interface. The screenshot and complete export preserve the actual values and timestamp. Synthetic software checks leave clinical release blocked.", url: "https://github.com/sivalinb/badaga-care-circle/blob/main/evaluation_report.json", linkLabel: "Read the evaluation report" },
      { title: "Trace the route and fallback", image: "badaga-care-circle-traces.jpg", width: 531, height: 602, alt: "Actual redacted Gradio request trace showing local fallback, source IDs, rule version and stage timings", caption: "Six fictional guide interactions exercised retrieval, fixed guidance, abstention, pending review and no-consent fallback. Traces omit raw questions, BP readings and household identifiers.", url: "https://github.com/sivalinb/badaga-care-circle/blob/main/docs/evidence/live-demo.json", linkLabel: "Inspect the captured records" },
      { title: "Measure the local session", image: "badaga-care-circle-metrics.jpg", width: 531, height: 552, alt: "Actual Gradio operational metrics showing six requests, provider and status counts, p95 latency and zero external token usage", caption: "Request, provider and status counts match the recorded traces. Token usage is zero because the session used local processing. The small local latency sample is not a production benchmark.", url: "https://github.com/sivalinb/badaga-care-circle/actions/runs/38635247833", linkLabel: "View the passing GitHub checks" },
    ],
    notes: [
      { title: "Illustrated system architecture", url: "https://github.com/sivalinb/badaga-care-circle/blob/main/docs/architecture.md" },
      { title: "RAG and human-review design", url: "https://github.com/sivalinb/badaga-care-circle/blob/main/docs/ai-and-rag.md" },
      { title: "Live screenshots and reproduction steps", url: "https://github.com/sivalinb/badaga-care-circle/blob/main/docs/evidence.md" },
      { title: "Observability schema and limits", url: "https://github.com/sivalinb/badaga-care-circle/blob/main/docs/observability.md" },
      { title: "One-hatti pilot roadmap", url: "https://github.com/sivalinb/badaga-care-circle/blob/main/ROADMAP.md" },
    ],
  },
  {
    slug: "gpu-fleetops",
    overview: "GPU Fleet Reliability Intelligence asks whether an interruption pattern is shared across providers, local to an environment, or associated with a configuration. It turns three source formats into explicit interruption episodes and operating exposure, then connects statistical evidence to a controlled mitigation decision. The original inventory, SLO, incident and approved-recovery workflows remain available.",
    capabilities: [
      { title: "Agree on the measurement", text: "Separate GPU, node and job denominators. Reconcile duplicate and overlapping records, preserve shared incident IDs, and exclude maintenance and unknown telemetry from operating exposure." },
      { title: "Explain the fleet pattern", text: "Compare matched driver cohorts, prioritize lost GPU-hours, include healthy devices in Kaplan–Meier survival, and inspect a censored Weibull fit with explicit assumptions and uncertainty." },
      { title: "Evaluate a change", text: "A randomized synthetic canary/control trial quantifies the mitigation effect. A trained logistic model is compared with rules on a held-out provider, later time and disjoint devices, with false alerts and missed failures visible." },
      { title: "Make readiness reviewable", text: "A versioned lab policy distinguishes pass, fail and insufficient evidence. The opt-in local DCGM runner preserves raw output, hardware/software identity and measured duration; a missing GPU tool records unavailable." },
      { title: "Inspect the engineering evidence", text: "The local suite passed 208 tests. Ten additional replay seeds produced 40/40 expected domain outcomes in the same synthetic generator family. These results do not establish physical fleet operation, real predictive accuracy or production driver effectiveness." },
    ],
    evidence: [
      { title: "Measured fleet experiment", image: "gpu-fleet-reliability-results.png", width: 2250, height: 1500, alt: "Calculated synthetic driver cohort rates, lost GPU-hours, censored survival and randomized mitigation results", caption: "One recorded seed joins 1,000 logical GPUs to explicit exposure, candidate explanations and a concurrent mitigation trial. The figures use the exact exported calculation results; all fleet outcomes are synthetic.", url: "https://sivalinb.github.io/reliability/gpu-fleetops/", linkLabel: "Explore the interactive evidence" },
      { title: "An exposure clock you can audit", image: "gpu-fleet-exposure-clock.svg", width: 1200, height: 370, alt: "Ten-hour example distinguishing operating time, maintenance, interruption and unknown telemetry", caption: "Five operating hours and one observed interruption produce five hours of observed MTBI. Maintenance, unknown coverage and observed downtime have separate treatment.", url: "https://github.com/sivalinb/gpu-fleetops/blob/main/docs/reliability/MEASUREMENT.md", linkLabel: "Read the measurement contract" },
    ],
    notes: [
      { title: "Illustrated guide and architecture", url: "https://github.com/sivalinb/gpu-fleetops/tree/main/docs/reliability" },
      { title: "Interruption and MTBI methodology", url: "https://github.com/sivalinb/gpu-fleetops/blob/main/docs/reliability/MEASUREMENT.md" },
      { title: "Technical reliability review", url: "https://github.com/sivalinb/gpu-fleetops/blob/main/reports/reliability/TECHNICAL_REVIEW.md" },
      { title: "Executive brief", url: "https://github.com/sivalinb/gpu-fleetops/blob/main/reports/reliability/EXECUTIVE_BRIEF.md" },
      { title: "Hardware readiness and validation limits", url: "https://github.com/sivalinb/gpu-fleetops/blob/main/docs/reliability/HARDWARE.md" },
      { title: "Recorded verification", url: "https://github.com/sivalinb/gpu-fleetops/blob/main/docs/reliability/VERIFICATION.md" },
    ],
  },
  {
    slug: "ai-factory-observability-lab",
    overview: "A workload slowdown often spans several layers. This lab brings GPU, fabric, scheduling and inference signals together, then correlates evidence by node and source origin. Real Prometheus, Grafana and Alertmanager services support 14 source contracts, 68 signal definitions and ten controlled scenarios.",
    capabilities: [
      { title: "Trace a gray failure", text: "Relate fabric errors and collective timing to workload symptoms, then inspect the hypothesis, responsible owner and linked runbook." },
      { title: "Make telemetry coverage explicit", text: "Each source has naming, units, availability, origin and freshness metadata. Missing coverage produces an unknown state instead of a healthy assumption." },
      { title: "Measure useful work", text: "Explore training progress, first-token latency, successful generations, queues, cache occupancy and scheduling waits through four Grafana dashboards." },
      { title: "Inspect integration contracts", text: "Review live-input adapters, optional measured PyTorch/NIM tools, alert ownership and the repository's recorded validation. Default scenarios use simulated feeds." },
    ],
    notes: [
      { title: "Source contracts and signal atlas", url: "https://github.com/sivalinb/ai-factory-observability-lab/blob/main/docs/signals.md" },
      { title: "Native integration guide", url: "https://github.com/sivalinb/ai-factory-observability-lab/blob/main/docs/native-integrations.md" },
      { title: "Alert ownership and runbooks", url: "https://github.com/sivalinb/ai-factory-observability-lab/blob/main/docs/alerts.md" },
      { title: "Recorded validation", url: "https://github.com/sivalinb/ai-factory-observability-lab/blob/main/docs/validation.md" },
    ],
  },
  {
    slug: "grafana-data-center-explorer",
    overview: "Data Center Explorer turns infrastructure hierarchy into a navigable operational view. Six Grafana Business Text dashboards follow the same simulated dataset from a campus to an individual GPU, carrying scope in the URL and keeping the cooling incident visible at every parent level.",
    capabilities: [
      { title: "Navigate six infrastructure levels", text: "Click through data center, hall, row, rack, chassis and GPU views. Contextual links preserve the selected path and support return navigation and healthy-sibling comparison." },
      { title: "Understand the rollups", text: "Inspect weighted utilization, summed board power plus chassis overhead, and maximum GPU temperature across the same hierarchy." },
      { title: "Build dashboards as code", text: "A shared JavaScript/SVG renderer and responsive stylesheet generate six editable Grafana definitions. SQLite supplies the local synthetic telemetry." },
      { title: "Follow the recorded evidence", text: "The repository includes cardinality and metric-bound checks, six successful Grafana query/save records, browser drill-down evidence and actual screenshots." },
    ],
    notes: [
      { title: "Shared visual renderer", url: "https://github.com/sivalinb/grafana-data-center-explorer/blob/main/visuals/render.js" },
      { title: "Dashboard definitions", url: "https://github.com/sivalinb/grafana-data-center-explorer/tree/main/dashboards" },
      { title: "Model verification", url: "https://github.com/sivalinb/grafana-data-center-explorer/blob/main/evidence/model-verification.json" },
      { title: "Browser drill-down evidence", url: "https://github.com/sivalinb/grafana-data-center-explorer/blob/main/evidence/browser-drilldown.json" },
    ],
  },
  {
    slug: "telemetry-cardinality-governor",
    overview: "A cardinality alert is only the beginning of a change. This lab collects bounded evidence, proposes an exact optional-metric drop, pauses for review, and uses durable Temporal execution to deploy and measure a canary. Promotion and restoration have explicit guardrails and an operation journal.",
    capabilities: [
      { title: "Review an exact change", text: "Inspect budgets, protected metric coverage and a named approval decision. Rejection or expiry leaves configuration unchanged." },
      { title: "Measure before promoting", text: "Compare contemporaneous control and canary scrapes, series reduction, protected-signal coverage and an error guardrail. Promote only after consecutive passing observations." },
      { title: "Make effects recoverable", text: "Stable operation IDs, a before/after journal, atomic writes and configuration ownership support retry, compensation and worker-crash recovery." },
    ],
    notes: [
      { title: "Architecture and durable workflow design", url: "https://github.com/sivalinb/telemetry-cardinality-governor#temporal-design" },
      { title: "Recorded lab verification", url: "https://github.com/sivalinb/telemetry-cardinality-governor/blob/main/docs/evidence/VERIFICATION.md" },
      { title: "Workflow implementation", url: "https://github.com/sivalinb/telemetry-cardinality-governor/blob/main/src/governor/workflow.py" },
    ],
  },
  {
    slug: "nanga-hatti",
    overview: "Nanga Hatti keeps a small memory of home in the contributor's own words. It brings Nilgiris people, places and landscapes into a source-linked collection, with a real LangGraph workflow that pauses for place clarification and contributor review. It follows Hatti Quest's interest in language and family, while exploring how ordinary memories and their context can be kept with care.",
    capabilities: [
      { title: "Explore people and place", text: "Browse fictional starter memories by town, theme or text on a bundled OpenStreetMap geometry snapshot. Each card separates the account from attributed landscape and community context." },
      { title: "Review a memory before saving", text: "Run the local studio to enter a memory, keep browser-only audio/photos, clarify its town, edit the title, remove context and approve or reject the draft. Waiting reviews survive a server restart." },
      { title: "Inspect a bounded agent", text: "Compare authored and opted-in live model execution. LangGraph limits source searches, validates known fact IDs and preserves the original memory. Redacted Braintrust traces record stage outcomes and actual usage." },
      { title: "Check the measured evidence", text: "Explore 50 authored workflow fixtures, 20 retrieval queries, eight fully live evaluation cases, and preparation benchmarks. Two Grafana dashboards contain 16 panels for latency, usage, decisions and eval scores." },
    ],
    notes: [
      { title: "Architecture and contributor review", url: "https://github.com/sivalinb/nanga-hatti/blob/main/docs/ARCHITECTURE.md" },
      { title: "Evaluation evidence and methodology", url: "https://github.com/sivalinb/nanga-hatti/blob/main/docs/EVALS.md" },
      { title: "Performance benchmarks", url: "https://github.com/sivalinb/nanga-hatti/blob/main/docs/BENCHMARKS.md" },
      { title: "Recorded engineering explorer", url: "https://sivalinb.github.io/nanga-hatti/lab/" },
    ],
  },
  {
    slug: "redfish-observability-lab",
    title: "Redfish Observatory",
    category: "Observability",
    number: "05",
    accent: "teal",
    motif: "rack",
    subtitle: "From server hardware to observable signals.",
    description: "Operate a simulated server rack, practice Redfish management, and follow hardware and application signals through OpenTelemetry.",
    tags: ["Redfish", "OpenTelemetry", "Gradio"],
    repository: "https://github.com/sivalinb/redfish-observability-lab",
    demo: "",
    overview: "A fan failure, a warming CPU, and a slower checkout request become one experiment you can follow. Redfish Observatory brings a simulated server, a Redfish-shaped HTTP API, and real OpenTelemetry SDK providers into a Python and Gradio learning lab. It makes the connection between hardware management, collection delays, and application behavior visible.",
    capabilities: [
      { title: "Operate the simulated rack", text: "Inject fan, power-supply, disk, and OS failures, then watch sensor readings, hardware health, and measured checkout timings change." },
      { title: "Practice server management", text: "Work through ten management lessons covering inventory, remote power, BIOS settings, firmware tasks, virtual media, storage, and accounts." },
      { title: "Follow all three signals", text: "Compare polling with pushed reports and events. Inspect real SDK metrics, logs, and spans locally, or use the optional Collector and Grafana stack with Prometheus, Loki, and Tempo." },
      { title: "Explore 100 use cases", text: "Search the Redfish recipe library, inspect explanations and official schema links, and download Python samples. Compatible examples can use the simulator; advanced workflows require supported hardware." },
    ],
    scope: "Server hardware, sensors, faults, and management effects are simulated; OpenTelemetry exports and request timings are real. The API is a teaching subset rather than a Redfish-conformant implementation. In-app management controls target the simulator, while optional hardware examples run separately. The lab is intended for local learning and uses disposable data.",
    notes: [
      { title: "Architecture & signal flow", text: "Simulation, collection modes, SDK providers, and the optional backend.", url: "https://github.com/sivalinb/redfish-observability-lab/blob/main/docs/ARCHITECTURE.md" },
      { title: "100 Redfish use cases", text: "The complete learning catalog and its Python examples.", url: "https://github.com/sivalinb/redfish-observability-lab/blob/main/docs/USE_CASES.md" },
      { title: "Simulator API guide", text: "Management requests, tasks, event callbacks, and telemetry reports.", url: "https://github.com/sivalinb/redfish-observability-lab/blob/main/docs/API.md" },
    ],
  },
  {
    slug: "gpu-signal-atlas",
    title: "GPU Signal Atlas",
    category: "AI infrastructure",
    number: "01",
    accent: "teal",
    motif: "atlas",
    subtitle: "From GPU telemetry to cited evidence.",
    description: "A GPU observability workbench that connects NVIDIA Xid events and DCGM metrics with reviewed documentation, retrieval traces, and cited signal cards.",
    tags: ["GPU telemetry", "Hybrid retrieval", "Evaluation"],
    repository: "https://github.com/sivalinb/gpu-signal-atlas",
    demo: "",
    overview: "GPU telemetry can be difficult to interpret without the right context. GPU Signal Atlas organizes official documentation and demonstration runbooks into a retrieval system, then makes the evidence behind each result visible.",
    capabilities: [
      { title: "Follow the evidence", text: "Explore hybrid dense and sparse retrieval, rank fusion, reranking, and citations attached to signal cards." },
      { title: "Compare inference runs", text: "Inspect benchmark baselines and candidates through latency, throughput, memory, and capacity views." },
      { title: "Evaluate the boundaries", text: "Review retrieval ablations, a frozen evaluation dataset, and refusal behavior for unsupported questions." },
    ],
    scope: "The project supports interpretation and review. It does not query production infrastructure or execute recovery actions. Benchmark examples and imported evidence retain their source context.",
    notes: [
      { title: "Architecture & design", text: "Corpus, retrieval, evidence, and integration boundaries.", url: "https://github.com/sivalinb/gpu-signal-atlas/blob/main/docs/ARCHITECTURE.md" },
      { title: "Project README", text: "Implementation details, setup, and evaluation workflows.", url: "https://github.com/sivalinb/gpu-signal-atlas" },
    ],
  },
  {
    slug: "llm-serving-observatory",
    title: "LLM Serving Observatory",
    category: "AI infrastructure",
    number: "02",
    accent: "blue",
    motif: "serving",
    subtitle: "See the journey behind every token.",
    description: "An interactive serving laboratory and learning portfolio covering prefill, decode, KV caches, memory planning, and observability.",
    tags: ["LLM serving", "Memory planning", "Learning lab"],
    repository: "https://github.com/sivalinb/llm-serving-observatory",
    demo: "https://llm-serving-observatory.siva-babu.chatgpt.site",
    overview: "LLM serving combines request handling, model execution, memory, and operations. This project makes those layers visible through an animated request journey, architecture diagrams, a structured academy, and bounded experiments.",
    capabilities: [
      { title: "Trace a request", text: "Follow prefill, optional KV handoff, first output, decode, and observability in the animated tour." },
      { title: "Learn the system", text: "Explore the public Serving Academy, architecture diagrams, and browser exercises." },
      { title: "Inspect the lab", text: "Use the source laboratory to explore timings, memory budgets, token accounting, and process telemetry." },
    ],
    scope: "The public learning site is a static portfolio. Its analytical and simulated exercises are labeled; private inference and operational services remain separate. The public site does not offer AI chat.",
    notes: [
      { title: "Portfolio walkthrough", text: "A guided route through the learning lab and its evidence.", url: "https://github.com/sivalinb/llm-serving-observatory/blob/main/docs/portfolio-walkthrough.md" },
      { title: "System architecture", text: "Serving components, boundaries, and operating modes.", url: "https://github.com/sivalinb/llm-serving-observatory/blob/main/docs/architecture.md" },
    ],
  },
  {
    slug: "signalops",
    title: "SignalOps",
    category: "Observability",
    number: "03",
    accent: "amber",
    motif: "signal",
    subtitle: "Find useful opportunities in telemetry.",
    description: "An observability analysis tool for Prometheus metrics, Splunk events, and logs, with deterministic findings and verification queries.",
    tags: ["Prometheus", "Splunk", "Telemetry analysis"],
    repository: "https://github.com/sivalinb/signalops",
    demo: "",
    overview: "SignalOps turns imported telemetry into findings that can be inspected. Each finding connects a deterministic rule with measured evidence, a suggested next step, and a query for verification.",
    capabilities: [
      { title: "Bring your signals", text: "Import supported metric responses, exported logs, CSV, JSON, or collector bundles." },
      { title: "Inspect a finding", text: "Filter by category, service, or priority, then review the evidence and its limitations." },
      { title: "Take the report", text: "Export a Markdown analysis report from the browser session." },
    ],
    scope: "The initial dashboard uses labeled sample data. Findings are review candidates; the tool does not change infrastructure or estimate monetary savings. Imported data stays in browser memory.",
    notes: [
      { title: "Rules & evidence", text: "Supported inputs, rule thresholds, and interpretation limits.", url: "https://github.com/sivalinb/signalops" },
    ],
  },
  {
    slug: "fleet-kernel-workbench",
    title: "Fleet Kernel Workbench",
    category: "Systems",
    number: "04",
    accent: "violet",
    motif: "kernel",
    subtitle: "Connect kernel events to service context.",
    description: "A Python and Gradio learning workbench connecting Linux eBPF observations, service ownership, and telemetry delivery experiments.",
    tags: ["Python", "eBPF", "OpenTelemetry"],
    repository: "https://github.com/sivalinb/fleet-kernel-workbench",
    demo: "",
    overview: "A failed connection, an unknown service owner, and a missing observation are different problems. Fleet Kernel Workbench separates those questions, links observations to a catalog, and tests whether evidence survives telemetry failures.",
    capabilities: [
      { title: "Observe a workload", text: "Capture bounded connect-syscall outcomes from a workload owned by the tool on compatible Linux hosts." },
      { title: "Find the service context", text: "Explore ownership provenance and service dependencies through the catalog package." },
      { title: "Test delivery", text: "Compare buffering, persistent queue recovery, and memory queue loss in isolated Collector experiments." },
    ],
    scope: "This is a bounded learning system. Replay scenarios are synthetic and catalog metadata is fictional. Actual eBPF capture requires compatible Linux support; the tool is not a fleet monitoring agent.",
    notes: [
      { title: "Package architecture", text: "How the probe, catalog, and telemetry packages fit together.", url: "https://github.com/sivalinb/fleet-kernel-workbench/blob/main/docs/architecture.md" },
      { title: "Verification results", text: "Recorded checks and the boundaries of each test suite.", url: "https://github.com/sivalinb/fleet-kernel-workbench/blob/main/docs/verification.md" },
    ],
  },
];
