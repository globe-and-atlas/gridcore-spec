export const GRIDCORE_SPECS = {
  standard: `# GRIDCORE // STRUCTURAL VECTOR PROJECTION
### Board-Approved Visual Framework — Globe & Atlas
*Locked. Do not modify without Board review.*

---

## DESIGN PHILOSOPHY

Structural Gridcore is the visual language of Globe & Atlas. It reveals the spatial truth of physical and logical systems using the most skeletal digital visualization possible. The aesthetic derives from 1970s vector CRT instruments — Evans & Sutherland flight simulators, oscilloscopes, early geospatial workstations — and connects directly to the practitioner's native visual vocabulary: LiDAR point clouds, TIN surfaces, wireframe topology.

**The primary directive:** Strip away texture, lighting, shadow, and fill until only structural geometry remains. The analyst is above the data, reading it — not inside it.

**Board provenance:** Approved against Michelangelo (structure), Rams (interface), Feynman (logic), Shannon (signal), Tufte (data-ink), and Stewart Brand (endurance). Every constraint exists for a reason.

---

## CORE SPECIFICATION

### Medium
- **Foreground:** Amber phosphor (#FFB300)
- **Background:** Absolute black void (#000000)
- Single channel. No exceptions.

### Projection
- Orthographic or isometric only
- No vanishing points
- No perspective horizon
- No implied motion

### Line Quality
- Constant-width vector strokes throughout
- Subtle phosphor bloom at intersections and vertices only
- No anti-aliasing variation
- No thickness gradients

### Line Hierarchy

| Level | Element | Weight |
|---|---|---|
| Primary | Load-bearing structure, major edges, dominant geometry | Full |
| Secondary | Supporting structure, minor edges, internal geometry | Reduced |
| Context | Contours, grid reference, terrain surface | Thin |
| Annotation | Leader lines, callouts | Minimal |

---

## PROMPT TEMPLATE

\`\`\`
GRIDCORE // STRUCTURAL VECTOR PROJECTION

SUBJECT:
[Define the physical or logical system]

CONTEXT TYPE:
[terrain | industrial | network | isolated object]

CORE GEOMETRY:
- Render as pure hollow wireframe skeleton — edges only, void between
- [Define primary structure elements]
- [Define secondary structure elements]
- Orthographic / isometric projection only

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

COLOR + RENDERING:
- Monochrome amber (#FFB300) only
- Subtle phosphor bloom at intersections and vertices only
- Clean, constant-width vector lines throughout

LINE HIERARCHY:
- Primary structure: dominant weight
- Secondary structure: reduced weight
- Context (contours/grid): thin
- Callouts: minimal but legible

CONDITIONAL OVERLAYS:
- Contours: only if terrain context exists and carry real elevation intervals
- H3 grid: only if spatial subdivision is meaningful to subject
- Remove both if irrelevant

FLOW REPRESENTATION:
- Major flows match primary structure weight
- Minor flows match secondary structure weight
- Uniform arrowhead style throughout
- No text attached to arrows

ANNOTATION:
- Monospace labels only
- Variables + coordinates only
- Every label must connect via leader line
- No narrative text

FAIL CONDITIONS:
- No perspective distortion
- No gradients (bloom at intersections excepted)
- No decorative UI/HUD elements
- No non-amber colors
- No fake status text
- No face fill of any kind
- No human figures
- No motion blur or trajectory arcs
- No shadows or implied light source
\`\`\`

---

## CONTEXT TYPE REFERENCE

**terrain** — Subject has elevation, surface, or topographic character. TIN meshes, contour networks, watersheds, land cover boundaries. Contour and H3 overlays eligible.

**industrial** — Subject is built infrastructure read for structural integrity. Refineries, pipelines, machine assemblies, facilities. Neither contour nor H3 typically relevant.

**network** — Subject is relational. Nodes and edges matter more than physical form. Street networks, ETL pipelines, utility graphs, stream hierarchies. H3 potentially relevant.

**isolated object** — Subject stands alone without environmental context. Single component examined in void. No overlays.

---

## WORKED PROMPT EXAMPLES

### Example A — TIN Terrain: Arid Mesa
\`\`\`
GRIDCORE // STRUCTURAL VECTOR PROJECTION

SUBJECT: Terrain surface — Triangulated Irregular Network, arid mesa
landscape with drainage channels and ridge breaks

CONTEXT TYPE: terrain

CORE GEOMETRY: Pure hollow wireframe TIN — triangle edges only, absolute
void between edges. Breaklines and ridgelines as primary structure weight.
Standard triangle edges as secondary structure weight. Drainage channels
visible as geometric depressions in the network.

ENVIRONMENT: Absolute black void (#000000). No horizon, no atmosphere,
no ground plane implied beyond the TIN itself.

COLOR + RENDERING: Monochrome amber (#FFB300). Subtle phosphor bloom at
triangle vertices and edge intersections only. Clean constant-width vector
lines throughout.

PROJECTION: Orthographic isometric. No perspective distortion.
No vanishing point.

ANNOTATION: Sparse coordinate labels at mesh boundary only, monospace,
leader lines. No narrative text.

FAIL CONDITIONS: No face fill, no gradients, no perspective,
no non-amber colors, no decorative elements.
\`\`\`

### Example B — Isolated Object: Anatomical Wireframe
\`\`\`
GRIDCORE // STRUCTURAL VECTOR PROJECTION

SUBJECT: Domestic cat — skeletal and muscular attachment geometry,
joint topology, full body

CONTEXT TYPE: isolated object

CORE GEOMETRY: Pure hollow wireframe skeleton. Bone geometry as primary
structure. Muscle attachment edges and joint connectors as secondary
structure. Internal organ cavity implied by structural enclosure only —
no fill, no surface.

ENVIRONMENT: Absolute black void (#000000). No ground plane,
no atmosphere, no shadow.

COLOR + RENDERING: Monochrome amber (#FFB300). Phosphor bloom at joint
nodes and structural intersections only. Constant-width vector lines.

PROJECTION: Orthographic isometric. No perspective distortion.

ANNOTATION: Monospace joint labels at primary nodes. Leader lines only.
No narrative text.

FAIL CONDITIONS: No face fill, no gradients, no perspective,
no texture, no non-amber colors, no decorative elements.
\`\`\`

### Example C — Network: Urban Street Topology
\`\`\`
GRIDCORE // STRUCTURAL VECTOR PROJECTION

SUBJECT: Urban street centerline network, intersection topology,
block boundary geometry

CONTEXT TYPE: network

CORE GEOMETRY: Hollow wireframe network. Street centerlines as primary
structure. Block boundary edges as secondary structure. Intersection
nodes as amber geometric points. Block interiors void.

ENVIRONMENT: Absolute black void (#000000). No horizon, no atmosphere.

COLOR + RENDERING: Monochrome amber (#FFB300). Bloom at intersection
nodes only. Clean constant-width vector lines.

PROJECTION: Orthographic top-down.

ANNOTATION: Monospace coordinate labels at network boundary.
Intersection IDs at major nodes. Leader lines only.

FAIL CONDITIONS: No perspective, no gradients, no face fill,
no non-amber colors, no decorative elements.
\`\`\`

---

## WHAT IS NEVER SHOWN

- Human figures
- Motion blur or trajectory arcs
- Perspective convergence or horizon lines
- Gradients of any kind (bloom excepted)
- Face fills or surface textures
- Shadows or implied light sources
- HUD elements, status strings, or metadata readouts
- Non-amber colors
- Decorative or narrative elements of any kind
- Synthwave aesthetic elements

---

*Globe & Atlas // Daniel Bally // globeandatlas.com*
*Framework locked April 2026*`,

  lowpoly: `# GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION
### Board-Approved Facet Mode — Globe & Atlas
*Locked. Do not modify without Board review.*

---

## DESIGN PHILOSOPHY

LOWPOLY Gridcore operates in two rendering modes — FILLED and VOID — that share one geometry system but produce opposite readings of it.

In **FILLED mode**, the polygon face becomes the primary carrier of form. Flat amber facets on absolute black. The analyst reads structure from the aggregation of filled surfaces — the same visual logic as a TIN terrain rendered in a GIS viewport, where facet density signals slope complexity and planarity. Edges are secondary: amber lines drawn over fills at structural joints.

In **VOID mode**, the face is empty. The low-polygon mesh is rendered as edges only — amber lines on black — but the mesh itself is deliberately coarse. Where Standard Gridcore draws every structurally meaningful edge at maximum fidelity, LOWPOLY VOID commits to a sparse, angular triangulation. The large empty polygon faces read as negative space, and the low-poly topology is legible through them. It is not a simplification of Standard — it is a different geometric claim: the subject resolved into its fewest honest planes.

The aesthetic derives from two GIS realities: flat-shaded TIN surfaces (FILLED) and low-resolution DEM wireframes where the polygon count is the analytic statement (VOID). Both modes share the same triangulation logic — facet density encodes complexity in both cases.

**Board provenance:** Michelangelo (form read from surface geometry, not line — FILLED), Tufte (data-ink ratio applied to polygon count — VOID), Rams (no element without function — mode chosen to serve the subject, not aesthetic preference). Approved as a two-mode system: FILLED and VOID are not interchangeable — choose the one that makes the right structural claim.

---

## CORE SPECIFICATION

### Mode Selection

| Mode | Face | Edges |
|---|---|---|
| **FILLED** | Flat amber (#FFB300), 100% opacity | Amber lines at secondary weight over fills; hairline black gaps between facets |
| **VOID** | Absolute black void — no fill | Amber lines only; same low-poly triangulation, no face fill permitted |

Declare mode explicitly in every prompt. Do not combine — a single image is either FILLED or VOID throughout.

### Medium (Both Modes)
- **Foreground:** Amber (#FFB300)
- **Background:** Absolute black void (#000000)
- Single channel. No exceptions.

### Projection (Both Modes)
- Orthographic or isometric only
- No vanishing points
- No perspective horizon
- No implied motion

### Face Rendering — FILLED Mode
- Every facet: flat amber (#FFB300), 100% opacity
- Zero gradient, zero shading within any face
- No ambient occlusion
- No implied light source
- No variation in amber value between faces
- Phosphor bloom at vertex nodes only (not on face interiors)
- Hairline black gaps between adjacent facets throughout

### Face Rendering — VOID Mode
- Every facet interior: absolute black void — no fill of any kind
- Edges drawn as amber lines at declared weight
- Phosphor bloom at vertex nodes and edge intersections
- No face fill permitted — void is not at reduced opacity; it is empty

### Edge Treatment (Both Modes)

| Level | Role | Rendering |
|---|---|---|
| Primary structural | Load-bearing edges, dominant geometry boundaries | Full-weight amber line |
| Secondary structural | Supporting edges, internal facet boundaries | Reduced-weight amber line |
| Context | Grid reference, terrain datum | Thin amber line only |
| Annotation | Leader lines, callouts | Minimal amber, monospace labels |

*In FILLED mode, edges are drawn over fills. In VOID mode, edges are the entire image.*

### Form Reading (Both Modes)
Form is expressed through geometry — facet size, shape, density, and distribution — not through shading or color variation. Dense triangulation signals complexity; sparse facets signal planarity. This is true in both modes: the mesh carries the meaning, not the fill choice.

---

## PROMPT TEMPLATE

\`\`\`
GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION

SUBJECT:
[Define the physical or logical system]

CONTEXT TYPE:
[terrain | industrial | isolated object]

MODE:
[FILLED — flat amber facets on void | VOID — no fill, amber edges on void]

FACET GEOMETRY:
- [FILLED: Render as flat-shaded amber TIN / low-polygon mesh, all faces flat amber (#FFB300)]
- [VOID: Render as sparse low-polygon wireframe — edges only, face interiors void]
- [Define primary facet structure — where mesh is dense vs. sparse]
- [Define secondary facet areas]
- [FILLED: Hairline black gaps between facets throughout]
- [VOID: No face fill of any kind — void between all edges]

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

COLOR + RENDERING:
- Monochrome amber (#FFB300) only
- [FILLED: Flat facet fills, zero gradient, no shading; structural edge lines over fills]
- [VOID: Edge lines only; bloom at intersections and vertex nodes]
- Phosphor bloom at vertex nodes only [FILLED: not on face interiors]

PROJECTION:
- Orthographic / isometric only
- No perspective distortion

CONDITIONAL OVERLAYS:
- Contours: only if terrain context exists and carry real elevation intervals — thin amber lines, no fill
- Remove if irrelevant

ANNOTATION:
- Monospace labels only
- Variables + coordinates only
- Every label must connect via leader line
- No narrative text

FAIL CONDITIONS:
- No gradient within any facet [FILLED] / no fill of any kind [VOID]
- No shading or lighting variation between faces
- No implied light source
- No face colors other than amber (#FFB300)
- No perspective distortion
- No decorative UI/HUD elements
- No non-amber colors
- No human figures
- No motion blur or trajectory arcs
- No shadows
- No synthwave aesthetic elements
\`\`\`

---

## CONTEXT TYPE REFERENCE

**terrain** — Subject has elevation, surface, or topographic character. TIN facets encode slope complexity through triangulation density. FILLED mode reads terrain as massed form; VOID mode reads terrain as a sparse structural skeleton. Contour overlays eligible as thin amber lines only, no fill. Primary use case for LOWPOLY.

**industrial** — Subject is built infrastructure. FILLED mode reads as volumetric mass — vessels and structures have presence. VOID mode reads as a skeletal enclosure — structure without mass. Neither contour nor H3 typically relevant.

**isolated object** — Subject stands alone without environmental context. Geological forms, structural components, conceptual geometry. FILLED for form-dominant subjects; VOID for structure-dominant subjects. No overlays.

**network** — Not recommended for LOWPOLY. Edge-dominant subjects (graphs, flow diagrams, street networks) are better served by Standard or Spectral. Use LOWPOLY VOID only if the network has meaningful geometric volume (e.g., a 3D zone topology).

---

## WORKED PROMPT EXAMPLES

### Example A — Terrain FILLED: Arid Plateau TIN Surface
\`\`\`
GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION

SUBJECT: Terrain surface — triangulated irregular network, arid plateau with
incised canyon system and mesa edges

CONTEXT TYPE: terrain

MODE: FILLED — flat amber facets on void

FACET GEOMETRY: Flat amber TIN mesh over full terrain extent. Dense
triangulation in canyon walls and drainage incisions — facets small and
varied. Sparse triangulation across planar mesa surfaces — large, regular
facets. Plateau rim edges as primary structural edge lines drawn in amber
at secondary weight over fills. Canyon floor as secondary facet zone.
Hairline black gaps between all adjacent facets throughout.

ENVIRONMENT: Absolute black void (#000000). No horizon, no atmosphere, no
implied ground plane.

COLOR + RENDERING: All facets flat amber (#FFB300). Zero gradient, no shading.
Phosphor bloom at primary vertex nodes at canyon rim and mesa corner only.

PROJECTION: Orthographic isometric. No perspective distortion.

CONDITIONAL OVERLAYS: Contour lines at 100m elevation intervals — thin amber
lines only, no fill, rendered over facet surface.

ANNOTATION: Monospace elevation coordinates at plateau surface and canyon
floor. Leader lines only. No narrative text.

FAIL CONDITIONS: No gradient, no shading, no perspective, no non-amber colors,
no decorative elements, no human figures.
\`\`\`

### Example B — Terrain VOID: Arid Plateau TIN Surface
\`\`\`
GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION

SUBJECT: Terrain surface — triangulated irregular network, arid plateau with
incised canyon system and mesa edges

CONTEXT TYPE: terrain

MODE: VOID — no fill, amber edges on absolute black

FACET GEOMETRY: Sparse low-polygon wireframe over full terrain extent. Dense
triangulation in canyon walls and drainage incisions — many small triangle
edges, void interiors. Sparse triangulation across planar mesa surfaces —
large, regular triangle edges with wide void faces. No face fill of any kind.
Plateau rim as primary structural edges at full weight. Canyon floor
triangulation at secondary weight.

ENVIRONMENT: Absolute black void (#000000). No horizon, no atmosphere.

COLOR + RENDERING: Amber (#FFB300) edge lines only. Face interiors void —
no fill, no opacity, no tint. Phosphor bloom at canyon rim vertex nodes and
mesh boundary intersections.

PROJECTION: Orthographic isometric. No perspective distortion.

CONDITIONAL OVERLAYS: Contour lines at 100m intervals — thin amber lines
at context weight, rendered as additional edge layer over void faces.

ANNOTATION: Monospace elevation coordinates at plateau and canyon floor.
Leader lines only. No narrative text.

FAIL CONDITIONS: No face fill of any kind, no gradient, no shading, no
perspective, no non-amber colors, no decorative elements.
\`\`\`

### Example C — Industrial FILLED: Refinery Vessel Cluster
\`\`\`
GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION

SUBJECT: Petroleum refinery — vertical pressure vessels, horizontal
heat exchangers, connecting pipe manifold, structural support frame

CONTEXT TYPE: industrial

MODE: FILLED — flat amber facets on void

FACET GEOMETRY: Low-polygon mesh over each vessel and structural element.
Vertical vessel cylinders resolved as faceted prisms — 8–12 faces per
cylinder, all flat amber. Pipe manifold as faceted tube segments. Support
frame as angular faceted extrusions. Primary structural edges (vessel seams,
flange rings, frame joints) drawn as amber lines at secondary weight over fills.
Internal geometry not visible — exterior surface only. Hairline black gaps
between all facets.

ENVIRONMENT: Absolute black void (#000000). No horizon, no atmosphere.

COLOR + RENDERING: All facets flat amber (#FFB300). Zero gradient, no shading
variation between adjacent vessel faces. Phosphor bloom at primary vertex nodes
(top caps, flange intersections) only.

PROJECTION: Orthographic isometric.

ANNOTATION: Monospace vessel IDs at primary structural nodes. Coordinate
labels at facility boundary reference points. Leader lines only.

FAIL CONDITIONS: No gradient, no shading, no implied light source, no
perspective, no non-amber colors, no decorative elements.
\`\`\`

### Example D — Isolated Object VOID: Geological Formation
\`\`\`
GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION

SUBJECT: Basalt columnar formation — hexagonal prism columns,
jointing pattern, fractured crown geometry

CONTEXT TYPE: isolated object

MODE: VOID — no fill, amber edges on absolute black

FACET GEOMETRY: Sparse low-polygon wireframe over column cluster. Each
column resolved as hexagonal prism skeleton — 6 rectangular lateral face
outlines, 1 top cap outline. Crown fractures as irregular angular edge
networks. No face fill of any kind — void between all edges. Primary
structural edges: column vertical seams and top cap perimeters at full
weight. Secondary structural edges: lateral face horizontal joints at
reduced weight. Joint gaps between columns visible as void through the
wireframe.

ENVIRONMENT: Absolute black void (#000000). No ground plane, no atmosphere,
no shadow.

COLOR + RENDERING: Amber (#FFB300) edge lines only. Face interiors void.
Phosphor bloom at column top vertex nodes and crown fracture apex nodes.

PROJECTION: Orthographic isometric, oblique view to show column height
and crown fracture geometry.

ANNOTATION: Monospace joint-spacing coordinate at column base. Column
height dimension at primary column. Leader lines only. No overlays.

FAIL CONDITIONS: No face fill of any kind, no gradient, no shading, no light
source, no non-amber colors, no perspective, no decorative elements.
\`\`\`

---

## MODE SELECTION GUIDE

| Question | Answer → Mode |
|---|---|
| Does the subject have volume that needs to read as solid mass? | FILLED |
| Does the subject need to feel skeletal, open, structural? | VOID |
| Is the triangulation density the primary message (terrain complexity)? | Either — FILLED emphasizes surface, VOID emphasizes structure |
| Are you layering Spectral data channels on top next? | FILLED (see LOWPOLY Spectral) |
| Is the subject an isolated structural object in void? | VOID preferred |

When in doubt: VOID is the more conservative choice. It stays closer to the Standard Gridcore philosophy and never risks fill overwhelming structure.

---

## WHAT IS NEVER SHOWN (Both Modes)

- Gradient or shading within any single facet
- Variation in amber intensity between adjacent faces
- Implied light source or directional illumination
- Ambient occlusion or shadow
- Human figures
- Perspective convergence or horizon lines
- Non-amber colors
- Motion blur or trajectory arcs
- HUD elements, status strings, or metadata readouts
- Decorative or narrative elements of any kind
- Synthwave aesthetic elements
- Network graphs or flow diagrams (use Standard or Spectral)

### VOID Mode Additionally Prohibits
- Face fill of any kind — void is not tinted, not at reduced opacity, not implied
- Any amber fill that could be mistaken for a face fill

### FILLED Mode Additionally Prohibits
- Color variation between adjacent filled faces
- Opacity variation between adjacent filled faces
- Ambient occlusion darkening at facet edges

---

*Globe & Atlas // Daniel Bally // globeandatlas.com*
*LOWPOLY Mode approved April 2026*
*VOID rendering mode added April 2026*
*Extends GRIDCORE visual family — FILLED inverts Standard edge rule; VOID applies Standard edge rule to low-polygon mesh*`,

  spectral: `# SPECTRAL GRIDCORE // VECTOR PROJECTION
### Board-Approved Spectral Mode — Globe & Atlas
*Extension of Standard Gridcore. Inherits all base constraints.*

---

## DESIGN PHILOSOPHY

Spectral Gridcore is the data-encoding extension of Standard Gridcore. It applies the same structural wireframe language but introduces up to 7 additional color channels — each one carrying a discrete, non-redundant data dimension.

The philosophical foundation is Edward Tufte: every mark must earn its place, and every color must encode real information. This connects directly to false-color remote sensing — Sentinel-2 band composites, LiDAR intensity returns, spectral indices — where color is measurement, not decoration.

**The critical constraint:** If a color cannot be defined in a legend with a real-world value attached, it is removed.

**Board provenance:** Tufte (data-ink ratio), Shannon (signal encoding), Rams (conditional necessity). Amber base channel approved by full Board under Standard Gridcore. Additional channels conditionally approved subject to declaration discipline.

---

## CORE SPECIFICATION

### Channel System
- **Maximum 8 channels defined** per visual system
- **Maximum 4 channels active** in any single image
- **Amber (#FFB300) is always Channel 1** — the structural skeleton, always present, always dominant
- Every additional channel must declare: variable encoded, value range or threshold, rendering element

### Channel Declaration Format
\`\`\`
- [Color Name] ([Hex]) — [Variable] // [Value range or threshold]
\`\`\`

### Master Channel Palette
*Phosphor-honest colors only. No pastels, no RGB primaries for decoration.*

| Channel | Name | Hex | Canonical Use |
|---|---|---|---|
| 1 | Amber | #FFB300 | Base structure — always |
| 2 | P1 Green | #33FF57 | Elevation / positive value / gain |
| 3 | Cyan | #00FFFF | Flow / hydraulic / movement |
| 4 | Red-Orange | #FF4500 | Anomaly / threshold breach / loss |
| 5 | White | #FFFFFF | Critical annotation / divide |
| 6 | Pale Blue | #AADDFF | Low confidence / atmospheric |
| 7 | Magenta | #FF00FF | Classification boundary |
| 8 | Yellow | #FFFF00 | Secondary anomaly / warning |

### Rendering Rules
- Amber structural skeleton rendered first, always dominant
- Data channels rendered as overlays — never replacing structure
- Face fills: maximum 12% opacity per channel
- Bloom on amber only — data channels are clean lines, no bloom
- No two channels may occupy the same rendering element in the same image
- All channels must remain legible against #000000

---

## PROMPT TEMPLATE

\`\`\`
SPECTRAL GRIDCORE // VECTOR PROJECTION

SUBJECT:
[Define the physical or logical system]

CONTEXT TYPE:
[terrain | industrial | network | isolated object]

CHANNEL DECLARATION:
- Amber (#FFB300) — [Base structure element]
- [Color] ([Hex]) — [Variable] // [Value range]
- [Color] ([Hex]) — [Variable] // [Value range]
- [Color] ([Hex]) — [Variable] // [Value range]
(Maximum 4 active channels. Unused slots removed.)

CORE GEOMETRY:
- Hollow wireframe skeleton — edges only
- [Define primary structure elements]
- [Define secondary structure elements]
- Orthographic / isometric projection only

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

LINE HIERARCHY:
- Primary structure: dominant weight
- Secondary structure: reduced weight
- Context (contours/grid): thin
- Data channel overlays: never heavier than primary structure

CONDITIONAL OVERLAYS:
- Contours: only if terrain context and real elevation intervals
- H3 grid: only if spatial subdivision is meaningful
- Face fills: maximum 12% opacity, data channels only
- Remove all if irrelevant

FLOW REPRESENTATION:
- Major flows match primary structure weight
- Minor flows match secondary structure weight
- Uniform arrowhead style throughout
- Color follows channel declaration
- No text attached to arrows

ANNOTATION:
- Monospace labels only
- Variables + coordinates only
- Every label must connect via leader line
- No narrative text
- Bloom on amber only — data channel lines are clean

FAIL CONDITIONS:
- No perspective distortion
- No gradients within any channel
- No bloom on data channels
- No color outside declared channels
- No decorative UI/HUD elements
- No fake status text
- Amber structure must remain readable beneath all overlays
- Maximum 4 active channels per image
- No face fill exceeding 12% opacity
\`\`\`

---

## CONTEXT TYPE REFERENCE

Inherited from Standard Gridcore.

**terrain** — Elevation, surface, topographic character. Contour and H3 overlays eligible.

**industrial** — Built infrastructure, structural integrity primary. Neither contour nor H3 typically relevant.

**network** — Relational. Nodes and edges primary. H3 potentially relevant.

**isolated object** — Single component in void. No overlays.

---

## WORKED PROMPT EXAMPLES

### Example A — GIS: Watershed Network Analysis
\`\`\`
SPECTRAL GRIDCORE // VECTOR PROJECTION

SUBJECT: Watershed drainage network, hierarchical stream order,
arid terrain catchment

CONTEXT TYPE: terrain

CHANNEL DECLARATION:
- Amber (#FFB300) — TIN terrain skeleton, catchment boundary edges
- P1 Green (#33FF57) — First and second order streams // headwater channels
- Cyan (#00FFFF) — Third and fourth order streams // main channel network
- White (#FFFFFF) — Watershed divide // critical ridge breakline

CORE GEOMETRY: Hollow wireframe TIN. Triangle edge density varies with
terrain complexity — tight in channel zones, sparse on planar surfaces.
No face fill on terrain. Stream channels overlay amber TIN as color-declared
vector lines.

ENVIRONMENT: Absolute black void (#000000). No horizon.

PROJECTION: Orthographic isometric.

FLOW REPRESENTATION: Green and cyan directional vectors following stream
order hierarchy. Cyan dominant over green at channel confluences. Arrow
weight matches channel weight declaration.

ANNOTATION: Monospace stream order labels (1, 2, 3) at channel origins.
Catchment area coordinate at centroid. Leader lines only.

FAIL CONDITIONS: No perspective, no gradients, no bloom on data channels,
amber TIN readable beneath stream overlays, maximum 4 active channels.
\`\`\`

### Example B — FME: Spatial ETL Pipeline
\`\`\`
SPECTRAL GRIDCORE // VECTOR PROJECTION

SUBJECT: FME workspace — multi-source spatial ETL process with geometry
transformation stages, validation routing, and output streams

CONTEXT TYPE: network

CHANNEL DECLARATION:
- Amber (#FFB300) — Transformer nodes, connection edges, workspace skeleton
- Cyan (#00FFFF) — Feature flow paths // active data moving through pipeline
- Red-Orange (#FF4500) — Rejection ports // failed feature routing
- P1 Green (#33FF57) — Validated output streams // passed features

CORE GEOMETRY: Hollow wireframe node graph. Transformers as geometric
primitives — rectangles for processors, circles for readers and writers.
Connection edges as secondary structure amber. Internal transformer logic
revealed as skeletal sub-geometry at reduced weight.

ENVIRONMENT: Absolute black void (#000000). No horizon.

PROJECTION: Orthographic isometric.

FLOW REPRESENTATION: Cyan arrows along main feature flow paths. Green
arrows on output routing. Red-orange arrows on rejection paths. Arrow
weight matches flow volume — major flows dominant, branch flows reduced.
Uniform arrowhead style throughout.

ANNOTATION: Monospace transformer names at nodes. Feature count
coordinates on dominant cyan flow paths. Leader lines only.

FAIL CONDITIONS: No perspective, no gradients, no bloom on data channels,
amber skeleton dominant throughout, maximum 4 active channels.
\`\`\`

### Example C — GIS: Land Cover Change Detection
\`\`\`
SPECTRAL GRIDCORE // VECTOR PROJECTION

SUBJECT: Multi-temporal land cover comparison — polygon boundary shift,
classification change zones, two-epoch analysis

CONTEXT TYPE: terrain

CHANNEL DECLARATION:
- Amber (#FFB300) — Stable boundary skeleton // unchanged polygon edges
- Red-Orange (#FF4500) — Loss zones // vegetation removed or impervious gain
- P1 Green (#33FF57) — Gain zones // revegetation or canopy expansion
- White (#FFFFFF) — Change boundary perimeter // transition edge

CORE GEOMETRY: Hollow wireframe polygon network. TIN terrain as thin
amber context layer beneath. Change zone faces at 10% opacity per declared
channel. Stable polygon interiors void.

ENVIRONMENT: Absolute black void (#000000). No horizon.

PROJECTION: Orthographic top-down.

CONDITIONAL OVERLAYS: H3 grid at resolution 8 if spatial aggregation
unit is relevant to subject. Remove if not.

ANNOTATION: Monospace area coordinates at change zone centroids.
Epoch labels (T1, T2) at boundary reference points. Leader lines only.

FAIL CONDITIONS: No perspective, no gradients, no bloom on data channels,
amber boundary readable beneath change overlays, maximum 4 active channels,
face fill not exceeding 12% opacity.
\`\`\`

### Example D — Network: Street Pedestrian Flow
\`\`\`
SPECTRAL GRIDCORE // VECTOR PROJECTION

SUBJECT: Urban street network — intersection topology,
pedestrian flow density by corridor

CONTEXT TYPE: network

CHANNEL DECLARATION:
- Amber (#FFB300) — Street centerline skeleton, block boundary edges
- Cyan (#00FFFF) — High pedestrian flow corridors // arterial level
- P1 Green (#33FF57) — Low flow network // residential and local streets
- Red-Orange (#FF4500) — Conflict nodes // high-volume intersections

CORE GEOMETRY: Hollow wireframe network. Intersections as amber nodes.
Block interiors void. No building footprints — street geometry only.
Red-orange nodes rendered as geometric markers at conflict intersections.

ENVIRONMENT: Absolute black void (#000000). No horizon.

PROJECTION: Orthographic top-down.

FLOW REPRESENTATION: Cyan and green directional vectors along corridors.
Cyan dominant on arterials, green reduced on local streets.
Uniform arrowhead style.

ANNOTATION: Monospace intersection IDs at red-orange conflict nodes.
Coordinate labels at network boundary. Leader lines only.

FAIL CONDITIONS: No perspective, no gradients, no bloom on data channels,
maximum 4 active channels.
\`\`\`

---

## CHANNEL DISCIPLINE CHECKLIST

Before finalizing any Spectral Gridcore image, verify:

- [ ] Pascal Silence Test: *"Is this channel measuring something — or am I afraid of amber alone?"*
- [ ] Every color has a declared variable
- [ ] Every declared variable has a value range or threshold
- [ ] No more than 4 channels active
- [ ] Amber structure visible beneath all overlays
- [ ] No channel bloom except amber
- [ ] No face fill exceeds 12% opacity
- [ ] A legend could be written from the channel declaration alone

---

## TEMPORAL CONFIGURATION

*Pre-configured Spectral mode for multi-epoch structural comparison.*

**Pascal Silence Test (required before use):** A temporal overlay is justified only when co-registered layers reveal spatial change that side-by-side Standard images cannot. If the change is legible from two separate images — use two Standard images.

### Epoch System
- **Amber (#FFB300) always encodes the most recent epoch** — dominant, full weight
- Prior epochs rendered as ghost layers — same geometry, reduced opacity, declared color
- **Maximum 3 epochs** per image
- Every epoch must declare: date or period, opacity

### Epoch Palette

| Epoch | Name | Hex | Opacity |
|---|---|---|---|
| Current | Amber | #FFB300 | 100% |
| Prior | Pale Blue | #AADDFF | 35–45% |
| Earliest | White | #FFFFFF | 15–25% |

### Change Channels *(optional — declare only if change is the subject)*
- **Red-Orange (#FF4500)** — Loss geometry // structure absent in current epoch
- **P1 Green (#33FF57)** — Gain geometry // structure absent in prior epoch
- **Magenta (#FF00FF)** — Change boundary // perimeter of structural difference
- Maximum 2 change channels active alongside epoch layers
- Ghost epoch count + change channel count must not exceed 4 total active channels

### Rendering Rules
- Ghost epochs rendered beneath amber — never obscuring current structure
- Bloom on amber epoch only — ghost layers are clean lines, no bloom
- No face fill on ghost layers
- No gradient transitions between epoch layers

### Temporal Prompt Template

\`\`\`
SPECTRAL GRIDCORE // VECTOR PROJECTION // TEMPORAL

SUBJECT:
[Define the physical or logical system and the nature of its change]

CONTEXT TYPE:
[terrain | industrial | network | isolated object]

EPOCH DECLARATION:
- Amber (#FFB300) — Current epoch // [Date or period] // 100%
- Pale Blue (#AADDFF) — Prior epoch // [Date or period] // 40%
- White (#FFFFFF) — Earliest epoch // [Date or period] // 20%
(Remove unused epoch slots. Minimum 2 epochs required.)

CHANGE CHANNELS (optional — declare only if change is the subject):
- [Color] ([Hex]) — [Loss or Gain] // [What changed]
(Maximum 2 change channels. Remove if not needed.)

CORE GEOMETRY:
- Hollow wireframe skeleton — edges only
- [Define primary structure elements]
- Ghost epoch geometry matches current epoch topology — same elements, reduced presence
- Orthographic / isometric projection only

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

LINE HIERARCHY:
- Primary structure (current): dominant weight
- Secondary structure (current): reduced weight
- Ghost layers: proportionally reduced
- Change channels: never heavier than primary structure

ANNOTATION:
- Monospace epoch labels at structural reference points
- Date or period label per epoch — no narrative text
- Every label must connect via leader line
- Bloom on amber annotation only

FAIL CONDITIONS:
- No perspective distortion
- No gradients within any epoch layer
- No bloom on ghost layers
- No color outside declared epochs and change channels
- No decorative UI/HUD elements
- Amber current epoch dominant and readable
- Maximum 3 epochs per image
- Ghost opacity not exceeding 45%
- No face fill on ghost layers
- Total active layers (ghost epochs + change channels) not exceeding 4
\`\`\`

### Example — Terrain: Coastal Erosion

\`\`\`
SPECTRAL GRIDCORE // VECTOR PROJECTION // TEMPORAL

SUBJECT: Coastal bluff geometry — shoreline recession across three survey
epochs, erosion face and cliff-top edge migration

CONTEXT TYPE: terrain

EPOCH DECLARATION:
- Amber (#FFB300) — Current epoch // 2024 survey // 100%
- Pale Blue (#AADDFF) — Prior epoch // 2014 survey // 40%
- White (#FFFFFF) — Earliest epoch // 2004 survey // 20%

CHANGE CHANNELS:
- Red-Orange (#FF4500) — Loss geometry // eroded bluff face, recession zone

CORE GEOMETRY: Hollow wireframe cliff profile. Bluff edge and erosion face
as primary structure per epoch. Ghost epochs render same cliff geometry at
declared opacity — recession visible as spatial offset between amber and
ghost edges. Red-orange loss geometry as sparse wireframe infill between
earliest and current edge positions — no solid fill.

ENVIRONMENT: Absolute black void (#000000). No horizon.

PROJECTION: Orthographic isometric, oblique view to show cliff face.

ANNOTATION: Monospace year labels (2004, 2014, 2024) at bluff edge
reference points. Recession distance coordinate between earliest and
current edge. Leader lines only.

FAIL CONDITIONS: No perspective, no gradients, no bloom on ghost layers,
amber current epoch dominant, ghost opacity within declared range, maximum
3 epochs, no face fill.
\`\`\`

### Temporal Discipline Checklist

Before finalizing any temporal image, verify the Spectral checklist above, plus:

- [ ] Pascal Silence Test passed: co-registration reveals change that side-by-side images cannot
- [ ] Every epoch has a declared date or period
- [ ] Amber encodes the most recent epoch
- [ ] No more than 3 epochs active
- [ ] Ghost layers render beneath amber in all areas
- [ ] Ghost opacity within declared range (Prior: 35–45%, Earliest: 15–25%)
- [ ] No bloom on ghost layers
- [ ] Ghost epoch count + change channel count does not exceed 4 total

---

## WHAT IS NEVER SHOWN

Inherits all Standard Gridcore exclusions, plus:

- Color outside declared channel palette
- More than 4 active channels in a single image
- Bloom on any channel except amber
- Face fill exceeding 12% opacity
- Undeclared colors used for visual interest
- Gradient transitions between channel colors

Temporal configuration additionally prohibits:

- More than 3 epochs in a single image
- Ghost layer opacity exceeding 45%
- Bloom on any ghost layer
- Face fill on ghost epoch layers
- Undeclared temporal colors used for visual richness
- Ghost epoch count + change channel count exceeding 4 total

---

*Globe & Atlas // Daniel Bally // globeandatlas.com*
*Spectral Mode approved April 2026*
*Temporal Configuration absorbed April 2026*
*Extends Standard Gridcore — inherits all base constraints*`,

  lowpoly_spectral: `# GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION
### Board-Approved Spectral Facet Mode — Globe & Atlas
*Extension of LOWPOLY Mono. Inherits all base constraints.*

---

## DESIGN PHILOSOPHY

LOWPOLY Spectral is the data-encoding extension of LOWPOLY Mono. It applies the same flat-shaded facet language but assigns each facet to a declared data channel — replacing the amber fill with a channel color that encodes a discrete, non-redundant data dimension.

The philosophical foundation is false-color remote sensing: Sentinel-2 band composites, classified land cover rasters, elevation band maps. In those outputs, color is measurement. Each pixel belongs to exactly one class. LOWPOLY Spectral applies this principle to a triangulated mesh — each facet belongs to exactly one declared channel, and that channel carries a real-world variable.

**The critical inversion from Spectral Wireframe:** In Spectral Wireframe, amber is the structural skeleton and color channels are overlays at ≤12% opacity. In LOWPOLY Spectral, color channels are the face fills at 100% opacity, and amber is the structural skeleton drawn over them as edge lines. The face is the data; the edge is the structure.

**The critical constraint:** Amber (#FFB300) is always present as the structural skeleton — drawn as edge lines over color-filled facets. Amber never disappears beneath data. If a channel cannot be defined in a legend with a real-world value attached, it is removed.

**Board provenance:** Tufte (every facet color is a data claim, not decoration), Shannon (maximum information per rendered element — face encodes class, edge encodes structure simultaneously), Rams (conditional necessity — channels added only when the data demands it). Spectral Wireframe precedent applied to the LOWPOLY rendering model.

---

## CORE SPECIFICATION

### Channel System
- **Maximum 8 channels defined** per visual system
- **Maximum 4 channels active** in any single image
- **Amber (#FFB300) is always the structural skeleton** — rendered as edge lines over all face fills, always dominant and legible
- Every non-amber channel is a face fill color — it must declare: variable encoded, value range or class, rendering element
- Each facet belongs to exactly one channel — no overlapping fills

### Channel Declaration Format
\`\`\`
- [Color Name] ([Hex]) — [Variable] // [Value range, class, or threshold]
\`\`\`

### Master Channel Palette
*Phosphor-honest colors only. No pastels, no RGB primaries for decoration.*

| Channel | Name | Hex | Canonical Face Use |
|---|---|---|---|
| 1 | Amber | #FFB300 | Structural skeleton (edges) + baseline/unclassified facets |
| 2 | P1 Green | #33FF57 | Elevation gain / positive value / vegetation |
| 3 | Cyan | #00FFFF | Flow / hydraulic / movement zone |
| 4 | Red-Orange | #FF4500 | Anomaly / threshold breach / loss / high severity |
| 5 | White | #FFFFFF | Critical zone / divide / boundary facet |
| 6 | Pale Blue | #AADDFF | Low confidence / atmospheric / water |
| 7 | Magenta | #FF00FF | Classification boundary zone |
| 8 | Yellow | #FFFF00 | Secondary anomaly / warning / mid-value |

### Rendering Rules
- Amber structural skeleton drawn as edge lines OVER all color-filled facets — always dominant
- Face fills: 100% opacity, flat, zero gradient within any face
- No shading variation between adjacent faces of the same channel
- Amber bloom at primary vertex nodes only — data channel faces are clean, no bloom on fills
- No two channels may apply to the same facet
- All channel fills must remain legible against #000000 at facet boundaries
- Hairline black gaps between adjacent facets of the same channel remain

---

## PROMPT TEMPLATE

\`\`\`
GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION

SUBJECT:
[Define the physical or logical system]

CONTEXT TYPE:
[terrain | industrial | isolated object]

CHANNEL DECLARATION:
- Amber (#FFB300) — Structural skeleton (edge lines) + [baseline/unclassified facets if present]
- [Color] ([Hex]) — [Variable] // [Class or value range]
- [Color] ([Hex]) — [Variable] // [Class or value range]
- [Color] ([Hex]) — [Variable] // [Class or value range]
(Maximum 4 active channels. Unused slots removed.)

FACET GEOMETRY:
- Flat-shaded low-polygon mesh over full subject
- Each facet assigned to exactly one declared channel color
- [Define primary facet zones and their channel assignments]
- [Define secondary facet zones and their channel assignments]
- Hairline black gaps between adjacent facets throughout
- Amber edge lines drawn over all fills — structural emphasis at load-bearing geometry

ENVIRONMENT:
- Absolute black void (#000000)
- No horizon, no atmosphere

COLOR + RENDERING:
- Face fills: 100% opacity, flat, zero gradient within any face
- No shading or lighting variation between adjacent faces
- Amber (#FFB300) edge lines over fills — always dominant
- Phosphor bloom at amber vertex nodes only — no bloom on channel fills

PROJECTION:
- Orthographic / isometric only
- No perspective distortion

CONDITIONAL OVERLAYS:
- Contours: only if terrain context and real elevation intervals — thin amber lines over fills, no fill
- Remove if irrelevant

ANNOTATION:
- Monospace labels only
- Variables + coordinates only
- Every label must connect via leader line
- No narrative text
- Bloom on amber annotation only

FAIL CONDITIONS:
- No gradient within any facet
- No shading or lighting variation between faces
- No implied light source
- No color outside declared channels
- No more than 4 active channels
- Amber structural skeleton legible over all fills
- No bloom on channel fills
- No face color serving decorative purpose
- No perspective distortion
- No decorative UI/HUD elements
- No human figures
\`\`\`

---

## CONTEXT TYPE REFERENCE

Inherited from LOWPOLY Mono, with channel relevance notes.

**terrain** — Primary LOWPOLY Spectral use case. TIN facets classified by elevation band, land cover class, slope category, or spectral index. Channels map directly to classification raster values. Contour overlays eligible.

**industrial** — Built infrastructure with discrete material or thermal zones. Vessel surface classifications, structural integrity zones, thermal band mapping. Useful when different components must be distinguished without wireframe alone.

**isolated object** — Single object with discrete surface classifications — geological zone mapping, material facies, structural component typing. No overlays.

**network** — Not recommended. See LOWPOLY Mono guidance.

---

## WORKED PROMPT EXAMPLES

### Example A — Terrain: Elevation-Banded DEM Surface
\`\`\`
GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION

SUBJECT: Digital elevation model — arid basin and range, triangulated surface,
elevation banded into discrete hypsometric classes

CONTEXT TYPE: terrain

CHANNEL DECLARATION:
- Amber (#FFB300) — Structural edge skeleton + basin floor facets // < 200m elevation
- P1 Green (#33FF57) — Foothill and alluvial fan facets // 200–600m elevation
- Yellow (#FFFF00) — Mid-slope facets // 600–1000m elevation
- White (#FFFFFF) — Summit and ridge facets // > 1000m elevation

FACET GEOMETRY: Flat-shaded TIN mesh over full terrain extent. Dense
triangulation in basin channel zones and alluvial fans. Sparse triangulation
on planar basin floor and summit plateaus. Each facet assigned to its
elevation class channel. Amber edge lines at primary structural weight at
ridge crests and escarpment breaks. Hairline black gaps between all facets.

ENVIRONMENT: Absolute black void (#000000). No horizon.

COLOR + RENDERING: Face fills 100% flat per channel declaration. Zero gradient.
No shading variation. Amber edge lines drawn over all fills — ridgelines and
basin margins at secondary weight, primary basin boundary at full weight.
Phosphor bloom at amber ridge vertex nodes only.

PROJECTION: Orthographic isometric.

CONDITIONAL OVERLAYS: Contour lines at 200m intervals — thin amber lines
over fills, matching elevation band boundaries.

ANNOTATION: Monospace elevation labels at band boundaries. Basin centroid
coordinate. Leader lines only. No narrative text.

FAIL CONDITIONS: No gradient, no shading, no perspective, amber structural
edges legible over all fills, maximum 4 channels, no bloom on channel fills.
\`\`\`

### Example B — Terrain: Land Cover Classification TIN
\`\`\`
GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION

SUBJECT: Land cover classification — multi-class raster draped as flat-shaded
TIN mesh, savanna transition zone with three discrete cover classes

CONTEXT TYPE: terrain

CHANNEL DECLARATION:
- Amber (#FFB300) — Structural edge skeleton + bare soil / exposed surface // NDVI < 0.1
- P1 Green (#33FF57) — Woody vegetation / tree canopy // NDVI > 0.5
- Yellow (#FFFF00) — Grass and low shrub cover // NDVI 0.1–0.5
- Cyan (#00FFFF) — Surface water and wetland // water index positive

FACET GEOMETRY: Flat-shaded TIN mesh with triangulation density matched
to land cover boundary complexity. Dense facets at cover class transitions.
Sparse facets within homogeneous class zones. Each facet assigned to
its cover class channel. Amber structural edge lines at primary class
boundaries and terrain ridgelines. Hairline black gaps between facets.

ENVIRONMENT: Absolute black void (#000000). No horizon.

COLOR + RENDERING: Face fills 100% flat per channel. Zero gradient. No
shading. Amber edge lines over all fills — class boundaries and ridge
structure at secondary weight. Bloom at amber vertex nodes only.

PROJECTION: Orthographic top-down.

ANNOTATION: Monospace class labels at zone centroids (BARE, VEG, GRASS,
WATER). Area coordinate at each major zone. Leader lines only.

FAIL CONDITIONS: No gradient, no shading, no perspective, amber edges
legible, maximum 4 channels, no bloom on channel fills.
\`\`\`

### Example C — Industrial: Thermal Zone Map, Processing Facility
\`\`\`
GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION

SUBJECT: Chemical processing facility — vessel and pipe network surface
geometry, thermal operational zones classified by operating temperature range

CONTEXT TYPE: industrial

CHANNEL DECLARATION:
- Amber (#FFB300) — Structural edge skeleton + ambient-temperature vessels // < 50°C
- Yellow (#FFFF00) — Warm process streams // 50–150°C
- Red-Orange (#FF4500) — High-temperature reaction vessels // > 150°C
- Pale Blue (#AADDFF) — Cooling circuits and condensate returns // < ambient

FACET GEOMETRY: Low-polygon mesh over all facility vessels, heat
exchangers, and pipe manifold. Each vessel and pipe segment resolved as
faceted prism or cylinder with 8–12 faces. Each facet assigned to its
thermal class channel. Amber structural edge lines at primary vessel seams,
flange rings, and interconnect junctions at secondary weight. Hairline
black gaps between all facets.

ENVIRONMENT: Absolute black void (#000000). No horizon.

COLOR + RENDERING: Face fills 100% flat per thermal class. Zero gradient —
no color transition within a vessel face. Amber edge lines over all fills,
dominant at structural seam locations. Phosphor bloom at amber junction
vertex nodes only.

PROJECTION: Orthographic isometric.

ANNOTATION: Monospace temperature range labels per zone (< 50, 50–150,
> 150, COOL). Vessel IDs at primary structural nodes. Leader lines only.

FAIL CONDITIONS: No gradient, no shading, no implied heat-map color
blending within or between faces, amber structural edges legible, maximum
4 channels, no bloom on channel fills.
\`\`\`

### Example D — Isolated Object: Geological Core Facies
\`\`\`
GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION

SUBJECT: Sedimentary core sample — cylindrical drill core with four
discrete lithological facies resolved as classified low-polygon mesh

CONTEXT TYPE: isolated object

CHANNEL DECLARATION:
- Amber (#FFB300) — Structural edge skeleton + carbonate facies // limestone beds
- P1 Green (#33FF57) — Organic-rich shale facies // TOC > 2%
- Yellow (#FFFF00) — Sandstone / porous reservoir facies // porosity > 15%
- Red-Orange (#FF4500) — Intrusive / igneous intercalation // non-sedimentary

FACET GEOMETRY: Low-polygon cylinder resolved as faceted prism, 12 lateral
faces. Each lateral face band assigned to its lithological facies channel per
depth interval. Core cross-section visible as faceted top cap — amber
structural fill, no classification overlay. Primary amber edge lines at
facies boundary rings along core length. Hairline black gaps between facets.

ENVIRONMENT: Absolute black void (#000000). No ground plane, no atmosphere.

COLOR + RENDERING: Face fills 100% flat per facies class. Zero gradient within
any face. No shading. Amber edge lines over all fills at facies boundaries
and top cap rim. Bloom at primary vertex nodes only — facies boundary rings.

PROJECTION: Orthographic isometric, oblique to show lateral face distribution
and top cap simultaneously.

ANNOTATION: Monospace facies labels at each depth band (CARB, SHALE, SAND,
IGN). Depth coordinate at top and base of core. Leader lines only. No overlays.

FAIL CONDITIONS: No gradient, no shading, no perspective, amber structural
edges legible, maximum 4 channels, no bloom on channel fills.
\`\`\`

---

## CHANNEL DISCIPLINE CHECKLIST

Before finalizing any LOWPOLY Spectral image, verify:

- [ ] Pascal Silence Test: *"Is this facet color measuring something — or am I afraid of amber alone?"*
- [ ] Every channel color has a declared variable
- [ ] Every declared variable has a value range, class, or threshold
- [ ] No more than 4 channels active
- [ ] Every facet assigned to exactly one declared channel
- [ ] Amber structural edge lines legible over all channel fills
- [ ] No bloom on channel fills — amber nodes only
- [ ] No gradient within any face
- [ ] No shading between adjacent faces of the same channel
- [ ] A legend could be written from the channel declaration alone

---

## WHAT IS NEVER SHOWN

Inherits all LOWPOLY Mono exclusions, plus:

- Color outside declared channel palette
- More than 4 active channels in a single image
- Bloom on any channel fill — amber vertex nodes only
- Gradient within any single facet
- Shading variation between adjacent faces
- Implied light source or directional illumination
- Undeclared colors used for visual interest
- Facet fills at less than 100% opacity
- Amber disappearing beneath channel fills
- Two channels occupying the same facet

---

*Globe & Atlas // Daniel Bally // globeandatlas.com*
*LOWPOLY Spectral Mode approved April 2026*
*Extends LOWPOLY Mono — inverts Spectral Wireframe opacity model*
*Amber is always the structural skeleton; color channels are always the face*`
};
