$(function () {

  /* aos */
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });

  });

  /* 스크롤 
  $(window).scroll(function () {

    var scrollPosition = $(this).scrollTop() + $(this).height() / 2;

    $('#wellnessWrap').each(function () {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

  });
*/

});