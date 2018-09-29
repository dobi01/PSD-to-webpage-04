window.onload = function() {
  document.body.className = 'body';

  $('.hero__button--light').click(() => {
    $('html, body').animate({
        scrollTop: $('#what-we-do').offset().top
    }, 1000);
  });

  var windowMaxWidth1200px = window.matchMedia("(max-width: 1200px)"),
      navUl = $('.nav__menu'),
      menuButton = $('.nav__hamburger'),
      navLinks = navUl.find('.nav__link'),
      main = $('main, footer');

  function toggleMenu(mediaQuery) {
    if (mediaQuery.matches) { 

      navUl.addClass('hidden'); 

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

  windowMaxWidth1200px.addListener(toggleMenu(windowMaxWidth1200px));

};

