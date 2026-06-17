function getArtifactById(id) {
  return window.ARTIFACTS.find((artifact) => artifact.id === id);
}

function renderTopbar(activeCategory) {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  const links = [
    ["index.html#artifacts", "All"],
    ...Object.entries(window.CATEGORIES).map(([, category]) => [category.href, category.label]),
    ["index.html#contact", "Contact"]
  ];

  nav.innerHTML = links
    .map(([href, label]) => {
      const active = activeCategory && label.toLowerCase() === activeCategory;
      return `<a ${active ? 'aria-current="page"' : ""} href="${href}">${label}</a>`;
    })
    .join("");
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function actionLinks(artifact, options = {}) {
  const links = options.omitDetailLinks
    ? artifact.links.filter((link) => !link.href.startsWith("artifact.html"))
    : artifact.links;
  return links
    .map((link) => {
      const target = link.kind === "external" ? ' target="_blank" rel="noreferrer"' : "";
      return `<a class="text-link" href="${link.href}"${target}>${link.label}</a>`;
    })
    .join("");
}

function artifactCard(artifact) {
  const category = window.CATEGORIES[artifact.category];
  return `
    <article class="project-card artifact-card">
      <div class="project-meta">
        <span class="pill">${category.label}</span>
        <span class="pill">${artifact.type}</span>
        <span class="pill">${artifact.status}</span>
      </div>
      <div>
        <h3>${artifact.name}</h3>
        <p>${artifact.summary}</p>
      </div>
      <section class="card-section">
        <h4>Problem</h4>
        <p>${artifact.problem}</p>
      </section>
      <section class="card-section">
        <h4>Artifact Includes</h4>
        <ul class="process-list compact-list">${listItems(artifact.includes)}</ul>
      </section>
      <section class="card-section result-section">
        <h4>Result</h4>
        <p>${artifact.result}</p>
      </section>
      <div class="project-actions">${actionLinks(artifact)}</div>
    </article>
  `;
}

function renderCards(selector, artifacts) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = artifacts.map(artifactCard).join("");
}

function renderCategoryTiles() {
  const container = document.querySelector("[data-category-tiles]");
  if (!container) return;
  container.innerHTML = Object.entries(window.CATEGORIES)
    .map(([id, category]) => {
      const count = window.ARTIFACTS.filter((artifact) => artifact.category === id).length;
      return `
        <a class="category-tile" href="${category.href}">
          <span>${category.label}</span>
          <strong>${count}</strong>
          <p>${category.summary}</p>
        </a>
      `;
    })
    .join("");
}

function renderMetrics() {
  const container = document.querySelector("[data-metrics]");
  if (!container) return;
  const publicCount = window.ARTIFACTS.filter((artifact) => artifact.links.some((link) => link.kind === "external")).length;
  const detailCount = window.ARTIFACTS.filter((artifact) => artifact.links.some((link) => link.href.startsWith("artifact.html"))).length;
  const mockupCount = window.ARTIFACTS.filter((artifact) => artifact.links.some((link) => link.href.startsWith("mockups/"))).length;
  container.innerHTML = [
    [String(window.ARTIFACTS.length), "Cataloged artifacts"],
    [String(publicCount), "Public artifacts/repos"],
    [String(detailCount), "Internal detail pages"],
    [String(mockupCount), "Safe mockups"]
  ]
    .map(([value, label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
}

function renderHome() {
  renderTopbar();
  renderMetrics();
  renderCategoryTiles();
  renderCards("[data-artifact-grid]", window.ARTIFACTS);
}

function renderCategoryPage(categoryId) {
  const category = window.CATEGORIES[categoryId];
  renderTopbar(categoryId);
  if (!category) return;
  document.title = `${category.label} Artifacts | Joshua Layfield`;
  const title = document.querySelector("[data-category-title]");
  const summary = document.querySelector("[data-category-summary]");
  if (title) title.textContent = `${category.label} Artifacts`;
  if (summary) summary.textContent = category.summary;
  renderCards("[data-artifact-grid]", window.ARTIFACTS.filter((artifact) => artifact.category === categoryId));
}

function renderDetailPage() {
  renderTopbar();
  const params = new URLSearchParams(window.location.search);
  const artifact = getArtifactById(params.get("id"));
  const container = document.querySelector("[data-artifact-detail]");
  if (!container) return;
  if (!artifact) {
    document.title = "Artifact Not Found | Joshua Layfield";
    container.innerHTML = `
      <section class="section">
        <div class="section-inner">
          <h1>Artifact not found.</h1>
          <p><a class="text-link" href="index.html">Return to the catalog</a></p>
        </div>
      </section>
    `;
    return;
  }

  const category = window.CATEGORIES[artifact.category];
  document.title = `${artifact.name} | Joshua Layfield`;
  container.innerHTML = `
    <section class="detail-hero">
      <div class="section-inner">
        <p class="eyebrow">${category.label} Artifact</p>
        <h1>${artifact.name}</h1>
        <p class="hero-copy">${artifact.summary}</p>
        <div class="hero-actions">${actionLinks(artifact, { omitDetailLinks: true })}</div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner detail-grid">
        <article class="detail-panel">
          <h2>What It Solves</h2>
          <p>${artifact.problem}</p>
        </article>
        <article class="detail-panel">
          <h2>Tech Stack</h2>
          <ul class="process-list">${listItems(artifact.tech)}</ul>
        </article>
        <article class="detail-panel">
          <h2>Iteration Process</h2>
          <ul class="process-list">${listItems(artifact.iteration)}</ul>
        </article>
        <article class="detail-panel">
          <h2>Artifact Surface</h2>
          <ul class="process-list">${listItems(artifact.includes)}</ul>
        </article>
      </div>
    </section>
  `;
}
