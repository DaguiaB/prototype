window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });

  window.addEventListener('scroll', function() {
    var offcanvas = document.querySelector('.offcanvas');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 0) {
      offcanvas.classList.add('offcanvas-scroll');
    } else {
      offcanvas.classList.remove('offcanvas-scroll');
    }
  });
  