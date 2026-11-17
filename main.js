// Prosta nawigacja zakładkami oparta o hash w URL (#o-mnie, #projekty, #kontakt).
const panels = [...document.querySelectorAll('.panel')];
const tabs = [...document.querySelectorAll('.tabs a')];

function show() {
  const id = location.hash.slice(1);
  const active = panels.find(p => p.id === id) ?? panels[0];
  panels.forEach(p => (p.hidden = p !== active));
  tabs.forEach(t =>
    t.dataset.tab === active.id ? t.setAttribute('aria-current', 'page') : t.removeAttribute('aria-current'));
  window.scrollTo({ top: 0 });
}

window.addEventListener('hashchange', show);
show();
document.getElementById('year').textContent = new Date().getFullYear();
