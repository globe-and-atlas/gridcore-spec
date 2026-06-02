export function analyzePrompt(promptText) {
  const issues = [];
  const checks = [];
  let score = 100;

  if (!promptText || !promptText.trim()) {
    return { score: 0, checked: false, issues: ["Prompt is empty."], checks: [] };
  }

  // 1. Check Header/Mode
  let mode = "unknown";
  if (promptText.includes("GRIDCORE LOWPOLY SPECTRAL // CLASSIFIED FACET PROJECTION")) {
    mode = "lowpoly_spectral";
    checks.push({ name: "Correct Header Format", pass: true, desc: "Uses LOWPOLY SPECTRAL header." });
  } else if (promptText.includes("SPECTRAL GRIDCORE // VECTOR PROJECTION")) {
    mode = "spectral";
    checks.push({ name: "Correct Header Format", pass: true, desc: "Uses SPECTRAL header." });
  } else if (promptText.includes("GRIDCORE LOWPOLY // STRUCTURAL FACET PROJECTION")) {
    mode = "lowpoly";
    checks.push({ name: "Correct Header Format", pass: true, desc: "Uses LOWPOLY header." });
  } else if (promptText.includes("GRIDCORE // STRUCTURAL VECTOR PROJECTION")) {
    mode = "standard";
    checks.push({ name: "Correct Header Format", pass: true, desc: "Uses Standard GRIDCORE header." });
  } else {
    score -= 20;
    issues.push("Missing a valid Gridcore header declaration (e.g., 'GRIDCORE // STRUCTURAL VECTOR PROJECTION').");
    checks.push({ name: "Correct Header Format", pass: false, desc: "No standard Gridcore family header found at top." });
  }

  // 2. Check Key Sections
  const requiredSections = ["SUBJECT:", "CONTEXT TYPE:", "ENVIRONMENT:", "COLOR + RENDERING:", "PROJECTION:", "FAIL CONDITIONS:"];
  requiredSections.forEach(section => {
    if (promptText.includes(section)) {
      checks.push({ name: `Section: ${section.replace(":", "")}`, pass: true, desc: `Found ${section} section.` });
    } else {
      score -= 5;
      issues.push(`Missing required section: '${section}'`);
      checks.push({ name: `Section: ${section.replace(":", "")}`, pass: false, desc: `Missing ${section} section.` });
    }
  });

  // 3. Check for illegal perspective & rendering constructs outside of "FAIL CONDITIONS:" section
  const lines = promptText.split("\n");
  let failConditionsStartIndex = lines.findIndex(l => l.includes("FAIL CONDITIONS:"));
  if (failConditionsStartIndex === -1) failConditionsStartIndex = lines.length;

  const bodyText = lines.slice(0, failConditionsStartIndex).join("\n").toLowerCase();

  const illegalPhrases = [
    { phrase: "shading", penalty: 15, name: "No shading permitted in geometry body" },
    { phrase: "shadow", penalty: 15, name: "No shadows allowed" },
    { phrase: "gradient", penalty: 15, name: "Gradients are strictly prohibited" },
    { phrase: "realistic", penalty: 10, name: "Avoid generic realism descriptors" },
    { phrase: "vanishing point", penalty: 15, name: "Isometric/Orthographic only" },
    { phrase: "atmosphere", penalty: 10, name: "Absolute void environment only" },
    { phrase: "horizon line", penalty: 15, name: "Horizon lines violate void boundary" },
    { phrase: "ambient occlusion", penalty: 15, name: "No lighting simulation" }
  ];

  illegalPhrases.forEach(item => {
    if (bodyText.includes(item.phrase)) {
      score -= item.phrase === "gradient" && bodyText.includes("zero gradient") ? 0 : item.penalty;
      if (!(item.phrase === "gradient" && bodyText.includes("zero gradient"))) {
        issues.push(`Detected forbidden rendering concept: '${item.phrase}' in the main description.`);
        checks.push({ name: item.name, pass: false, desc: `Found reference to '${item.phrase}' before FAIL CONDITIONS.` });
      }
    } else {
      checks.push({ name: item.name, pass: true, desc: `Clear of '${item.phrase}' in main text.` });
    }
  });

  // 4. Verify absolute black background is explicitly declared
  if (bodyText.includes("#000000") || bodyText.includes("absolute black void")) {
    checks.push({ name: "Black Void Target", pass: true, desc: "Declares #000000 background void." });
  } else {
    score -= 10;
    issues.push("Missing explicit absolute black void environment declaration (#000000).");
    checks.push({ name: "Black Void Target", pass: false, desc: "Background must target absolute black void (#000000)." });
  }

  // 5. Verify color rules based on mode
  if (mode === "standard" || mode === "lowpoly") {
    // Only amber #FFB300 should be referenced
    const matchColors = promptText.match(/#[0-9a-fA-F]{6}/g) || [];
    const nonAmberColors = matchColors.filter(c => c.toUpperCase() !== "#FFB300" && c !== "#000000");
    if (nonAmberColors.length > 0) {
      score -= 20;
      issues.push(`Non-compliant colors found: ${nonAmberColors.join(", ")}. Only Amber (#FFB300) is allowed in monochrome mode.`);
      checks.push({ name: "Monochrome Constraint", pass: false, desc: `Found forbidden colors: ${nonAmberColors.join(", ")}` });
    } else {
      checks.push({ name: "Monochrome Constraint", pass: true, desc: "Only standard Amber (#FFB300) used." });
    }
  }

  if (mode === "spectral" || mode === "lowpoly_spectral") {
    // Check channel counts
    const activeColors = Array.from(new Set(promptText.match(/#[0-9a-fA-F]{6}/g) || []))
      .filter(c => c !== "#000000");
    
    if (activeColors.length > 4) {
      score -= 25;
      issues.push(`Spectral limit exceeded: ${activeColors.length} colors found. Maximum of 4 active channels allowed.`);
      checks.push({ name: "Channel Limit", pass: false, desc: `Found ${activeColors.length} channels (max 4).` });
    } else {
      checks.push({ name: "Channel Limit", pass: true, desc: `Uses compliant channel count (${activeColors.length} active).` });
    }

    if (!promptText.toUpperCase().includes("#FFB300")) {
      score -= 15;
      issues.push("Amber (#FFB300) skeleton must be declared as Channel 1.");
      checks.push({ name: "Base Amber Channel", pass: false, desc: "Missing Amber (#FFB300) skeleton definition." });
    } else {
      checks.push({ name: "Base Amber Channel", pass: true, desc: "Amber (#FFB300) skeleton declared correctly." });
    }
  }

  return {
    score: Math.max(0, score),
    checked: true,
    mode,
    issues,
    checks
  };
}
