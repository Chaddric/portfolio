/* ==========================================================================
   Cedric Mandawe — portfolio interactions
   Theme switch, mobile menu, active link, scroll reveal, contact form
   ========================================================================== */

(function () {
  'use strict';

  var CONTACT_EMAIL = 'cjrmandawe@gmail.com';
  var root = document.documentElement;

  /* ------------------------------------------------------------- theme */
  var themeToggle = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    root.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
  }

  if (themeToggle) {
    setTheme(root.dataset.theme || 'light');

    themeToggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
      try { localStorage.setItem('ced-theme', next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------- mobile menu */
  var sidebar = document.getElementById('sidebar');
  var navToggle = document.querySelector('.nav-toggle');

  if (sidebar && navToggle) {
    var setMenu = function (open) {
      sidebar.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    navToggle.addEventListener('click', function () {
      setMenu(!sidebar.classList.contains('is-open'));
    });

    sidebar.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });

    document.addEventListener('click', function (event) {
      if (!sidebar.contains(event.target)) setMenu(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 980) setMenu(false);
    });
  }

  /* ------------------------------------------------------- active link */
  var current = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* --------------------------------------------------------------- year */
  document.querySelectorAll('#year, .year').forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  /* ------------------------------------------------------------ reveal */
  var revealItems = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  /* -------------------------------------------------------- contact form */
  var form = document.getElementById('contact-form');

  if (form) {
    var status = document.getElementById('form-status');
    var fields = {
      name: form.elements.name,
      email: form.elements.email,
      message: form.elements.message
    };

    var mark = function (field, invalid) {
      field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
    };

    Object.keys(fields).forEach(function (key) {
      fields[key].addEventListener('input', function () {
        mark(fields[key], false);
        if (status) {
          status.textContent = '';
          status.classList.remove('is-error');
        }
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = fields.name.value.trim();
      var email = fields.email.value.trim();
      var message = fields.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

      mark(fields.name, !name);
      mark(fields.email, !emailOk);
      mark(fields.message, !message);

      if (!name) {
        if (status) {
          status.textContent = 'Please add your name so I know who I am replying to.';
          status.classList.add('is-error');
        }
        fields.name.focus();
        return;
      }

      if (!emailOk) {
        if (status) {
          status.textContent = 'That email address does not look right.';
          status.classList.add('is-error');
        }
        fields.email.focus();
        return;
      }

      if (!message) {
        if (status) {
          status.textContent = 'Add a short message before sending.';
          status.classList.add('is-error');
        }
        fields.message.focus();
        return;
      }

      var subject = (form.elements.subject.value || 'Portfolio enquiry') + ' — ' + name;
      var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
      var href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      if (status) {
        status.textContent = 'Opening your email app with the message ready to send…';
        status.classList.remove('is-error');
      }

      window.location.href = href;
    });
  }
})();
