document.querySelectorAll('.experience-header').forEach(header => {
  header.addEventListener('click', () => {
    const block = header.parentElement;
    const expanded = block.classList.contains('expanded');

    // Collapse all
    document.querySelectorAll('.experience-block').forEach(b => {
      b.classList.remove('expanded');
      b.querySelector('.experience-header').setAttribute('aria-expanded', 'false');
    });

    // Expand current one if it wasn't already
    if (!expanded) {
      block.classList.add('expanded');
      header.setAttribute('aria-expanded', 'true');
    }
  });
});
