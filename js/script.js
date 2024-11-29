$(function () {

  /* aos */
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });

  });

  /* 카드 */
  $('#cardWrap .cardBox').click(function () {
    $(this).toggleClass('active');
  });

  /* 클릭 시 섹션 이동 */
  $('.floorInfoBox .floorInfo li a').click(function () {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });

});