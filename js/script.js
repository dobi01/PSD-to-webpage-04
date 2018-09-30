window.onload = function() {
  document.body.className = 'body';

  $('.hero__button--light').click(() => {
    $('html, body').animate({
        scrollTop: $('#what-we-do').offset().top
    }, 1000);
  });

  var windowMaxWidth990px = window.matchMedia("(max-width: 990px)"),
      navUl = $('.nav__menu'),
      menuButton = $('.nav__hamburger'),
      navLinks = navUl.find('.nav__link'),
      main = $('main, footer');

  function toggleMenu(mediaQuery) {
    if (mediaQuery.matches) { 

      navUl.css('display', 'none');

      menuButton.click(function() { 
        if (navUl.is(':visible')) {
          navUl.fadeOut('slow');
          main.fadeIn('slow');
        } else {
          navUl.css('display', 'flex').fadeIn('slow');
          main.fadeOut('fast');
        }
      });

      navLinks.click(function() {   
        navUl.fadeOut('slow');
        main.fadeIn('slow');
      });

    } else {
      navUl.css('display', 'inline-block');
      navLinks.off('click');
      menuButton.off('click');
    }
  }

  windowMaxWidth990px.addListener(toggleMenu(windowMaxWidth990px));

  $(window).on('resize', function() {
    toggleMenu(windowMaxWidth990px);
  });
};

