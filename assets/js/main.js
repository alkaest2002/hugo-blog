import Alpine from 'alpinejs';
import Swup from 'swup';

Alpine.store('search', {
    searchPanelOpen: false,
    lastFocusedElement: null,
});

Alpine.start();

// `.transition-fade` is the only transition swup should wait on; the default
// `[class*="transition-"]` selector also matches Tailwind's transition-* utilities.
new Swup({ animationSelector: '.transition-fade' });
