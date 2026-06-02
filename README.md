# Gridcore

**The visual language of Globe & Atlas.**

Gridcore is a design aesthetic for AI-generated images, illustrations, and diagrams used in Globe & Atlas publications. It draws from 1970s vector CRT instruments — Evans & Sutherland flight simulators, oscilloscopes, early geospatial workstations — and from the practitioner's native visual vocabulary: basic vectors, TIN surfaces, wireframe topology.

---

## The Core Idea

Strip away texture, lighting, shadow, and fill until only structural geometry remains.

The analyst is above the data, reading it — not inside it.

Every constraint in the spec exists for a reason. Approved against: Michelangelo (structure), Rams (interface), Feynman (logic), Shannon (signal), Tufte (data-ink), Stewart Brand (endurance).

---

## Color

| Role | Color | Hex |
|---|---|---|
| Structural skeleton | Amber phosphor | `#FFB300` |
| Background | Absolute black void | `#000000` |
| Elevation / gain | P1 Green | `#33FF57` |
| Flow / hydraulic | Cyan | `#00FFFF` |
| Anomaly / loss | Red-Orange | `#FF4500` |
| Critical divide | White | `#FFFFFF` |
| Low confidence | Pale Blue | `#AADDFF` |
| Classification boundary | Magenta | `#FF00FF` |
| Secondary anomaly | Yellow | `#FFFF00` |

**Amber is always Channel 1.** The structural skeleton. Always present, always dominant.

Additional channels appear only in Spectral mode. Every channel must declare a real-world variable. If a color cannot be defined in a legend with a value attached, it is removed.

---

## Projection

- Orthographic or isometric only
- No vanishing points
- No perspective horizon
- No implied motion

---

## What Is Never Shown

- Human figures
- Perspective convergence or horizon lines
- Gradients of any kind (phosphor bloom at intersections is the only exception)
- Face fills or surface textures (except LOWPOLY Filled and LOWPOLY Spectral modes)
- Shadows or implied light sources
- HUD elements, status strings, or fake metadata readouts
- Non-declared colors
- Synthwave aesthetic elements
- Decorative or narrative elements of any kind

---

## The Four Specs

### [01 — Standard](01-standard.md)
**GRIDCORE // STRUCTURAL VECTOR PROJECTION**

The base mode. Pure hollow wireframe on absolute black void. Monochrome amber only. Every edge is a structural claim; every void between edges is intentional. The primary rendering mode for GIS terrain, network topology, and structural analysis.

---

### [02 — Lowpoly](02-lowpoly.md)
**GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION**

Two sub-modes that share one geometry system:

- **FILLED** — Flat amber facets at 100% opacity. The face is the primary carrier of form. Structure reads from aggregated surfaces, the same logic as a TIN terrain rendered in a GIS viewport.
- **VOID** — Face interiors empty, amber edges only. A deliberately coarse triangulation where large void faces read as negative space. Not a simplification of Standard — a different geometric claim: the subject resolved into its fewest honest planes.

---

### [03 — Spectral](03-spectral.md)
**SPECTRAL GRIDCORE // VECTOR PROJECTION**

The data-encoding extension. The same structural wireframe, but with up to 7 additional color channels — each one carrying a discrete, non-redundant data dimension. Maximum 4 channels active per image. Amber is always Channel 1.

Foundation: false-color remote sensing. In Sentinel-2 band composites, color is measurement, not decoration. Every channel in Spectral Gridcore follows the same rule.

Includes a **Temporal Configuration** for multi-epoch structural comparison: amber encodes the most recent epoch, prior epochs render as ghost layers at reduced opacity.

---

### [04 — Lowpoly Spectral](04-lowpoly-spectral.md)
**GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION**

The data-encoding extension of Lowpoly. The critical inversion from Spectral Wireframe: color channels are the face fills at 100% opacity, and amber is the structural skeleton drawn over them as edge lines. The face is the data; the edge is the structure.

Each facet belongs to exactly one declared channel. Primary use case: classified raster data draped as a TIN — elevation bands, land cover classes, thermal zones.

---

## Using the Specs with AI Image Generators

Each spec file contains:

1. **Design philosophy** — the reasoning behind the constraints
2. **Core specification** — medium, projection, line quality, rendering rules
3. **Prompt template** — a complete fill-in-the-blank prompt structure
4. **Context type reference** — terrain / industrial / network / isolated object
5. **Worked examples** — copy-ready prompts across subject types
6. **Fail conditions** — what explicitly cannot appear in a valid output

Copy the prompt template from the relevant spec, fill in SUBJECT, CONTEXT TYPE, and geometry details, and paste directly into Midjourney, DALL·E, Firefly, or any other generator.

---

## Hierarchy

```
Standard  ←  base mode; all other modes extend this
  └── Spectral       adds color channels to Standard wireframe
  └── Lowpoly        replaces Standard edges with a coarser faceted mesh
        └── Lowpoly Spectral  adds color channels to Lowpoly faces
```

---

*Globe & Atlas // Daniel Bally // globeandatlas.com*  
*Framework locked April 2026*
