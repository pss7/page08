$(function () {

  /* aos */
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });

  });

  $('#cardWrap .cardBox').click(function() {
    $(this).toggleClass('active'); // Toggle the 'active' class on click
});


});