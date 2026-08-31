export function initCopyLink() {
  const buttons = document.querySelectorAll('[data-copy-link]');
  if (!buttons.length) return;

  // navigator.clipboard needs a secure context, which covers HTTPS and localhost;
  // a plain-HTTP origin lands in the error state rather than a silent no-op.
  const write = async (text) => {
    if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(text);
  };

  buttons.forEach((button) => {
    const label = button.querySelector('[data-copy-link-label]');
    const idle = label?.textContent ?? '';
    let reset = null;

    button.addEventListener('click', async () => {
      // Permalink is relative when the site has no absolute baseURL, so resolve
      // it against the current page to always copy a shareable link.
      const url = new URL(button.dataset.copyLink || '', window.location.href).href;
      let state = 'copied';
      try {
        await write(url);
      } catch {
        state = 'error';
      }

      button.dataset.copyState = state;
      if (label) label.textContent = button.dataset[state === 'copied' ? 'copiedLabel' : 'errorLabel'] || idle;

      clearTimeout(reset);
      reset = setTimeout(() => {
        delete button.dataset.copyState;
        if (label) label.textContent = idle;
      }, 1000);
    });
  });
}
