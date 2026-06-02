import { GRIDCORE_SPECS } from './specs.js';
import { analyzePrompt } from './playground.js';

// ── DOM ELEMENTS ──────────────────────────────────────────────────────────
const navButtons = document.querySelectorAll('.nav-btn');
const docViewer = document.getElementById('docViewer');
const playgroundViewer = document.getElementById('playgroundViewer');
const promptInput = document.getElementById('promptInput');
const clearPromptBtn = document.getElementById('clearPromptBtn');
const scoreValue = document.getElementById('scoreValue');
const scoreIndicator = document.getElementById('scoreIndicator');
const validationResultLabel = document.getElementById('validationResultLabel');
const detectedModeLabel = document.getElementById('detectedModeLabel');
const issuesList = document.getElementById('issuesList');
const telemetryChecks = document.getElementById('telemetryChecks');
const vectorBackdrop = document.getElementById('vectorBackdrop');

// ── MARKDOWN RENDERER ─────────────────────────────────────────────────────
function renderMarkdown(mdText) {
  if (!mdText) return '';
  const lines = mdText.split('\n');
  let html = '';
  let inList = false;
  let inPre = false;
  let preContent = [];

  for (let line of lines) {
    const trimmed = line.trim();

    // Code Blocks
    if (trimmed.startsWith('```')) {
      if (inPre) {
        html += `<pre><code>${preContent.join('\n')}</code></pre>`;
        inPre = false;
        preContent = [];
      } else {
        inPre = true;
      }
      continue;
    }

    if (inPre) {
      preContent.push(line.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      continue;
    }

    // Dividers
    if (trimmed === '---') {
      html += '<hr>';
      continue;
    }

    // Headers
    if (trimmed.startsWith('# ')) {
      html += `<h1>${trimmed.slice(2)}</h1>`;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      html += `<h2>${trimmed.slice(3)}</h2>`;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      html += `<h3>${trimmed.slice(4)}</h3>`;
      continue;
    }

    // Bullet Lists
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      // Inline formatting check inside list item
      html += `<li>${formatInline(trimmed.slice(2))}</li>`;
      continue;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
    }

    // Table Parser
    if (trimmed.startsWith('|') && lines[lines.indexOf(line) + 1]?.trim().startsWith('|--')) {
      // Begin Table
      html += '<div class="table-wrap"><table>';
      const headers = trimmed.split('|').map(s => s.trim()).filter(Boolean);
      html += '<thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
      // skip separators
      continue;
    }
    if (trimmed.startsWith('|') && !trimmed.startsWith('|--')) {
      const cols = trimmed.split('|').map(s => s.trim()).filter(Boolean);
      html += '<tr>' + cols.map(c => `<td>${formatInline(c)}</td>`).join('') + '</tr>';
      if (!lines[lines.indexOf(line) + 1]?.trim().startsWith('|')) {
        html += '</tbody></table></div>';
      }
      continue;
    }

    // Regular paragraphs
    if (trimmed) {
      html += `<p>${formatInline(line)}</p>`;
    }
  }

  if (inList) html += '</ul>';
  return html;
}

function formatInline(text) {
  return text
    // Strong (bold)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italics
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')
    // Inline Code
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

// ── NAVIGATION ROUTER ─────────────────────────────────────────────────────
function switchTab(specKey) {
  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.spec === specKey);
  });

  if (specKey === 'playground') {
    docViewer.classList.add('hidden');
    playgroundViewer.classList.remove('hidden');
    runValidation();
  } else {
    playgroundViewer.classList.add('hidden');
    docViewer.classList.remove('hidden');
    docViewer.innerHTML = renderMarkdown(GRIDCORE_SPECS[specKey] || '');
  }
}

// ── PLAYGROUND & DIAGNOSTICS ──────────────────────────────────────────────
function runValidation() {
  const result = analyzePrompt(promptInput.value);
  
  // Score Update
  scoreValue.textContent = result.score;
  const strokeDash = `${result.score}, 100`;
  scoreIndicator.setAttribute('stroke-dasharray', strokeDash);

  if (result.score >= 90) {
    validationResultLabel.textContent = "COMPLIANT";
    validationResultLabel.style.color = "var(--green)";
    validationResultLabel.style.textShadow = "0 0 8px var(--green-glow)";
  } else if (result.score >= 60) {
    validationResultLabel.textContent = "WARNING";
    validationResultLabel.style.color = "var(--amber)";
    validationResultLabel.style.textShadow = "0 0 8px var(--amber-glow)";
  } else {
    validationResultLabel.textContent = "NON-COMPLIANT";
    validationResultLabel.style.color = "var(--red)";
    validationResultLabel.style.textShadow = "0 0 8px var(--red-glow)";
  }

  detectedModeLabel.textContent = `MODE: ${result.mode.toUpperCase()}`;

  // Print Issues
  issuesList.innerHTML = '';
  if (result.issues.length === 0) {
    issuesList.innerHTML = `<li class="no-issues">No violations detected. Ready for prompt execution.</li>`;
  } else {
    result.issues.forEach(issue => {
      const li = document.createElement('li');
      li.className = 'violation';
      li.textContent = issue;
      issuesList.appendChild(li);
    });
  }

  // Print Telemetry Rows
  telemetryChecks.innerHTML = '';
  result.checks.forEach(c => {
    const row = document.createElement('div');
    row.className = `telemetry-row ${c.pass ? 'pass' : 'fail'}`;
    row.innerHTML = `
      <span class="telemetry-name">${c.name}</span>
      <span class="telemetry-status">${c.pass ? '✓ PASS' : '✗ FAIL'}</span>
    `;
    telemetryChecks.appendChild(row);
  });
}

// Quick templates preloader
const TEMPLATES = {
  standard: `GRIDCORE // STRUCTURAL VECTOR PROJECTION

SUBJECT: Terrain surface — Triangulated Irregular Network, arid mesa

CONTEXT TYPE: terrain

CORE GEOMETRY:
- Render as pure hollow wireframe TIN — triangle edges only, absolute void between
- Ridgelines as primary structure weight
- Standard triangle edges as secondary structure weight

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

COLOR + RENDERING:
- Monochrome amber (#FFB300) only
- Subtle phosphor bloom at intersections and vertices only

LINE HIERARCHY:
- Primary structure: dominant weight
- Secondary structure: reduced weight

FAIL CONDITIONS:
- No perspective distortion
- No gradients
- No face fill of any kind`,
  
  lowpoly: `GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION

SUBJECT: Petroleum refinery — pressure vessels and connecting manifold

CONTEXT TYPE: industrial

MODE: FILLED — flat amber facets on void

FACET GEOMETRY:
- Flat-shaded amber TIN / low-polygon mesh, all faces flat amber (#FFB300)
- Cylinders resolved as faceted 10-sided prisms
- Hairline black gaps between facets throughout

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

COLOR + RENDERING:
- Monochrome amber (#FFB300) only
- Flat facet fills, zero gradient, no shading
- Phosphor bloom at primary vertices only

PROJECTION:
- Orthographic isometric only

FAIL CONDITIONS:
- No gradients or shading
- No non-amber colors`,

  spectral: `SPECTRAL GRIDCORE // VECTOR PROJECTION

SUBJECT: Watershed catchment basin with hierarchical stream flows

CONTEXT TYPE: terrain

CHANNEL DECLARATION:
- Amber (#FFB300) — TIN terrain skeleton
- Cyan (#00FFFF) — Third and fourth order streams // catchment flow
- P1 Green (#33FF57) — First and second order streams // tributaries

CORE GEOMETRY:
- Hollow wireframe skeleton — edges only
- Drainage valleys and ridges as primary structure

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

LINE HIERARCHY:
- Primary structure: dominant weight
- Data channel overlays: thin vector lines

FAIL CONDITIONS:
- No perspective distortion
- No bloom on data channels
- Maximum 4 active channels`
};

// ── SVG TIN WIREFRAME BACKGROUND ──────────────────────────────────────────
let points = [];
let triangles = [];
const GRID_SIZE = 12;
const MAX_GRAVITY_DIST = 160;

function initBackdrop() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  vectorBackdrop.setAttribute('viewBox', `0 0 ${width} ${height}`);

  points = [];
  triangles = [];

  const cols = Math.ceil(width / 100) + 2;
  const rows = Math.ceil(height / 100) + 2;

  // Generate slightly jittered grid nodes
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      points.push({
        baseX: (c - 1) * 100 + (Math.random() - 0.5) * 40,
        baseY: (r - 1) * 100 + (Math.random() - 0.5) * 40,
        x: 0,
        y: 0
      });
    }
  }

  // Triangulate (simple Delaunay-like structured mesh)
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols - 1; c++) {
      const p0 = r * cols + c;
      const p1 = r * cols + (c + 1);
      const p2 = (r + 1) * cols + c;
      const p3 = (r + 1) * cols + (c + 1);

      if (Math.random() > 0.5) {
        triangles.push([p0, p1, p2]);
        triangles.push([p1, p3, p2]);
      } else {
        triangles.push([p0, p1, p3]);
        triangles.push([p0, p3, p2]);
      }
    }
  }

  updateMeshPoints(0, 0);
  renderMesh();
}

function updateMeshPoints(mouseX, mouseY) {
  points.forEach(p => {
    const dx = mouseX - p.baseX;
    const dy = mouseY - p.baseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < MAX_GRAVITY_DIST) {
      const force = (MAX_GRAVITY_DIST - dist) / MAX_GRAVITY_DIST;
      // Pull slightly toward mouse cursor
      p.x = p.baseX + dx * force * 0.35;
      p.y = p.baseY + dy * force * 0.35;
    } else {
      p.x = p.baseX;
      p.y = p.baseY;
    }
  });
}

function renderMesh() {
  vectorBackdrop.innerHTML = '';
  
  // Render mesh paths
  const pathData = [];
  triangles.forEach(tri => {
    const p0 = points[tri[0]];
    const p1 = points[tri[1]];
    const p2 = points[tri[2]];

    pathData.push(`M ${p0.x} ${p0.y} L ${p1.x} ${p1.y} L ${p2.x} ${p2.y} Z`);
  });

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathData.join(' '));
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'var(--amber)');
  path.setAttribute('stroke-width', '0.5');
  path.setAttribute('opacity', '0.3');
  vectorBackdrop.appendChild(path);

  // Render glowing vertex nodes near active cursor
  points.forEach(p => {
    if (Math.abs(p.x - p.baseX) > 2) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', p.x);
      circle.setAttribute('cy', p.y);
      circle.setAttribute('r', '2');
      circle.setAttribute('fill', 'var(--amber)');
      circle.setAttribute('filter', 'drop-shadow(0 0 3px var(--amber))');
      vectorBackdrop.appendChild(circle);
    }
  });
}

// ── EVENT LISTENERS ───────────────────────────────────────────────────────
function initEvents() {
  // Navigation
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.spec);
    });
  });

  // Playground Inputs
  promptInput.addEventListener('input', runValidation);
  clearPromptBtn.addEventListener('click', () => {
    promptInput.value = '';
    runValidation();
  });

  // Template Quick Chips
  document.querySelectorAll('.template-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      promptInput.value = TEMPLATES[chip.dataset.template] || '';
      runValidation();
    });
  });

  // Mouse Move Gravity Mesh
  window.addEventListener('mousemove', (e) => {
    updateMeshPoints(e.clientX, e.clientY);
    renderMesh();
  });

  // Resize Window Mesh
  window.addEventListener('resize', initBackdrop);
}

// ── APP INITIALIZATION ────────────────────────────────────────────────────
function init() {
  initBackdrop();
  initEvents();
  switchTab('standard'); // Default load
}

window.addEventListener('DOMContentLoaded', init);
