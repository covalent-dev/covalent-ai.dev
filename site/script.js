/* covalent — variant B, "Editorial"
   Two jobs only: staggered reveal on scroll, and fitting the oversized footer
   wordmark to the content column. No dependencies, no third-party requests. */

(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------------- reveals */

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  function showAll() {
    for (var i = 0; i < items.length; i++) items[i].classList.add('is-in');
  }

  function stagger() {
    // Within one group (same parent), reveals step by 70ms, capped at four steps.
    var groups = new Map();
    items.forEach(function (el) {
      var parent = el.parentNode;
      var n = groups.get(parent) || 0;
      groups.set(parent, n + 1);
      if (!el.hasAttribute('data-delay')) {
        el.style.setProperty('--rv-d', Math.min(n, 4) * 70 + 'ms');
      }
    });
  }

  if (!('IntersectionObserver' in window) || reduce.matches) {
    showAll();
  } else {
    stagger();
    requestAnimationFrame(function () {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

      items.forEach(function (el) { io.observe(el); });
    });

    // If the visitor switches reduced-motion on mid-session, stop hiding things.
    var onChange = function () { if (reduce.matches) showAll(); };
    if (reduce.addEventListener) reduce.addEventListener('change', onChange);
    else if (reduce.addListener) reduce.addListener(onChange);
  }

  /* ------------------------------------------------------- footer wordmark */

  var marks = Array.prototype.slice.call(document.querySelectorAll('.wm'));

  function fit(el) {
    var inner = el.firstElementChild;
    if (!inner) return;
    var box = el.clientWidth;
    if (!box) return;
    el.style.fontSize = '100px';
    var w = inner.getBoundingClientRect().width;
    if (!w) return;
    // 6px of slack absorbs the trailing negative letter-space and subpixel rounding.
    el.style.fontSize = (100 * (box - 6) / w).toFixed(2) + 'px';
  }

  function fitAll() {
    for (var i = 0; i < marks.length; i++) fit(marks[i]);
  }

  if (marks.length) {
    fitAll();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitAll).catch(function () {});
    }
    window.addEventListener('load', fitAll);

    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(fitAll, 120);
    });
  }
})();
