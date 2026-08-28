// Inline style rather than a utility class: Tailwind only emits classes it
// finds in the markup, and this one is only ever added at runtime.
export const lockScroll = () => {
  document.documentElement.style.overflow = 'hidden';
};

export const unlockScroll = () => {
  document.documentElement.style.overflow = '';
};
