const RESET_DELAY = 1000;

export function copyLink({ idle, done, error, url }) {
    return {

        label: idle,
        copied: false,
        timer: null,

        async copy() {
            try {
                if (!navigator.clipboard?.writeText)
                    throw new Error("clipboard unavailable");
                await navigator.clipboard.writeText(
                    new URL(url, window.location.href).href,
                );
                this.label = done;
                this.copied = true;
            } catch {
                this.label = error;
                this.copied = false;
            }

            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.label = idle;
                this.copied = false;
            }, RESET_DELAY);
        },

        // Swup swaps the article out from under us; drop a pending reset with it.
        destroy() {
            clearTimeout(this.timer);
        },
    };
}
