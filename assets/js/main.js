import { initSearch } from './modules/search.js';

// Every module exports an idempotent init that no-ops when its markup is absent,
// so this entry point can call them unconditionally on every page.
const modules = [initSearch];

const boot = () => modules.forEach((init) => init());

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
