(function($) {

  // Slideshow
  $('div.wrapper').css('overflow', 'hidden');

  $('div.nav').on('click', function () {
    var dir = $(this).data('dir'),
        dir = (dir == 'next') ? '-=' : '+=',
        slideshow = $('div.slideshow').children('ul'),
        imgWidth = $('img').width(),
        imgNb = slideshow.children('li').length,
        margin = parseInt(slideshow.css('margin-left'));

    if ( margin >= 0 && dir == '+=') {
      slideshow.animate({'margin-left': -imgWidth * (imgNb -1)});
    } else if ( margin < -imgWidth * (imgNb -2) && dir == '-=') {
      slideshow.animate({'margin-left': 0});
    } else {
      slideshow.animate({'margin-left': dir + imgWidth});
    }

  });

  // Auto-reload checkbox
  var autoReloadCheckbox = document.getElementById("checkreload");;
  autoReloadCheckbox.onchange=autoReload;
  function autoReload (checked) {
    console.log(this.getElementsByTagName('input').value);
    setTimeout(function(){
      //window.location.reload(1);
    }, 1000);

  }

  // Creating custom effect slide toggle (exercise)
  $.fn.fadeSlideToggle = function(speed) {
      return $(this).animate({
        'opacity': 'toggle',
        'height': 'toggle'
      }, speed || 2000);
  };

  $('.sidebar').find('li').eq(0).on('click', function(e) {
    e.preventDefault();
    $('span.repositioned').fadeSlideToggle(4000).addClass('chain');
  });
})(jQuery);
