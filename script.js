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
const evidenceStatus = document.querySelector("[data-evidence-status]");
const evidenceProof = document.querySelector("[data-evidence-proof]");
const evidenceTitle = document.querySelector("[data-evidence-title]");
const evidenceSummary = document.querySelector("[data-evidence-summary]");
const evidenceTools = document.querySelector("[data-evidence-tools]");
const evidenceBreakdown = document.querySelector("[data-evidence-breakdown]");
const evidenceOutput = document.querySelector("[data-evidence-output]");
const evidenceLink = document.querySelector("[data-evidence-link]");
const workflowProjectLinks = document.querySelectorAll("[data-workflow-project]");

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
    summary: "A propulsion prototype revision that turned test observations into a more stable and repeatable mechanical setup.",
    tools: ["SolidWorks", "3D Printing"],
    output: "More repeatable emitter/collector alignment and a prototype setup that was easier to adjust and test.",
    link: "#ionic-project",
    stages: {
      notice: "Unstable sliding ring mount and unreliable electrical connections made alignment and repeatability difficult.",
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
      notice: "Needed airfoil geometry for a mini-scale floating wind turbine blade concept for the Great Lakes.",
      map: "Researched airfoil profiles with Airfoil Tools, gathered coordinate data, and cleaned point sets in MATLAB.",
      build: "Reduced point density and prepared smoother CAD-ready curves for SolidWorks blade modeling.",
      integrate: "Connected airfoil research, data preparation, and CAD modeling workflow support."
    }
  },
  guitar: {
    title: "The Electric Stick",
    summary: "A Team Metallica class final project focused on designing, building, testing, and presenting a low-cost electric string instrument.",
    tools: ["SolidWorks", "Fusion 360", "CNC", "Laser Cutting", "Pitch testing", "Engineering presentation"],
    output: "A functional CNC-cut and laser-cut electric string instrument prototype with documented pitch testing, cost analysis, limitations, musician feedback, and lessons learned.",
    link: "Metallica_Electric_Stick_Project_Compiled.pdf",
    stages: {
      notice: "Needed an original instrument that was low cost, accessible, easy to tune, amplified, and capable of about two octaves.",
      map: "Brainstormed several concepts, tested rough prototypes, reviewed showcase feedback, and used musician input to choose the electric string instrument direction.",
      build: "Moved through a sketch-to-CAD fabrication workflow using CNC and laser cutting to create a wooden body with strings, tuning hardware, and an output jack for amplification.",
      integrate: "Documented pitch data, cost, setup time, limitations, feedback, and lessons learned in the final class presentation."
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
      map: "Planned layout, dimensions, and component relationships.",
      build: "Modeled cabinets, counters, appliances, and kitchen components.",
      integrate: "Applied materials and produced rendered visuals."
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
    output: "A documented aerospace structures analysis covering centroid calculations, transformed coordinates, second moments of area, product of inertia, shear flow, branch forces, and shear center / center of moment locations.",
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
    summary: "A Spring 2025 Python program that helps users make basic personal finance decisions by comparing monthly income, expenses, and debt payments.",
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

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("pointermove", (event) => {
  if (!cursorLight) return;
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

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

const renderEvidenceProject = (projectKey) => {
  const project = evidenceProjects[projectKey];
  if (!project || !evidenceProof) return;

  evidenceRows.forEach((row) => {
    row.classList.toggle("is-selected", row.dataset.project === projectKey);
  });

  evidenceProof.classList.add("is-updating");

  window.setTimeout(() => {
    if (evidenceTitle) evidenceTitle.textContent = project.title;
    if (evidenceSummary) evidenceSummary.textContent = project.summary;
    if (evidenceOutput) evidenceOutput.textContent = project.output;
    if (evidenceLink) {
      evidenceLink.setAttribute("href", project.link);
      const opensDocument = project.link.toLowerCase().endsWith(".pdf");
      if (opensDocument) {
        evidenceLink.setAttribute("target", "_blank");
        evidenceLink.setAttribute("rel", "noopener noreferrer");
      } else {
        evidenceLink.removeAttribute("target");
        evidenceLink.removeAttribute("rel");
      }
    }

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

const setEvidenceFilter = (filterKey) => {
  clearEvidenceStage();

  evidenceFilters.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.evidenceFilter === filterKey);
  });

  evidenceRows.forEach((row) => {
    const rowTools = row.dataset.tools || "";
    const rowMatches = filterKey === "all" || rowTools.split(" ").includes(filterKey);
    row.classList.toggle("is-muted", !rowMatches);
  });

  evidenceCells.forEach((cell) => {
    const cellTools = cell.dataset.tools || "";
    const cellMatches = filterKey !== "all" && cellTools.split(" ").includes(filterKey);
    cell.classList.toggle("is-tool-match", cellMatches);
  });

  if (evidenceStatus) {
    const activeFilter = Array.from(evidenceFilters).find((button) => button.dataset.evidenceFilter === filterKey);
    const filterLabel = activeFilter?.textContent?.trim() || filterKey.replace(/-/g, " ");
    evidenceStatus.textContent = filterKey === "all"
      ? "Showing all projects across the engineering workflow."
      : `Highlighting where ${filterLabel} appears in the workflow.`;
  }
};

const setEvidenceStage = (stageKey) => {
  evidenceFilters.forEach((button) => button.classList.toggle("is-active", button.dataset.evidenceFilter === "all"));
  evidenceRows.forEach((row) => row.classList.remove("is-muted"));
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

evidenceStageButtons.forEach((button) => {
  button.addEventListener("click", () => setEvidenceStage(button.dataset.evidenceStage));
});

evidenceRows.forEach((row) => {
  row.addEventListener("click", () => renderEvidenceProject(row.dataset.project));
});

workflowProjectLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const projectKey = link.dataset.workflowProject;
    if (projectKey) renderEvidenceProject(projectKey);
  });
});

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
