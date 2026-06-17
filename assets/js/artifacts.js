window.ARTIFACTS = [
  {
    id: "transfer-credit-review",
    name: "Transfer Credit Review Tool",
    category: "administrative",
    type: "Administrative workflow automation",
    status: "Built and used",
    summary: "A review pipeline for departmental transfer-credit evaluation that turns an annual export into structured review materials and a registrar-ready output.",
    problem: "Transfer-credit review requires departments to compare external course records against local catalog expectations, collect faculty input, preserve decisions, and return clean records for registrar processing.",
    includes: ["Packaged review workflow skill", "Parsed and deduplicated course records", "Department review workbook", "Faculty reviewer documents", "Registrar-ready export"],
    result: "Used for the 2026 Chemistry transfer-credit review with 109 reviewed courses after 5 were held for additional review.",
    tech: ["Python scripts", "Excel workbook processing", "Word document generation", "TF-IDF cosine similarity", "Packaged Cowork/Claude skill"],
    iteration: ["Initial commit added the reusable transfer-credit review tool.", "The repository documentation emphasizes privacy boundaries for generated review files."],
    links: [{ label: "View details", href: "artifact.html?id=transfer-credit-review", kind: "internal" }]
  },
  {
    id: "chem-332-website",
    name: "CHEM 332 Website",
    category: "teaching",
    type: "Course website",
    status: "Published",
    summary: "A public course website that turns CHEM 332 course content and simulations into a web-first learning surface.",
    problem: "Course materials are easier to use when students can navigate them as a public website rather than as a loose collection of files.",
    includes: ["GitHub Pages site", "Course content pages", "Interactive simulation pages", "Source-controlled teaching material"],
    result: "Published as a public CHEM 332 demo site.",
    tech: ["Static HTML", "TypeScript", "Vite", "GitHub Pages"],
    iteration: ["Added molecular spectroscopy simulations.", "Improved mobile responsiveness across pages.", "Refined equation and axis conventions for chemistry instruction."],
    links: [
      { label: "Open website", href: "https://jolayfield.github.io/CHEM332-content/", kind: "external" },
      { label: "Source repository", href: "https://github.com/jolayfield/CHEM332-content", kind: "external" }
    ]
  },
  {
    id: "biochar-simulator",
    name: "Biochar Simulator",
    category: "research",
    type: "Research software",
    status: "Active",
    summary: "A Python package for generating model biochar surfaces for molecular dynamics simulations and visualization.",
    problem: "Building plausible biochar structures by hand is difficult, tedious, and error-prone, especially when researchers need structures that reflect production conditions or selected material properties.",
    includes: ["Python package named biochar", "Command-line generator", "GROMACS-style simulation files", "Structure statistics and property summaries", "Sphinx documentation"],
    result: "Actively maintained research software used in biochar and PFAS-related computational chemistry work.",
    tech: ["Python 3.9+", "NumPy", "SciPy", "NetworkX", "RDKit", "pytest", "Sphinx"],
    iteration: ["Added temperature and feedstock composition modeling.", "Reconciled package versioning and release metadata.", "Added a named BiocharResult and write_files=False path.", "Addressed backlog issues and exposed ring composition on results."],
    links: [
      { label: "Source repository", href: "https://github.com/jolayfield/biochar-simulator", kind: "external" },
      { label: "Documentation", href: "https://biochar-simulator.readthedocs.io/en/latest/", kind: "external" }
    ]
  },
  {
    id: "daily-dashboard",
    name: "Daily Dashboard",
    category: "personal",
    type: "Personal workflow dashboard",
    status: "Local automation",
    summary: "A local daily briefing that combines Outlook email and calendar data with Todoist, Open Brain, and Work Operating Model connectors.",
    problem: "Daily work arrives across email, calendar, tasks, and operating notes, making prioritization hard without a single morning surface.",
    includes: ["Generated dashboard page", "Python generator", "Outlook email and calendar dump scripts", "Local HTTP server", "Reply-draft worker"],
    result: "Documented to generate a self-contained daily dashboard with scheduled refresh and local reply drafting.",
    tech: ["Python", "AppleScript for Outlook", "launchd", "Local HTTP server", "Claude CLI draft worker", "Static HTML output"],
    iteration: ["Draft replies moved from short previews to full email bodies.", "A dark console-style redesign was added.", "Smarter email highlighting added LLM triage, recency, and feedback signals.", "Write-back interactivity was added for Todoist, Open Brain, and Operating Model.", "A local LLM fallback was added for triage and reply drafting."],
    links: [
      { label: "View mockup", href: "mockups/daily-dashboard.html", kind: "internal" },
      { label: "View details", href: "artifact.html?id=daily-dashboard", kind: "internal" }
    ]
  },
  {
    id: "baseball-lineup-app",
    name: "Baseball Lineup App",
    category: "personal",
    type: "Mobile coaching app",
    status: "In development",
    summary: "A youth baseball app for roster availability, fair lineup generation, scorekeeping, practice plans, subscriptions, and team sharing.",
    problem: "Volunteer coaches need to coordinate unreliable game-day rosters and create fair playing-time assignments without spreadsheet overhead.",
    includes: ["Expo mobile app", "Pure TypeScript lineup engine", "Supabase migrations", "Public lineup sharing", "RevenueCat subscription integration"],
    result: "Local documentation defines the product strategy, rotation algorithm, Supabase schema, and free/pro tiers.",
    tech: ["Turborepo", "Expo", "React Native", "TypeScript", "Supabase", "TanStack Query", "Zustand", "NativeWind", "RevenueCat"],
    iteration: ["Added a position-equity report.", "Fixed atomic lineup mutations through transactional RPCs.", "Added product strategy documentation.", "Applied a Day Game redesign with cream/green v2 primitives and accessibility work.", "Resolved EAS/Gradle dependency issues through pinned React Native and NativeWind dependencies."],
    links: [{ label: "View details", href: "artifact.html?id=baseball-lineup-app", kind: "internal" }]
  },
  {
    id: "baseball-hitting-skill-trainer",
    name: "Baseball Hitting Skill Trainer",
    category: "personal",
    type: "Coaching and progression app",
    status: "In development",
    summary: "An Expo mobile and web app for tracking hitting sessions, prescribing drills, and measuring progression across four skill levels.",
    problem: "Hitting development needs age-independent progression, motor-control assessment, equipment-aware drills, and session tracking.",
    includes: ["Curriculum source", "Drill cards", "Session timer", "Skill badge", "Typed drill model", "Persistent session state"],
    result: "The project guidance specifies three pillars, seven motor-control categories, pattern primers, and drill sequencing from movement to swing work.",
    tech: ["Expo", "Expo Router", "React Native", "TypeScript", "Zustand", "MMKV"],
    iteration: ["Initial app commit added curriculum and mobile/web app structure.", "Later commits added drill summaries and YouTube search links to the drill library."],
    links: [{ label: "View details", href: "artifact.html?id=baseball-hitting-skill-trainer", kind: "internal" }]
  },
  {
    id: "token-burn-dashboard",
    name: "Token-Burn Dashboard",
    category: "personal",
    type: "AI usage analytics dashboard",
    status: "Local analytics app",
    summary: "A dashboard showing AI token usage across Codex, Claude Code, Claude chat, and ChatGPT with exact and estimated lanes kept separate.",
    problem: "AI usage volume is difficult to understand when logs are distributed across tools and cache reads can dwarf new work.",
    includes: ["Daily burn heatmap", "Weekly trend", "Driver breakdown", "Scale equivalents", "Moving-average table", "Scrubbed public data path"],
    result: "The documented dataset spans 2026-04-03 to 2026-06-13 with exact Codex and Claude Code lanes and scrubbed deployment guidance.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Node refresh script", "Static JSON data"],
    iteration: ["Initial dashboard was built from the all-sources starter kit.", "Later commits improved the heatmap ramp and labeled weekly axes."],
    links: [
      { label: "View mockup", href: "mockups/token-burn-dashboard.html", kind: "internal" },
      { label: "View details", href: "artifact.html?id=token-burn-dashboard", kind: "internal" }
    ]
  },
  {
    id: "gromacs-mcp",
    name: "GROMACS MCP Server",
    category: "research",
    type: "Agent tool server",
    status: "Installable package workspace",
    summary: "An MCP server that exposes GROMACS molecular dynamics setup, production, and analysis steps as Claude-callable tools.",
    problem: "Molecular dynamics workflows require many manual command-line steps that can be automated through structured tools.",
    includes: ["Solvation and index tools", "Minimization, NVT, NPT, and production tools", "Energy, RDF, density, and SASA analysis", "MDP templates"],
    result: "Public repository documents installation, Claude Code MCP configuration, workflows, and development checks.",
    tech: ["Python 3.11+", "MCP", "MDAnalysis", "pyedr", "NumPy", "pytest", "ruff"],
    iteration: ["Added make_index and fixed default residue behavior.", "Added README tool reference and workflow examples.", "Added peptide/protein setup mode and pressure coupling parameters.", "Documented dry slab NPT workflow.", "Exposed pressure_bar in NPT and production templates."],
    links: [{ label: "Source repository", href: "https://github.com/jolayfield/gromacs-mcp", kind: "external" }]
  },
  {
    id: "ion-transfer-cvs",
    name: "Ion Transfer Collective Variables",
    category: "research",
    type: "Computational chemistry analysis package",
    status: "Local Python package",
    summary: "A Python package for calculating geometric and energetic collective variables for ion transfer across water and organic interfaces.",
    problem: "Ion-transfer simulations need collective variables for water protrusions, solvation energy, and interface behavior in GROMACS and PLUMED workflows.",
    includes: ["Water finger coordinate", "Water and organic solvation coordinates", "Analytical derivatives", "PBC support", "YAML configuration", "PLUMED COLVAR output"],
    result: "README documents CLI usage and tests for water-finger, solvation, and derivative validation.",
    tech: ["Python", "NumPy", "SciPy", "MDAnalysis", "PyYAML", "pytest", "PLUMED COLVAR output"],
    iteration: ["No local git history was available in the audited folder; process details are taken from the documented package structure and README."],
    links: [{ label: "View details", href: "artifact.html?id=ion-transfer-cvs", kind: "internal" }]
  },
  {
    id: "comp-chem-notebooks",
    name: "Computational Chemistry Lab Notebooks",
    category: "teaching",
    type: "Teaching notebook collection",
    status: "Public teaching resource",
    summary: "Interactive Google Colab notebooks for students learning Python, Gaussian output analysis, MDAnalysis, PLUMED, PyTorch, and machine-learned collective variables.",
    problem: "Students need computational chemistry exercises that run without local installation or licensed software.",
    includes: ["Foundation Python notebook", "Gaussian output analysis track", "MDAnalysis track", "PLUMED track", "Neural-network and mlcolvar notebooks"],
    result: "Public repository lists Colab links, dependencies, recommended order, and repository structure.",
    tech: ["Jupyter notebooks", "Google Colab", "Python", "NumPy", "matplotlib", "AaronTools", "MDAnalysis", "PLUMED", "PyTorch", "mlcolvar"],
    iteration: ["Added Claude Code skills and agent support for notebook workflow.", "Fixed MDAnalysis API bugs in Track 2 notebooks.", "Added basic and finished slide-generation skills for lecture materials."],
    links: [{ label: "Source repository", href: "https://github.com/jolayfield/chem-lab-tutorials", kind: "external" }]
  },
  {
    id: "quantumchem-mobile",
    name: "QuantumChem Mobile",
    category: "teaching",
    type: "Quantum mechanics teaching app",
    status: "Vite and Capacitor app workspace",
    summary: "A mobile and web teaching app for Phys Chem II quantum mechanics with simulation shells, persisted progress, and an editorial textbook redesign.",
    problem: "Quantum mechanics topics benefit from interactive simulations, mobile-friendly navigation, progress state, and consistent textbook-like presentation.",
    includes: ["Vite TypeScript app", "Capacitor iOS and Android targets", "Phys Chem II course-library home screen", "Simulation shells", "Persistent storage manager"],
    result: "Local files identify the app as QuantumChem and document the redesign target, storage API, app stack, and deployment scripts.",
    tech: ["Vite", "TypeScript", "Capacitor", "Three.js", "Chart.js", "KaTeX", "marked"],
    iteration: ["Applied an editorial-textbook redesign.", "Added simulation visual upgrades and sniff-check fixes.", "Fixed chart colors for dark canvases.", "Added spectral hero plate and blackbody rendering fixes.", "Added quantum design exports."],
    links: [{ label: "View details", href: "artifact.html?id=quantumchem-mobile", kind: "internal" }]
  },
  {
    id: "chem-ai-course",
    name: "Chemistry and AI Course",
    category: "teaching",
    type: "Course design artifact",
    status: "Draft syllabus",
    summary: "A Fall 2026 course design for teaching AI in chemistry from a chemist's perspective.",
    problem: "Students need a chemistry-centered path into molecular representation, model validation, machine learning, and critical reading of AI-for-chemistry papers.",
    includes: ["Draft syllabus", "Four-credit structure", "Four mini-projects", "Weekly quiz plan", "Capstone public-facing research summary"],
    result: "Syllabus draft documents course description, outcomes, materials, grading, AI policy, and assessment structure.",
    tech: ["Course syllabus", "Jupyter", "Python", "RDKit", "scikit-learn", "PyTorch", "PyTorch Geometric", "pandas", "matplotlib"],
    iteration: ["No local git history was available in the audited folder; the detail page limits iteration claims to the syllabus and schedule documents."],
    links: [{ label: "View details", href: "artifact.html?id=chem-ai-course", kind: "internal" }]
  },
  {
    id: "hpc-cluster-runbook",
    name: "HPC Cluster Build Runbook",
    category: "administrative",
    type: "Infrastructure planning artifact",
    status: "Work plan and checklist",
    summary: "An OpenHPC and Warewulf cluster build checklist for a head node, NAS conversion, compute nodes, NFS mounts, Slurm, and Gaussian preservation.",
    problem: "Rebuilding a lab HPC cluster requires a procedure that preserves software, user data, networking details, and compute-node provisioning.",
    includes: ["Hardware reference sheet", "Pre-work checklist", "NAS conversion plan", "Head node setup plan", "OpenHPC/Warewulf phases", "Compute-node validation"],
    result: "The work plan provides phased build instructions and blanks for site-specific values to be filled during execution.",
    tech: ["Rocky Linux 9", "OpenHPC 3", "Warewulf 4", "Slurm", "NFS", "Gaussian", "PXE boot"],
    iteration: ["No local git history was available in the audited folder; process details come from the runbook phase checklist."],
    links: [{ label: "View details", href: "artifact.html?id=hpc-cluster-runbook", kind: "internal" }]
  },
  {
    id: "biochar-literature-workflow",
    name: "Biochar Literature Ingestion and Blog Workflow",
    category: "research",
    type: "Research writing workflow",
    status: "Ingestion complete",
    summary: "A literature-ingestion workflow for a Biochar Blog project, with extracted papers, JSON entries, learning notes, and proposed synthesis posts.",
    problem: "Turning a Zotero backup of PFAS and biochar papers into usable blog and research notes requires extraction, cataloging, metadata, annotation status, and synthesis prompts.",
    includes: ["14 ingested PDF papers", "19 extracted text files", "19 JSON entries", "Detailed notes for priority papers", "Recommended blog post topics"],
    result: "The ingestion summary marks extraction and JSON creation complete, with next steps for annotation, Supabase upload, and blog synthesis.",
    tech: ["PDF text extraction", "JSON metadata entries", "Research-note workflow", "Supabase upload target"],
    iteration: ["No local git history was available in the audited folder; the ingestion summary records completed extraction, metadata generation, and remaining annotation steps."],
    links: [{ label: "View details", href: "artifact.html?id=biochar-literature-workflow", kind: "internal" }]
  },
  {
    id: "chem-111-lab-cleanup",
    name: "CHEM 111 Lab Procedures Cleanup",
    category: "teaching",
    type: "Course-content cleanup artifact",
    status: "Completed cleanup plan",
    summary: "A Canvas lab-procedure cleanup artifact documenting converted handouts, accessibility fixes, standardized voice, and deferred tone questions.",
    problem: "Lab handouts moved into Canvas need consistent structure, accessibility, factual cleanup, and a coherent instructional voice.",
    includes: ["Converted handout record", "Accessibility and voice cleanup", "Lab 7 and Lab 8 framing", "Deferred tone-decision log", "Maintenance tracker"],
    result: "The plan records structural framing completed on June 12, 2026 and logs later tone choices without guessing at future decisions.",
    tech: ["Canvas course pages", "Markdown planning document", "Accessibility cleanup process"],
    iteration: ["Initial commit added the CHEM 111 lab procedures plan.", "The plan itself records completed framing work and deferred tone decisions."],
    links: [{ label: "View details", href: "artifact.html?id=chem-111-lab-cleanup", kind: "internal" }]
  },
  {
    id: "gromacs-biochar-analysis",
    name: "GROMACS Biochar Surface Analysis Script",
    category: "research",
    type: "Research analysis script",
    status: "Local bash workflow",
    summary: "A bash workflow that uses native GROMACS tools to analyze molecular simulations of model biochar surfaces.",
    problem: "Biochar surface simulations need repeatable analysis of density profiles, solvent-accessible surface area, and diffusion behavior.",
    includes: ["Density profiles along X, Y, and Z", "SASA outputs", "Total and directional MSD", "Analysis summary", "GROMACS logs"],
    result: "The README documents expected inputs, command examples, output folders, interpretation notes, and a recommended workflow.",
    tech: ["Bash", "GROMACS", "gmx density", "gmx sasa", "gmx msd", "XVG outputs"],
    iteration: ["No local git history was available in the audited folder; the detail page uses the documented workflow and output structure."],
    links: [{ label: "View details", href: "artifact.html?id=gromacs-biochar-analysis", kind: "internal" }]
  },
  {
    id: "ai-coscientist-workspace",
    name: "AI-CoScientist Workspace",
    category: "research",
    type: "Multi-agent research framework workspace",
    status: "Local framework workspace",
    summary: "A local workspace for an AI co-scientist framework with specialized agents for hypothesis generation, review, ranking, evolution, tournament comparison, and meta-analysis.",
    problem: "Agentic scientific workflows need explicit orchestration, review, hypothesis diversity control, and state persistence instead of one unstructured chat transcript.",
    includes: ["Generation and reflection agents", "Ranking and tournament agents", "Evolution and proximity agents", "Meta-review and supervisor agents", "GROMACS setup docs"],
    result: "README documents installation, quick-start code, workflow phases, agent roles, and related GROMACS setup docs.",
    tech: ["Python", "Multi-agent orchestration", "State persistence", "Elo-style tournament ranking", "GROMACS protocol documentation"],
    iteration: ["Initialized the research framework with GROMACS protocols, biochar modeling scripts, and hypothesis-testing documentation.", "Earlier upstream commits focused on README and import cleanup."],
    links: [{ label: "View details", href: "artifact.html?id=ai-coscientist-workspace", kind: "internal" }]
  }
];

window.CATEGORIES = {
  teaching: {
    label: "Teaching",
    href: "teaching.html",
    summary: "Course sites, learning apps, notebooks, and instructional cleanup artifacts."
  },
  research: {
    label: "Research",
    href: "research.html",
    summary: "Computational chemistry software, analysis scripts, literature workflows, and research-agent workspaces."
  },
  administrative: {
    label: "Administrative",
    href: "administrative.html",
    summary: "Departmental workflows and research-computing operations artifacts."
  },
  personal: {
    label: "Personal",
    href: "personal.html",
    summary: "Private productivity and AI-usage tools represented with safe mockups where needed."
  }
};
