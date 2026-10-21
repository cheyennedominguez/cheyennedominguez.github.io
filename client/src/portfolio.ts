const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
root.classList.add("motion-ready");

for (const year of document.querySelectorAll<HTMLElement>(".current-year")) {
  year.textContent = String(new Date().getFullYear());
}

const moreButton = document.querySelector<HTMLButtonElement>(".mobile-more");
const mobileLinks = document.querySelector<HTMLElement>("#mobile-links");

function setMobileLinksOpen(open: boolean) {
  if (!moreButton || !mobileLinks) return;
  moreButton.setAttribute("aria-expanded", String(open));
  mobileLinks.hidden = !open;
}

moreButton?.addEventListener("click", () => {
  setMobileLinksOpen(moreButton.getAttribute("aria-expanded") !== "true");
});

mobileLinks?.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
  link.addEventListener("click", () => setMobileLinksOpen(false));
});

document.addEventListener("pointerdown", (event) => {
  if (!moreButton || !mobileLinks || mobileLinks.hidden) return;
  const target = event.target;
  if (target instanceof Node && !moreButton.contains(target) && !mobileLinks.contains(target)) {
    setMobileLinksOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMobileLinksOpen(false);
});

const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-revealed"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -55px 0px" },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
}

const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
const navLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>(".rail__nav a[href^='#'], .tabbar a[href^='#']"),
);
const tabBar = document.querySelector<HTMLElement>(".tabbar");
const tabPill = document.querySelector<HTMLElement>(".tabbar__pill");
let activeSection = "top";

function mappedTabSection(sectionId: string) {
  if (sectionId === "services") return "experience";
  if (sectionId === "education") return "about";
  return sectionId;
}

function positionTabPill() {
  if (!tabBar || !tabPill) return;
  const activeId = mappedTabSection(activeSection);
  const activeLink = tabBar.querySelector<HTMLAnchorElement>(`a[href="#${activeId}"]:not(.tabbar__tab--primary)`);
  if (!activeLink) return;
  tabPill.style.width = `${activeLink.offsetWidth}px`;
  tabPill.style.transform = `translateX(${activeLink.offsetLeft - 6}px)`;
}

function setActiveSection(sectionId: string) {
  activeSection = sectionId;
  const tabId = mappedTabSection(sectionId);
  navLinks.forEach((link) => {
    const linkId = link.getAttribute("href")?.slice(1);
    const active = linkId === sectionId || (link.closest(".tabbar") && linkId === tabId);
    if (active) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "location");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });
  positionTabPill();
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target instanceof HTMLElement) setActiveSection(visible.target.id);
    },
    { threshold: [0.08, 0.2, 0.4], rootMargin: "-18% 0px -62% 0px" },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

window.addEventListener("resize", positionTabPill, { passive: true });
window.addEventListener("load", positionTabPill, { once: true });
requestAnimationFrame(positionTabPill);

let previousY = window.scrollY;
let accumulated = 0;
window.addEventListener(
  "scroll",
  () => {
    if (!tabBar) return;
    const currentY = window.scrollY;
    const delta = currentY - previousY;
    previousY = currentY;
    if (Math.abs(delta) < 1) return;
    if (reducedMotion.matches || currentY < 60) {
      delete tabBar.dataset.hidden;
      accumulated = 0;
      return;
    }
    accumulated = Math.sign(delta) === Math.sign(accumulated) ? accumulated + delta : delta;
    if (accumulated > 26) tabBar.dataset.hidden = "";
    if (accumulated < -26) delete tabBar.dataset.hidden;
  },
  { passive: true },
);
