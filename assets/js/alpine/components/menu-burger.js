export function menuBurger() {
    return {
        close() {
            this.$root.open = false;
        },

        closeOnLink(event) {
            if (event.target.closest('a')) this.close();
        },
    };
}
