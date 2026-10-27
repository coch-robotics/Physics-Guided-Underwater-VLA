window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', function() {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');

  if (burger && menu) {
    burger.addEventListener('click', function() {
      var isOpen = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.project-video').forEach(function(video) {
    var markReady = function() {
      video.dataset.ready = 'true';
    };

    var markUnavailable = function() {
      video.dataset.ready = 'false';
    };

    video.addEventListener('loadeddata', markReady);
    video.addEventListener('error', markUnavailable);
    video.querySelectorAll('source').forEach(function(source) {
      source.addEventListener('error', markUnavailable);
    });

    if (video.readyState >= 2) {
      markReady();
    }
  });
});
