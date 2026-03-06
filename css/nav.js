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
