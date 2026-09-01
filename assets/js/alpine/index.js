import Alpine from 'alpinejs';
import * as components from './components/index.js';
import * as stores from './stores/index.js';

export function AlpineInit() {

    for (const [name, store] of Object.entries(stores)) {
        Alpine.store(name, store);
    }

    for (const [name, component] of Object.entries(components)) {
        Alpine.data(name, component);
    }

    Alpine.start();
}
