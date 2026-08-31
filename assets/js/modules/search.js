import "@pagefind/component-ui";

import { lockScroll, unlockScroll } from "../lib/scroll-lock.js";

export function initSearch() {

  // Try find pagefind elements
  const panel = document.querySelector("[data-search]");
  const input = panel?.querySelector("pagefind-input");
  const triggers = document.querySelectorAll("[data-search-open]");
  const isOpen = () => panel.hasAttribute("data-open");
  let lastFocused = null;

  // If no pagefind elements found, do nothing
  if ([panel, triggers, input].some(e => e === null)) return;

  const open = () => {
    lockScroll();
    lastFocused = document.activeElement;
    panel.setAttribute("data-open", "");
    panel.setAttribute("aria-hidden", "false");
    triggers.forEach((t) => t.setAttribute("aria-expanded", "true"));
    // Make sure the custom element has upgraded before focusing
    if (input) customElements.whenDefined("pagefind-input").then(() => input.focus());
  };

  const close = () => {
    unlockScroll();
    panel.removeAttribute("data-open");
    panel.setAttribute("aria-hidden", "true");
    triggers.forEach((t) => t.setAttribute("aria-expanded", "false"));
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  const toggle = () => isOpen() ? close() : open();


  // Add event listeners
  // ================================================================================================

  triggers.forEach((t) => t.addEventListener("click", toggle));
  panel.querySelectorAll("[data-search-close]").forEach((el) => el.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    // pagefind-input claims Escape to clear the query, so close only from outside it.
    if (e.key === "Escape" && isOpen() && !input?.contains(e.target)) close();
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      toggle();
    }
  });

  // Following a result link should not leave the panel hanging over the page.
  panel.addEventListener("click", (e) => {
    if (e.target.closest("a[href]")) close();
  });
}
