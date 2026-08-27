import '@pagefind/component-ui';

const panel = document.querySelector('[data-search]');

if (panel) {
  const input = panel.querySelector('pagefind-input');
  const triggers = document.querySelectorAll('[data-search-open]');

  const isOpen = () => panel.hasAttribute('data-open');
  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    panel.setAttribute('data-open', '');
    panel.setAttribute('aria-hidden', 'false');
    // Inline style rather than a utility class: Tailwind only emits classes it
    // finds in the markup, and this one is only ever added at runtime.
    document.documentElement.style.overflow = 'hidden';
    triggers.forEach((t) => t.setAttribute('aria-expanded', 'true'));
    // The custom element may not have upgraded yet on a cold first open.
    if (input) customElements.whenDefined('pagefind-input').then(() => input.focus());
  };

  const close = () => {
    panel.removeAttribute('data-open');
    panel.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    triggers.forEach((t) => t.setAttribute('aria-expanded', 'false'));
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  triggers.forEach((t) => t.addEventListener('click', () => (isOpen() ? close() : open())));
  panel.querySelectorAll('[data-search-close]').forEach((el) => el.addEventListener('click', close));

  document.addEventListener('keydown', (e) => {
    // pagefind-input claims Escape to clear the query, so close only from outside it.
    if (e.key === 'Escape' && isOpen() && !input?.contains(e.target)) close();
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      isOpen() ? close() : open();
    }
  });

  // Following a result link should not leave the panel hanging over the page.
  panel.addEventListener('click', (e) => {
    if (e.target.closest('a[href]')) close();
  });
}
