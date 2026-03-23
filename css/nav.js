document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
});

// FAQ accordion
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var isOpen = this.getAttribute('aria-expanded') === 'true';
      // close all
      document.querySelectorAll('.faq-question').forEach(function(b) {
        b.setAttribute('aria-expanded', 'false');
        var ans = document.getElementById(b.getAttribute('aria-controls'));
        if (ans) ans.classList.remove('open');
      });
      // open clicked if it was closed
      if (!isOpen) {
        this.setAttribute('aria-expanded', 'true');
        var answer = document.getElementById(this.getAttribute('aria-controls'));
        if (answer) answer.classList.add('open');
      }
    });
  });
});

// Cookie Consent Banner
document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('ftl_cookie_consent')) {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = '<div class="cookie-inner"><p>&#x1F36A; We use <strong>essential, analytics (Google Analytics)</strong> and <strong>advertising cookies</strong> to improve your experience and serve relevant ads. See our <a href="/cookie-policy.html">Cookie Policy</a> and <a href="/privacy-policy.html">Privacy Policy</a> for details.</p><div class="cookie-btns"><button id="cookie-accept" class="cookie-btn cookie-btn-accept">&#10003;&nbsp; Accept All Cookies</button><button id="cookie-decline" class="cookie-btn cookie-btn-decline">Essential Only</button></div></div>';
    document.body.appendChild(banner);
    setTimeout(function(){ banner.classList.add('cookie-visible'); }, 300);
    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem('ftl_cookie_consent', 'accepted');
      banner.classList.remove('cookie-visible');
      setTimeout(function(){ banner.remove(); }, 400);
    });
    document.getElementById('cookie-decline').addEventListener('click', function () {
      localStorage.setItem('ftl_cookie_consent', 'declined');
      banner.classList.remove('cookie-visible');
      setTimeout(function(){ banner.remove(); }, 400);
    });
  }
});
