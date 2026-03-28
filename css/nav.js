document.addEventListener('DOMContentLoaded', function () {

  /* ── Mobile nav toggle ─────────────────────────── */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.getElementById('site-nav') || document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Auto-highlight active nav link ────────────── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function(link) {
    var href = link.getAttribute('href');
    var linkPage = href ? href.split('/').pop() : '';
    if (
      linkPage === currentPage ||
      (currentPage === '' && (href === '/' || href.indexOf('index.html') !== -1 || href === 'https://fixthelogic.in/'))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* ── Unified search handler ─────────────────────── */
  function doSearch(query) {
    if (!query || !query.trim()) return;
    window.location.href = 'https://www.google.com/search?q=site%3Afixthelogic.in+' + encodeURIComponent(query.trim());
  }

  // Hero search
  var heroForm = document.querySelector('.hero-search');
  if (heroForm) {
    heroForm.querySelector('button').addEventListener('click', function () {
      doSearch(heroForm.querySelector('input').value);
    });
    heroForm.querySelector('input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') doSearch(this.value);
    });
  }

  // Sidebar / widget search forms
  document.querySelectorAll('.search-form').forEach(function(form) {
    form.querySelector('button').addEventListener('click', function () {
      doSearch(form.querySelector('input').value);
    });
    form.querySelector('input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') doSearch(this.value);
    });
  });

  /* ── FAQ accordion ──────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var isOpen = this.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-question').forEach(function(b) {
        b.setAttribute('aria-expanded', 'false');
        var ans = document.getElementById(b.getAttribute('aria-controls'));
        if (ans) ans.classList.remove('open');
      });
      // Open clicked if it was closed
      if (!isOpen) {
        this.setAttribute('aria-expanded', 'true');
        var answer = document.getElementById(this.getAttribute('aria-controls'));
        if (answer) answer.classList.add('open');
      }
    });
  });

  /* ── Cookie Consent Banner ──────────────────────── */
  if (!localStorage.getItem('ftl_cookie_consent')) {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = '<div class="cookie-inner"><p>We use cookies to analyse traffic and serve personalised ads. By continuing to use this site, you agree to our use of cookies. <a href="/cookie-policy.html">Cookie Policy</a> &middot; <a href="/privacy-policy.html">Privacy Policy</a></p><div class="cookie-btns"><button id="cookie-accept" class="cookie-btn cookie-btn-accept">Accept All</button><button id="cookie-decline" class="cookie-btn cookie-btn-decline">Reject Non-Essential</button></div></div>';
    document.body.appendChild(banner);
    setTimeout(function () { banner.classList.add('cookie-visible'); }, 300);
    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem('ftl_cookie_consent', 'accepted');
      banner.classList.remove('cookie-visible');
      setTimeout(function () { banner.remove(); }, 400);
    });
    document.getElementById('cookie-decline').addEventListener('click', function () {
      localStorage.setItem('ftl_cookie_consent', 'declined');
      banner.classList.remove('cookie-visible');
      setTimeout(function () { banner.remove(); }, 400);
    });
  }

});
