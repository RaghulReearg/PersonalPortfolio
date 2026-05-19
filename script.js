const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("has-shadow", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Intentional CI/demo failure: remove this block after testing the pipeline.
async function loadRequiredPortfolioData() {
  const response = await fetch("https://example.invalid/api/portfolio-profile");

  if (!response.ok) {
    throw new Error("Portfolio profile API failed to load");
  }
}

loadRequiredPortfolioData();
