const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const cursorLight = document.querySelector(".cursor-light");
const revealItems = document.querySelectorAll(".reveal, .skill-row");
const copyEmailButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
const featureMarkers = document.querySelectorAll(".feature-marker");
const featureDetail = document.querySelector(".feature-detail");
const physicsHotspots = document.querySelectorAll("[data-physics-hotspot]");
const physicsInfoCard = document.querySelector(".physics-info-card");
const physicsViewButtons = document.querySelectorAll("[data-physics-view]");
const thrusterVisual = document.querySelector(".thruster-visual");
const evidenceFilters = document.querySelectorAll("[data-evidence-filter]");
const evidenceStageButtons = document.querySelectorAll("[data-evidence-stage]");
const evidenceRows = document.querySelectorAll(".evidence-row");
const evidenceCells = document.querySelectorAll(".evidence-cell");
const evidenceSearch = document.querySelector("[data-evidence-search]");
const evidenceStatus = document.querySelector("[data-evidence-status]");
const evidenceProof = document.querySelector("[data-evidence-proof]");
const evidenceTitle = document.querySelector("[data-evidence-title]");
const evidenceSummary = document.querySelector("[data-evidence-summary]");
const evidenceTools = document.querySelector("[data-evidence-tools]");
const evidenceBreakdown = document.querySelector("[data-evidence-breakdown]");
const evidenceOutput = document.querySelector("[data-evidence-output]");
const evidenceLink = document.querySelector("[data-evidence-link]");
const mobileEvidenceDetail = document.querySelector("[data-mobile-evidence-detail]");
const mobileEvidenceClose = document.querySelector("[data-mobile-evidence-close]");
const mobileEvidenceTitle = document.querySelector("[data-mobile-evidence-title]");
const mobileEvidenceType = document.querySelector("[data-mobile-evidence-type]");
const mobileEvidenceSummary = document.querySelector("[data-mobile-evidence-summary]");
const mobileEvidenceTools = document.querySelector("[data-mobile-evidence-tools]");
const mobileEvidenceTimeline = document.querySelector("[data-mobile-evidence-timeline]");
const mobileEvidenceOutput = document.querySelector("[data-mobile-evidence-output]");
const mobileEvidenceLink = document.querySelector("[data-mobile-evidence-link]");
const workflowProjectLinks = document.querySelectorAll("[data-workflow-project]");
const workflowSection = document.querySelector(".workflow-section");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeToggleText = document.querySelector("[data-theme-toggle-text]");
const aiDisclosureTrigger = document.querySelector("[data-ai-disclosure-open]");
const aiDisclosureDialog = document.querySelector("#ai-disclosure-dialog");
const aiDisclosureClose = document.querySelector("[data-ai-disclosure-close]");
const supportsPointerCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const mobileWorkflowQuery = window.matchMedia("(max-width: 1024px)");
const themePreferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");
const themeStorageKey = "portfolio-theme";

const stihlFeatures = {
  drawer: {
    number: "Feature 1",
    title: "Drawer",
    text: "Stores small loose items that do not have a home in a shed or garage."
  },
  flashlight: {
    number: "Feature 2",
    title: "Flashlight",
    text: "A detachable flashlight that charges in the unit and can be removed for mobile use."
  },
  motion: {
    number: "Feature 3",
    title: "Motion Sensor",
    text: "An infrared motion sensor turns the flashlight on for three minutes when motion is detected."
  },
  charger: {
    number: "Feature 4",
    title: "Battery Charger",
    text: "A charging bay compatible with STIHL AK, AP, and AR series batteries."
  },
  sharpener: {
    number: "Feature 5",
    title: "Knife/Axe Sharpener",
    text: "An electric sharpener for dual-sided blades such as knives and axes."
  }
};

const physicsHotspotDetails = {
  emitter: {
    title: "Positive Nickel Emitter",
    bullets: [
      "Sharp nickel geometry concentrates electric field",
      "Connected to positive high voltage",
      "Strong local field helps ionize nearby air"
    ]
  },
  collector: {
    title: "Negative Copper Collector",
    bullets: [
      "Smooth copper ring serves as the collector electrode",
      "Negatively charged relative to the emitter",
      "Completes the potential difference that shapes the field"
    ]
  },
  plasma: {
    title: "Ionization Region",
    bullets: [
      "Air is partially ionized in the strongest field region",
      "The violet glow comes from excited and ionized air species",
      "Nitrogen contributes strongly to the observed color"
    ]
  },
  field: {
    title: "Electric Field",
    bullets: [
      "Electric field lines point from positive to negative potential",
      "Charged ions experience force in the direction of the electric field",
      "Stronger fields generally increase ion acceleration"
    ]
  },
  ion: {
    title: "Accelerated Ions",
    bullets: [
      "Positive ions are driven toward the negative collector",
      "Their velocity increases through the active gap",
      "Collisions begin transferring momentum into neutral air"
    ]
  },
  airflow: {
    title: "Ionic Wind",
    bullets: [
      "Accelerated ions collide with surrounding neutral air",
      "Momentum transfer creates a net airflow",
      "This bulk airflow is the measurable output of the thruster"
    ]
  }
};

const viewHotspotMap = {
  overview: "emitter",
  field: "field",
  ionization: "plasma",
  collector: "collector",
  momentum: "airflow"
};

const evidenceProjects = {
  ionic: {
    title: "Ionic Wind Thruster Redesign",
    summary: "A wind propulsion prototype that used multiple prototypes, test observations, and theory to create faster airflow and opposite-direction thrust.",
    tools: ["SolidWorks", "Fusion 360", "Onshape", "3D Printing"],
    output: "More repeatable emitter/collector alignment and a prototype setup that was easier to adjust and test.",
    link: "#ionic-project",
    stages: {
      notice: "The prototype's electrical connections and sliding setup were not safe or reliable enough, so the focus was on improving connection stability, alignment, and repeatability.",
      map: "Tested airflow, ring spacing, and mechanical constraints to determine what needed to change.",
      build: "Created a more stable emitter/collector mounting concept and sliding adjustment system.",
      integrate: "Improved repeatability, alignment, and prototype usability."
    }
  },
  airfoil: {
    title: "Wind Turbine Blade Airfoil Processing",
    summary: "A Virginia Tech Wind Turbine Team blade-design workflow for turning raw airfoil coordinate data into cleaner CAD-ready curves.",
    tools: ["MATLAB", "SolidWorks", "Airfoil Tools", "Blade design"],
    output: "Processed airfoil profiles prepared for SolidWorks blade modeling and CAD workflow support.",
    link: "#airfoil-project",
    stages: {
      notice: "Needed to reduce airfoil coordinate points so the profile could be plotted, 3D printed, and implemented for the wind turbine.",
      map: "Researched airfoil profiles with Airfoil Tools, gathered coordinate data, and cleaned point sets in MATLAB.",
      build: "Reduced point density and prepared smoother CAD-ready curves for SolidWorks blade modeling.",
      integrate: "3D printed and installed the airfoil blades on a mini-scale wind turbine designed for the Great Lakes region."
    }
  },
  guitar: {
    title: "The Electric Stick",
    summary: "A Virginia Tech engineering class final project focused on designing, building, testing, and presenting a low-cost, homemade instrument.",
    tools: ["SolidWorks", "Fusion 360", "CNC", "Laser Cutting", "Pitch testing", "Engineering presentation"],
    output: "A functional CNC-cut and laser-cut electric string instrument prototype with documented pitch testing, cost analysis, limitations, musician feedback, and lessons learned.",
    link: "Metallica_Electric_Stick_Project_Compiled.pdf",
    stages: {
      notice: "Needed an original instrument that was low cost, accessible, easy to tune, amplified, and capable of about two octaves.",
      map: "Brainstormed several concepts, tested rough prototypes, reviewed showcase feedback, and used musician input to choose the electric string instrument direction.",
      build: "Moved through a sketch-to-CAD fabrication workflow, CNC-machined the final body out of white PVC decking, and used a laser-cut wooden backing with strings, tuning hardware, and an output jack for amplification.",
      integrate: "Documented the project, completed it on time, presented it in the final class presentation, and played a song in front of the class to prove it worked."
    }
  },
  stihl: {
    title: "STIHL 4-in-1 Storage Reduction Tool",
    summary: "A compact multi-function product concept for reducing garage tool clutter.",
    tools: ["Onshape", "Product presentation"],
    output: "A parametric CAD model, engineering drawings, and presentation-ready product explanation.",
    link: "#stihl-project",
    stages: {
      notice: "Multiple garage tools take up space and create storage clutter.",
      map: "Planned a compact multi-function product combining charging, sharpening, lighting, sensing, and storage.",
      build: "Created a fully parametric CAD model and engineering drawings.",
      integrate: "Prepared the concept for presentation with drawings, visuals, and product explanation."
    }
  },
  kitchen: {
    title: "AutoCAD Kitchen Rendering",
    summary: "A complete interior modeling project built from individual components and rendered for presentation.",
    tools: ["AutoCAD 3D", "Rendering"],
    output: "Rendered visuals showing the completed kitchen layout, materials, and component relationships.",
    link: "#kitchen-project",
    stages: {
      notice: "Needed to model a complete interior space with realistic component placement and materials.",
      map: "Planned layout, dimensions, and appliance components to go in the kitchen.",
      build: "Made each kitchen part separately and assigned materials to each component in the part assembly.",
      integrate: "Created an assembly, placed all parts in the kitchen, set up camera angles for the render, and produced the rendered visuals."
    }
  },
  hess: {
    title: "Hess Truck Technical Drawing",
    summary: "A technical drafting project focused on measuring a real object and turning it into clean AutoCAD documentation.",
    tools: ["AutoCAD 2D", "Technical drawing"],
    output: "A dimensioned orthographic drawing sheet that accurately communicated the Hess truck geometry.",
    link: "#hess-project",
    stages: {
      notice: "Needed to document a real object accurately from direct physical measurement.",
      map: "Measured major and small features, then planned clean orthographic views and selective dimensions.",
      build: "Recreated the truck as a precise AutoCAD 2D technical drawing.",
      integrate: "Produced a clean dimensioned drawing sheet with professional drafting presentation."
    }
  },
  structures: {
    title: "Thin-Walled Structures Final Analysis",
    summary: "A final Thin-Walled Structures homework analysis using Mathematica to study an open-section beam with and without stringers.",
    tools: ["Mathematica", "Thin-walled beam theory", "Coordinate transformations", "Symbolic computation"],
    output: "A documented aerospace structures analysis covering centroid calculations, transformed coordinates, second area of moment, product of inertia, shear flow, branch forces, and shear center / center of moment locations.",
    link: "Aerospace Structures Calculations.pdf",
    stages: {
      notice: "Needed to analyze an open-section thin-walled beam with and without stringers.",
      map: "Broke the geometry into wall segments and moved between local/prime and global coordinate systems.",
      build: "Used symbolic Mathematica workflows to calculate centroids, translated component locations, inertias, first moments of area, shear flow, branch forces, and shear center locations.",
      integrate: "Organized the equation setup and results into a final aerospace structures analysis document."
    }
  },
  python: {
    title: "Money Guide",
    summary: "A Python project that helps users make basic personal finance decisions by comparing monthly income, expenses, and debt payments.",
    tools: ["Python", "Functions", "Conditionals", "Loops", "Formatted output"],
    output: "A readable decision-making program that calculates spare cash and projects one-year and three-year savings growth across several simple scenarios.",
    link: "Money_Guide_Final_Simple_Joseph_Lilly.pdf",
    stages: {
      notice: "Needed a simple way to compare monthly income, expenses, and debt payments before making savings decisions.",
      map: "Planned the decision flow for spare cash, debt payments, savings options, and growth projections.",
      build: "Built a Python program with functions, user input, arithmetic calculations, conditionals, loops, compounding formulas, and formatted output.",
      integrate: "Organized the program into reusable pieces and presented one-year and three-year projections for bank savings, high-yield savings, S&P 500 investing, and a basic real estate scenario."
    }
  },
  pen: {
    title: "Surface Pen Paste Workflow",
    summary: "A small automation project that turned a missing Windows pen shortcut into a usable workflow.",
    tools: ["AutoHotkey", "Windows Pen Settings"],
    output: "A double-tap pen action that launches a tiny executable, sends Ctrl+V, and exits immediately.",
    link: "#pen-project",
    stages: {
      notice: "Windows did not provide a simple way to map the Surface Pen top button directly to paste.",
      map: "Investigated the pen input path and found the button used a proprietary Surface hardware channel.",
      build: "Built an AutoHotkey executable that sends Ctrl+V and exits instantly when launched.",
      integrate: "Mapped pen double-tap to the executable, creating a fast and reusable paste workflow."
    }
  }
};

let pinnedPhysicsHotspot = null;

const getStoredTheme = () => {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Theme still applies for the current page even if storage is unavailable.
  }
};

const applyTheme = (theme, shouldStore = false) => {
  const activeTheme = theme === "dark" ? "dark" : "light";
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = activeTheme;
  document.documentElement.style.colorScheme = activeTheme;

  themeToggle?.setAttribute("aria-pressed", String(activeTheme === "dark"));
  themeToggle?.setAttribute("aria-label", `Switch to ${nextTheme} mode`);

  if (themeToggleText) {
    themeToggleText.textContent = nextTheme === "dark" ? "Dark" : "Light";
  }

  if (shouldStore) {
    storeTheme(activeTheme);
  }
};

const getPreferredTheme = () => getStoredTheme() || (themePreferenceQuery.matches ? "dark" : "light");

applyTheme(document.documentElement.dataset.theme || getPreferredTheme());

themeToggle?.addEventListener("click", () => {
  const activeTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(activeTheme === "dark" ? "light" : "dark", true);
});

const handleThemePreferenceChange = (event) => {
  if (!getStoredTheme()) {
    applyTheme(event.matches ? "dark" : "light");
  }
};

if (typeof themePreferenceQuery.addEventListener === "function") {
  themePreferenceQuery.addEventListener("change", handleThemePreferenceChange);
} else if (typeof themePreferenceQuery.addListener === "function") {
  themePreferenceQuery.addListener(handleThemePreferenceChange);
}

const closeNav = () => {
  nav?.classList.remove("is-open");
  navToggle?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation");
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNav();
  }
});

document.addEventListener("click", (event) => {
  if (!nav?.classList.contains("is-open") || !(event.target instanceof Node)) return;
  if (nav.contains(event.target) || navToggle?.contains(event.target)) return;

  closeNav();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

aiDisclosureTrigger?.addEventListener("click", () => {
  if (aiDisclosureDialog && !aiDisclosureDialog.open) {
    aiDisclosureDialog.showModal();
  }
});

aiDisclosureClose?.addEventListener("click", () => {
  aiDisclosureDialog?.close();
});

aiDisclosureDialog?.addEventListener("click", (event) => {
  if (event.target !== aiDisclosureDialog) return;

  const dialogBounds = aiDisclosureDialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < dialogBounds.left ||
    event.clientX > dialogBounds.right ||
    event.clientY < dialogBounds.top ||
    event.clientY > dialogBounds.bottom;

  if (clickedOutside) aiDisclosureDialog.close();
});

if (supportsPointerCursor) {
  window.addEventListener("pointermove", (event) => {
    if (!cursorLight) return;
    cursorLight.style.left = `${event.clientX}px`;
    cursorLight.style.top = `${event.clientY}px`;
  });

  workflowSection?.addEventListener("mouseenter", () => {
    cursorLight?.classList.add("is-workflow-active");
  });

  workflowSection?.addEventListener("mouseleave", () => {
    cursorLight?.classList.remove("is-workflow-active");
  });
} else {
  cursorLight?.classList.add("is-disabled");
}

const showCopyStatus = (message) => {
  if (!copyStatus) return;
  copyStatus.textContent = message;
  copyStatus.classList.add("is-visible");

  window.setTimeout(() => {
    copyStatus.classList.remove("is-visible");
  }, 2400);
};

const fallbackCopy = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
};

copyEmailButton?.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.email;
  if (!email) return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else if (!fallbackCopy(email)) {
      throw new Error("Clipboard unavailable");
    }

    copyEmailButton.textContent = "Email Copied";
    showCopyStatus(`${email} copied`);

    window.setTimeout(() => {
      copyEmailButton.textContent = "Email Me";
    }, 2400);
  } catch {
    showCopyStatus(`Copy manually: ${email}`);
  }
});

featureMarkers.forEach((marker) => {
  marker.addEventListener("click", () => {
    const feature = stihlFeatures[marker.dataset.feature];
    if (!feature || !featureDetail) return;

    featureMarkers.forEach((item) => item.classList.remove("is-active"));
    marker.classList.add("is-active");

    featureDetail.innerHTML = `
      <span class="feature-number">${feature.number}</span>
      <h4>${feature.title}</h4>
      <p>${feature.text}</p>
    `;
  });
});

const showPhysicsHotspot = (hotspotKey) => {
  const detail = physicsHotspotDetails[hotspotKey];
  if (!detail || !physicsInfoCard) return;

  physicsHotspots.forEach((hotspot) => {
    hotspot.classList.toggle("is-active", hotspot.dataset.physicsHotspot === hotspotKey);
  });

  physicsInfoCard.innerHTML = `
    <span class="info-kicker">Hotspot</span>
    <h4>${detail.title}</h4>
    <ul>
      ${detail.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
    </ul>
  `;
};

const setPhysicsPaused = (isPaused) => {
  if (!thrusterVisual) return;
  thrusterVisual.classList.toggle("is-paused", isPaused);
};

const clearPhysicsPause = () => {
  pinnedPhysicsHotspot = null;
  setPhysicsPaused(false);
};

physicsHotspots.forEach((hotspot) => {
  const showCurrentHotspot = () => showPhysicsHotspot(hotspot.dataset.physicsHotspot);

  hotspot.addEventListener("click", (event) => {
    event.stopPropagation();
    pinnedPhysicsHotspot = hotspot.dataset.physicsHotspot;
    showCurrentHotspot();
    setPhysicsPaused(true);
  });
  hotspot.addEventListener("mouseenter", showCurrentHotspot);
  hotspot.addEventListener("focus", showCurrentHotspot);
});

thrusterVisual?.addEventListener("mouseleave", clearPhysicsPause);

document.addEventListener("click", (event) => {
  if (!pinnedPhysicsHotspot || !thrusterVisual || event.target instanceof Node && thrusterVisual.contains(event.target)) {
    return;
  }

  clearPhysicsPause();
});

physicsViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.physicsView;
    if (!view || !thrusterVisual) return;

    clearPhysicsPause();
    thrusterVisual.dataset.view = view;

    physicsViewButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    showPhysicsHotspot(viewHotspotMap[view]);
  });
});

const evidenceStageDetails = {
  notice: { number: "01", label: "Notice" },
  map: { number: "02", label: "Map" },
  build: { number: "03", label: "Build" },
  integrate: { number: "04", label: "Integrate" }
};

let activeEvidenceFilter = "all";
let evidenceSearchTerm = "";
let mobileEvidenceProjectKey = null;

const getEvidenceProjectRow = (projectKey) => (
  Array.from(evidenceRows).find((row) => row.dataset.project === projectKey)
);

const getEvidenceProjectType = (projectKey) => {
  const projectCell = getEvidenceProjectRow(projectKey)?.querySelector(".evidence-project-cell");
  if (!projectCell) return "Engineering project";

  const typeLabel = Array.from(projectCell.children).find((child) => (
    child.tagName === "SPAN"
      && !child.classList.contains("mobile-project-tags")
      && !child.classList.contains("mobile-project-action")
  ));

  return typeLabel?.textContent?.trim() || "Engineering project";
};

const applyProjectLink = (link, project) => {
  if (!link || !project) return;

  link.setAttribute("href", project.link);
  const opensDocument = project.link.toLowerCase().endsWith(".pdf");
  if (opensDocument) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  } else {
    link.removeAttribute("target");
    link.removeAttribute("rel");
  }
};

const hydrateMobileEvidenceRows = () => {
  evidenceRows.forEach((row) => {
    const projectKey = row.dataset.project;
    const project = evidenceProjects[projectKey];
    const projectCell = row.querySelector(".evidence-project-cell");
    if (!project || !projectCell || projectCell.querySelector(".mobile-project-tags")) return;

    projectCell.setAttribute("aria-expanded", "false");
    projectCell.setAttribute("aria-controls", "mobile-evidence-detail");

    const mobileTags = document.createElement("span");
    mobileTags.className = "mobile-project-tags";
    mobileTags.setAttribute("aria-label", "Project tools");

    project.tools.slice(0, 4).forEach((tool) => {
      const tag = document.createElement("span");
      tag.textContent = tool;
      mobileTags.appendChild(tag);
    });

    if (project.tools.length > 4) {
      const moreTag = document.createElement("span");
      moreTag.textContent = `+${project.tools.length - 4} more`;
      mobileTags.appendChild(moreTag);
    }

    const mobileAction = document.createElement("span");
    mobileAction.className = "mobile-project-action";
    mobileAction.textContent = "Tap to explore workflow";

    projectCell.append(mobileTags, mobileAction);
  });
};

const closeMobileEvidenceDetail = () => {
  mobileEvidenceProjectKey = null;

  if (mobileEvidenceDetail) {
    mobileEvidenceDetail.hidden = true;
    mobileEvidenceDetail.classList.remove("is-open");
  }

  evidenceRows.forEach((row) => {
    row.classList.remove("is-expanded");
    row.querySelector(".evidence-project-cell")?.setAttribute("aria-expanded", "false");
  });
};

const renderMobileEvidenceProject = (projectKey) => {
  const project = evidenceProjects[projectKey];
  const projectRow = getEvidenceProjectRow(projectKey);
  if (!project || !projectRow || !mobileEvidenceDetail) return;

  mobileEvidenceProjectKey = projectKey;
  projectRow.appendChild(mobileEvidenceDetail);

  if (mobileEvidenceTitle) mobileEvidenceTitle.textContent = project.title;
  if (mobileEvidenceType) mobileEvidenceType.textContent = getEvidenceProjectType(projectKey);
  if (mobileEvidenceSummary) mobileEvidenceSummary.textContent = project.summary;
  if (mobileEvidenceOutput) mobileEvidenceOutput.textContent = project.output;
  applyProjectLink(mobileEvidenceLink, project);

  if (mobileEvidenceTools) {
    const toolNodes = project.tools.map((tool) => {
      const tag = document.createElement("span");
      tag.textContent = tool;
      return tag;
    });
    mobileEvidenceTools.replaceChildren(...toolNodes);
  }

  if (mobileEvidenceTimeline) {
    const stageNodes = Object.entries(evidenceStageDetails).map(([stageKey, detail]) => {
      const step = document.createElement("section");
      step.className = "mobile-detail-step";

      const number = document.createElement("span");
      number.className = "mobile-step-index";
      number.textContent = detail.number;

      const card = document.createElement("div");
      card.className = "mobile-step-card";

      const label = document.createElement("span");
      label.textContent = detail.label;

      const text = document.createElement("p");
      text.textContent = project.stages[stageKey] || "";

      card.append(label, text);
      step.append(number, card);
      return step;
    });

    mobileEvidenceTimeline.replaceChildren(...stageNodes);
  }

  mobileEvidenceDetail.hidden = false;
  mobileEvidenceDetail.classList.add("is-open");

  evidenceRows.forEach((row) => {
    const isExpanded = row.dataset.project === projectKey;
    row.classList.toggle("is-expanded", isExpanded);
    row.querySelector(".evidence-project-cell")?.setAttribute("aria-expanded", String(isExpanded));
  });
};

const renderEvidenceProject = (projectKey, options = {}) => {
  const project = evidenceProjects[projectKey];
  if (!project) return;

  evidenceRows.forEach((row) => {
    row.classList.toggle("is-selected", row.dataset.project === projectKey);
  });

  if (options.openMobile && mobileWorkflowQuery.matches) {
    renderMobileEvidenceProject(projectKey);
  }

  if (!evidenceProof) return;

  evidenceProof.classList.add("is-updating");

  window.setTimeout(() => {
    if (evidenceTitle) evidenceTitle.textContent = project.title;
    if (evidenceSummary) evidenceSummary.textContent = project.summary;
    if (evidenceOutput) evidenceOutput.textContent = project.output;
    applyProjectLink(evidenceLink, project);

    if (evidenceTools) {
      evidenceTools.innerHTML = project.tools.map((tool) => `<li>${tool}</li>`).join("");
    }

    if (evidenceBreakdown) {
      evidenceBreakdown.innerHTML = Object.entries(project.stages)
        .map(([stage, text]) => `
          <section>
            <span>${stage}</span>
            <p>${text}</p>
          </section>
        `)
        .join("");
    }

    evidenceProof.classList.remove("is-updating");
  }, 120);
};

const clearEvidenceStage = () => {
  evidenceStageButtons.forEach((button) => button.classList.remove("is-active"));
  evidenceCells.forEach((cell) => cell.classList.remove("is-stage-active"));
};

const getEvidenceFilterLabel = (filterKey) => {
  const activeFilter = Array.from(evidenceFilters).find((button) => button.dataset.evidenceFilter === filterKey);
  return activeFilter?.textContent?.trim() || filterKey.replace(/-/g, " ");
};

const normalizeEvidenceText = (text) => String(text || "").toLowerCase().replace(/-/g, " ");

const getEvidenceSearchText = (projectKey, row) => {
  const project = evidenceProjects[projectKey];
  if (!project) return normalizeEvidenceText(row?.textContent || "");

  return normalizeEvidenceText([
    project.title,
    project.summary,
    project.output,
    project.tools.join(" "),
    Object.values(project.stages).join(" "),
    row?.dataset.tools || "",
    row?.textContent || ""
  ].join(" "));
};

const rowMatchesEvidenceFilter = (row, filterKey) => {
  const rowTools = row.dataset.tools || "";
  return filterKey === "all" || rowTools.split(" ").includes(filterKey);
};

const updateEvidenceStatus = (visibleCount) => {
  if (!evidenceStatus) return;

  const filterLabel = getEvidenceFilterLabel(activeEvidenceFilter);
  const projectLabel = visibleCount === 1 ? "project" : "projects";

  if (evidenceSearchTerm) {
    const searchLabel = evidenceSearch?.value.trim() || evidenceSearchTerm;
    evidenceStatus.textContent = activeEvidenceFilter === "all"
      ? `Showing ${visibleCount} ${projectLabel} matching "${searchLabel}".`
      : `Showing ${visibleCount} ${projectLabel} matching "${searchLabel}" and ${filterLabel}.`;
    return;
  }

  evidenceStatus.textContent = activeEvidenceFilter === "all"
    ? "Showing all projects across the engineering workflow."
    : `Highlighting where ${filterLabel} appears in the workflow.`;
};

const applyEvidenceSearchAndFilter = () => {
  let visibleCount = 0;

  evidenceRows.forEach((row) => {
    const projectKey = row.dataset.project;
    const filterMatches = rowMatchesEvidenceFilter(row, activeEvidenceFilter);
    const searchMatches = !evidenceSearchTerm || getEvidenceSearchText(projectKey, row).includes(evidenceSearchTerm);
    const isVisible = filterMatches && searchMatches;

    if (isVisible) visibleCount += 1;

    row.classList.toggle("is-muted", !filterMatches);
    row.classList.toggle("is-search-hidden", !isVisible);

    if (!isVisible && row.dataset.project === mobileEvidenceProjectKey) {
      closeMobileEvidenceDetail();
    }
  });

  evidenceCells.forEach((cell) => {
    const cellTools = cell.dataset.tools || "";
    const cellMatches = activeEvidenceFilter !== "all" && cellTools.split(" ").includes(activeEvidenceFilter);
    cell.classList.toggle("is-tool-match", cellMatches);
  });

  updateEvidenceStatus(visibleCount);
};

const setEvidenceFilter = (filterKey) => {
  activeEvidenceFilter = filterKey;
  clearEvidenceStage();

  evidenceFilters.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.evidenceFilter === filterKey);
  });

  applyEvidenceSearchAndFilter();
};

const setEvidenceStage = (stageKey) => {
  activeEvidenceFilter = "all";
  evidenceSearchTerm = "";
  if (evidenceSearch) evidenceSearch.value = "";

  evidenceFilters.forEach((button) => button.classList.toggle("is-active", button.dataset.evidenceFilter === "all"));
  evidenceRows.forEach((row) => {
    row.classList.remove("is-muted");
    row.classList.remove("is-search-hidden");
  });
  closeMobileEvidenceDetail();

  evidenceCells.forEach((cell) => {
    cell.classList.remove("is-tool-match");
    cell.classList.toggle("is-stage-active", cell.dataset.stage === stageKey);
  });
  evidenceStageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.evidenceStage === stageKey);
  });

  if (evidenceStatus) {
    const activeStage = Array.from(evidenceStageButtons).find((button) => button.dataset.evidenceStage === stageKey);
    const stageLabel = activeStage?.textContent?.replace(/\s+/g, " ").trim() || stageKey;
    evidenceStatus.textContent = `Highlighting the ${stageLabel} stage across every project.`;
  }
};

evidenceFilters.forEach((button) => {
  button.addEventListener("click", () => setEvidenceFilter(button.dataset.evidenceFilter || "all"));
});

evidenceSearch?.addEventListener("input", () => {
  evidenceSearchTerm = normalizeEvidenceText(evidenceSearch.value.trim());
  clearEvidenceStage();
  applyEvidenceSearchAndFilter();
});

evidenceStageButtons.forEach((button) => {
  button.addEventListener("click", () => setEvidenceStage(button.dataset.evidenceStage));
});

evidenceRows.forEach((row) => {
  row.addEventListener("click", () => {
    const projectKey = row.dataset.project;
    if (!projectKey) return;

    if (mobileWorkflowQuery.matches && row.classList.contains("is-expanded")) {
      renderEvidenceProject(projectKey);
      closeMobileEvidenceDetail();
      return;
    }

    renderEvidenceProject(projectKey, { openMobile: mobileWorkflowQuery.matches });
  });
});

workflowProjectLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const projectKey = link.dataset.workflowProject;
    if (projectKey) renderEvidenceProject(projectKey, { openMobile: mobileWorkflowQuery.matches });
  });
});

mobileEvidenceDetail?.addEventListener("click", (event) => {
  event.stopPropagation();
});

mobileEvidenceClose?.addEventListener("click", (event) => {
  event.stopPropagation();
  closeMobileEvidenceDetail();
});

if (typeof mobileWorkflowQuery.addEventListener === "function") {
  mobileWorkflowQuery.addEventListener("change", (event) => {
    if (!event.matches) closeMobileEvidenceDetail();
  });
} else if (typeof mobileWorkflowQuery.addListener === "function") {
  mobileWorkflowQuery.addListener((event) => {
    if (!event.matches) closeMobileEvidenceDetail();
  });
}

hydrateMobileEvidenceRows();
applyEvidenceSearchAndFilter();
renderEvidenceProject("ionic");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));
