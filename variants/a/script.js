/* covalent — variant A: overlay menu, live clock, scroll reveals. */
(function () {
  'use strict';

  /* ---- full-screen menu ---- */
  var open = document.getElementById('menu-open');
  var overlay = document.getElementById('menu');
  var close = document.getElementById('menu-close');
  var lastFocus = null;

  function openMenu() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    requestAnimationFrame(function () { overlay.classList.add('open'); });
    open.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    var first = overlay.querySelector('a, button');
    if (first) first.focus();
  }

  function closeMenu() {
    overlay.classList.remove('open');
    open.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    var done = function () { overlay.hidden = true; };
    window.setTimeout(done, 220);
    if (lastFocus) lastFocus.focus();
  }

  if (open && overlay && close) {
    open.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    overlay.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !overlay.hidden) closeMenu();
    });
  }

  /* ---- live local clock ---- */
  var clock = document.getElementById('clock');
  var tz = document.getElementById('tz');
  if (clock) {
    var tick = function () {
      var now = new Date();
      clock.textContent = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      if (tz) {
        var zone = '';
        try {
          zone = (new Intl.DateTimeFormat([], { timeZoneName: 'short' })
            .formatToParts(now).find(function (p) { return p.type === 'timeZoneName'; }) || {}).value || '';
        } catch (err) { zone = ''; }
        tz.textContent = zone;
      }
    };
    tick();
    window.setInterval(tick, 1000);
  }

  /* ---- scroll reveals ---- */
  var items = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        window.setTimeout(function () { el.classList.add('in'); }, index * 60);
        observer.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(items, function (el) { observer.observe(el); });
  }
}());
