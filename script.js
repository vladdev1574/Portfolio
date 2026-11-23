const projects = [
  { number: "01", title: "Digitality", platform: "Webflow development", description: "A detailed agency design translated into a fast, scalable website system for services, work, and proof.", caseStudy: "case-study-digitality.html", website: "https://www.digitality-agency.com/", image: "assets/projects/digitality-home-desktop.webp", alt: "Digitality homepage with the headline Where vision transforms into Digital Greatness", domain: "digitality-agency.com", paper: "#e6ebf5", tags: ["CMS", "Interactions", "SEO"] },
  { number: "02", title: "ID Labs", platform: "Webflow development", description: "A precise, performance-led build for an AI infrastructure inspection and analytics platform.", caseStudy: "case-study-idl.html", website: "https://www.id-labs.sk/", image: "assets/projects/idl-home-desktop.webp", alt: "ID Labs homepage over an aerial motorway image", domain: "id-labs.sk", paper: "#e3ece8", tags: ["Technical content", "Performance", "Responsive"] },
  { number: "03", title: "MFG Matters", platform: "Webflow development", description: "A client-editable platform connecting manufacturing consulting, technical learning, travel, and community.", caseStudy: "case-study-mfgmatters.html", website: "https://www.mfgmatters.com/", image: "assets/projects/mfgmatters-home-desktop.webp", alt: "MFG Matters homepage showing consulting, learning, and travel services", domain: "mfgmatters.com", paper: "#f2e6d8", tags: ["CMS", "Workshops", "Client handoff"] },
  { number: "04", title: "QHS Lab", platform: "Squarespace development", description: "A polished healthcare implementation that makes a complex physician platform easier to explore and maintain.", caseStudy: "case-study-qhslab.html", website: "https://www.qhslab.com/", image: "assets/projects/qhslab-home-desktop.webp", alt: "QHS Lab homepage with healthcare product interfaces and medical imagery", domain: "qhslab.com", paper: "#e7ebf7", tags: ["Squarespace", "Content", "SEO"] },
  { number: "05", title: "Fynlance", platform: "Webflow development", description: "A conversion-focused finance talent platform with a rate estimator and clear expertise pathways.", caseStudy: "case-study-fynlance.html", website: "https://www.fynlance.com/", image: "assets/projects/fynlance-home-desktop.webp", alt: "Fynlance homepage with finance staffing message and budget estimator", domain: "fynlance.com", paper: "#f3e4dc", tags: ["Estimator", "Information architecture", "CMS"] },
  { number: "06", title: "The Country Club", platform: "Webflow development", description: "An immersive destination website connecting sport, hospitality, wellness, events, and live reservations.", caseStudy: "case-study-country-club.html", website: "https://www.thecountry.club/", image: "assets/projects/country-club-home-desktop.webp", alt: "The Country Club sports homepage featuring a padel court", domain: "thecountry.club", paper: "#e3ebe0", tags: ["CMS", "Reservations", "Events"] }
];

const projectList = document.querySelector("#project-list");
if (projectList) {
  projectList.innerHTML = projects.map((project, index) => `
    <article class="project-sheet" data-number="${project.number}" style="--sheet:${project.paper}">
      <div class="project-head"><span>${project.number} / ${String(projects.length).padStart(2, "0")}</span><span>${project.platform}</span><span>${project.domain}</span></div>
      <div class="project-layout">
        <a class="project-shot reveal" href="${project.caseStudy}" aria-label="Read ${project.title} case study" data-cursor="View">
          <figure class="project-frame"><img src="${project.image}" alt="${project.alt}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async"></figure>
        </a>
        <div class="project-copy reveal" style="--delay:90ms"><h3>${project.title}</h3><p>${project.description}</p><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div><div class="project-actions"><a class="paper-button primary" href="${project.caseStudy}">Case study <span aria-hidden="true">→</span></a><a class="paper-button" href="${project.website}" target="_blank" rel="noopener noreferrer">Live site <span aria-hidden="true">↗</span></a></div></div>
      </div>
    </article>`).join("");
}

const caseReels = {
  "case-study-digitality.html": { title: "Scroll the live design system", domain: "digitality-agency.com", desktop: ["assets/projects/fullpage/digitality-full-desktop.jpg", 2160, 16143, "Full desktop view of the Digitality website"], mobile: ["assets/projects/fullpage/digitality-full-mobile.jpg", 780, 23444, "Full mobile view of the Digitality website"] },
  "case-study-idl.html": { title: "Scroll from positioning to proof", domain: "id-labs.sk", desktop: ["assets/projects/fullpage/idl-full-desktop.jpg", 2160, 11511, "Full desktop view of the ID Labs website"], mobile: ["assets/projects/fullpage/idl-full-mobile.jpg", 780, 22388, "Full mobile view of the ID Labs website"] },
  "case-study-mfgmatters.html": { title: "Scroll through a client-managed platform", domain: "mfgmatters.com", desktop: ["assets/projects/fullpage/mfgmatters-full-desktop.jpg", 2160, 4215, "Full desktop view of the MFG Matters website"], mobile: ["assets/projects/fullpage/mfgmatters-full-mobile.jpg", 780, 12100, "Full mobile view of the MFG Matters website"] },
  "case-study-qhslab.html": { title: "Scroll the healthcare experience", domain: "qhslab.com", desktop: ["assets/projects/fullpage/qhslab-full-desktop.jpg", 2160, 16170, "Full desktop view of the QHS Lab website"], mobile: ["assets/projects/fullpage/qhslab-full-mobile.jpg", 780, 30896, "Full mobile view of the QHS Lab website"] },
  "case-study-fynlance.html": { title: "Scroll from offer to activation", domain: "fynlance.com", desktop: ["assets/projects/fullpage/fynlance-full-desktop.jpg", 2160, 13856, "Full desktop view of the Fynlance website"], mobile: ["assets/projects/fullpage/fynlance-full-mobile.jpg", 780, 17862, "Full mobile view of the Fynlance website"] },
  "case-study-country-club.html": { title: "Scroll the destination experience", domain: "thecountry.club", desktop: ["assets/projects/fullpage/country-club-full-desktop.jpg", 2160, 10325, "Full desktop view of The Country Club sports website"], mobile: ["assets/projects/fullpage/country-club-full-mobile.jpg", 780, 21454, "Full mobile view of The Country Club sports website"] }
};

const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
const reelData = caseReels[currentPage];
const caseMain = document.querySelector(".case-page main");

if (caseMain && reelData) {
  caseMain.id = "main";
  document.querySelector(".case-page .site-nav")?.setAttribute("aria-label", "Case study navigation");
  document.querySelector(".case-page .case-meta")?.setAttribute("aria-label", "Project details");
  if (!document.querySelector(".skip-link")) document.body.insertAdjacentHTML("afterbegin", '<a class="skip-link" href="#main">Skip to content</a>');

  const reel = document.createElement("section");
  reel.className = "site-reel-section section reveal";
  reel.setAttribute("aria-labelledby", "site-reel-title");
  reel.innerHTML = `
    <div class="site-reel-head"><p class="eyebrow">Full-page website capture</p><h2 id="site-reel-title">${reelData.title}</h2><p>Switch between the real desktop and mobile pages, then scroll inside the frame. The case study stays independent.</p></div>
    <div class="site-reel-shell">
      <div class="site-reel-bar"><span class="reel-dots" aria-hidden="true"><i></i><i></i><i></i></span><small>${reelData.domain}</small><div class="reel-mode-switch" role="group" aria-label="Preview size"><button type="button" data-reel-mode="desktop" aria-pressed="true">Desktop</button><button type="button" data-reel-mode="mobile" aria-pressed="false">Mobile</button></div><span class="reel-percentage">0%</span></div>
      <div class="site-reel-viewport" tabindex="0" aria-label="Scrollable website preview for ${reelData.domain}">
        <figure class="reel-full-view" data-reel-view="desktop"><img src="${reelData.desktop[0]}" width="${reelData.desktop[1]}" height="${reelData.desktop[2]}" alt="${reelData.desktop[3]}" decoding="async"></figure>
        <figure class="reel-full-view reel-full-view--mobile" data-reel-view="mobile" hidden><span class="mobile-capture-label">390 px viewport · 2× capture</span><img src="${reelData.mobile[0]}" width="${reelData.mobile[1]}" height="${reelData.mobile[2]}" alt="${reelData.mobile[3]}" loading="lazy" decoding="async"></figure>
      </div>
      <div class="site-reel-controls"><span>Scroll inside the full page</span><div class="reel-progress" aria-hidden="true"><i></i></div><button class="reel-jump" type="button">Next viewport <span aria-hidden="true">↓</span></button></div>
    </div>`;
  document.querySelector(".case-intro")?.after(reel);

  const viewport = reel.querySelector(".site-reel-viewport");
  const progress = reel.querySelector(".reel-progress i");
  const percentage = reel.querySelector(".reel-percentage");
  const jump = reel.querySelector(".reel-jump");
  const modeButtons = reel.querySelectorAll("[data-reel-mode]");
  const reelViews = reel.querySelectorAll("[data-reel-view]");
  const updateReel = () => {
    const max = viewport.scrollHeight - viewport.clientHeight;
    const value = max > 0 ? viewport.scrollTop / max : 0;
    progress.style.transform = `scaleX(${value})`;
    percentage.textContent = `${Math.round(value * 100)}%`;
    jump.innerHTML = value > .92 ? 'Back to top <span aria-hidden="true">↑</span>' : 'Next viewport <span aria-hidden="true">↓</span>';
  };
  modeButtons.forEach(button => button.addEventListener("click", () => {
    const mode = button.dataset.reelMode;
    modeButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    reelViews.forEach(view => { view.hidden = view.dataset.reelView !== mode; });
    viewport.dataset.mode = mode;
    viewport.scrollTop = 0;
    const activeImage = reel.querySelector(`[data-reel-view="${mode}"] img`);
    if (activeImage && !activeImage.complete) activeImage.addEventListener("load", updateReel, { once: true });
    requestAnimationFrame(updateReel);
  }));
  viewport.addEventListener("scroll", updateReel, { passive: true });
  jump.addEventListener("click", () => {
    const max = viewport.scrollHeight - viewport.clientHeight;
    const atEnd = max > 0 && viewport.scrollTop / max > .92;
    viewport.scrollTo({ top: atEnd ? 0 : Math.min(viewport.scrollTop + viewport.clientHeight * .82, max), behavior: "smooth" });
  });
  updateReel();
}

if (caseMain) {
  caseMain.querySelectorAll(":scope > section:not(.case-hero)").forEach((section, index) => {
    section.classList.add("reveal");
    section.style.setProperty("--delay", `${Math.min(index * 35, 140)}ms`);
  });
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: "0px 0px -30px" });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("is-visible"));
}

const header = document.querySelector(".site-header");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
});
siteNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  siteNav.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}));

const cursor = document.querySelector(".cursor-dot");
if (cursor && matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }, { passive: true });
  document.querySelectorAll("[data-cursor]").forEach(element => {
    element.addEventListener("pointerenter", () => cursor.classList.add("is-large"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("is-large"));
  });
}

const form = document.querySelector(".contact-form");
const status = document.querySelector(".form-status");
form?.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  status.textContent = "Your note is ready. The inbox connection will be added before launch.";
  form.reset();
});
