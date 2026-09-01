const RESET_DELAY = 1000;

export function copyLink({ idle, done, error, url }) {
    return {
        label: idle,
        state: 'idle',
        timer: null,

        async copy() {
            try {
                if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
                await navigator.clipboard.writeText(new URL(url, window.location.href).href);
                this.label = done;
                this.state = 'copied';
            } catch {
                this.label = error;
                this.state = 'error';
            }

            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.label = idle;
                this.state = 'idle';
            }, RESET_DELAY);
        },

        // Swup swaps the article out from under us; drop a pending reset with it.
        destroy() {
            clearTimeout(this.timer);
        },
    };
}
