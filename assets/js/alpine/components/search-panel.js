export function searchPanel() {
    return {
        lastFocused: null,

        init() {
            this.$watch("$store.search.isOpen", (isOpen) => (isOpen ? this.onOpen() : this.onClose()));
        },

        destroy() {
            document.documentElement.style.overflow = "";
        },

        get isOpen() {
            return this.$store.search.isOpen;
        },

        close() {
            this.$store.search.close();
        },

        closeOnLink(event) {
            if (event.target.closest("a[href]")) this.close();
        },

        onOpen() {
            document.documentElement.style.overflow = "hidden";
            this.lastFocused = document.activeElement;

            const input = this.$refs.input;
            if (input) customElements.whenDefined("pagefind-input").then(() => input.focus());
        },

        onClose() {
            document.documentElement.style.overflow = "";
            if (this.lastFocused instanceof HTMLElement) this.lastFocused.focus();
        },

        onKeydown(event) {
            // `closest?.()` — a window-targeted keydown has no closest().
            if (event.key === "Escape" && this.isOpen && !event.target.closest?.("pagefind-input")) {
                this.close();
            }

            if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                this.$store.search.toggle();
            }
        },
    };
}
