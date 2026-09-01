import Swup from 'swup';

export function SwupInit() {
    // `.transition-fade` is the only transition swup should wait on; the default
    // `[class*="transition-"]` selector also matches Tailwind's transition-* utilities.
    return new Swup({ animationSelector: '.transition-fade' });
}
