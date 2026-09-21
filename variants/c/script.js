/* covalent — variant C "Studio"
   Reveals, accordions, header state. No dependencies, no tracking. */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- header: hairline once the page moves ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- reveal on scroll ---------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function showAll() {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (!revealables.length) {
    /* nothing to do */
  } else if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    revealables.forEach(function (el, i) {
      /* anything already in view on load reveals immediately, in document order */
      var box = el.getBoundingClientRect();
      if (box.top < window.innerHeight * 0.9) {
        window.setTimeout(function () { el.classList.add('is-in'); }, Math.min(i, 6) * 70);
      } else {
        observer.observe(el);
      }
    });
  }

  /* ---------- accordions ---------- */
  /* Markup contract:
     <div class="acc__item">
       <button class="acc__btn" aria-expanded="false" aria-controls="ID">…</button>
       <div class="acc__panel" id="ID" hidden><div><div class="acc__body">…</div></div></div>
     </div>                                                                    */

  function panelOf(btn) {
    var id = btn.getAttribute('aria-controls');
    return id ? document.getElementById(id) : null;
  }

  function open(btn) {
    var panel = panelOf(btn);
    var item = btn.closest('.acc__item');
    if (!panel || !item) return;
    panel.hidden = false;
    item.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function close(btn) {
    var panel = panelOf(btn);
    var item = btn.closest('.acc__item');
    if (!panel || !item) return;
    item.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    var finish = function () {
      if (!item.classList.contains('is-open')) panel.hidden = true;
      panel.removeEventListener('transitionend', finish);
    };
    if (reduceMotion.matches) {
      panel.hidden = true;
    } else {
      panel.addEventListener('transitionend', finish);
      /* safety net if transitionend never fires */
      window.setTimeout(finish, 520);
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll('.acc__btn'), function (btn) {
    btn.addEventListener('click', function () {
      if (btn.getAttribute('aria-expanded') === 'true') {
        close(btn);
      } else {
        open(btn);
      }
    });
  });

  /* open the item a #hash points at, so deep links land on visible content */
  if (window.location.hash) {
    var target = document.getElementById(window.location.hash.slice(1));
    var host = target && target.closest ? target.closest('.acc__item') : null;
    if (host) {
      var b = host.querySelector('.acc__btn');
      if (b) open(b);
    }
  }
})();
