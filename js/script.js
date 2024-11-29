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

  //윈도우 OS 폰트 설정
  function windowOS() {
    let isWindows = navigator.platform.indexOf('Win') > -1;
    if (isWindows) {
      $('body').addClass('windowOS');
    }
    $('.windowOS *').each(function () {
      var fontWeight = $(this).css('font-weight');
      if (fontWeight === '700') {
        $(this).css({
          'font-weight': '500',
          'transform': 'rotate(0.03deg)'
        });
      }
      if (fontWeight === '500') {
        $(this).css({
          'font-weight': '400',
          'transform': 'rotate(0.03deg)'
        });
      }
    });
  }
  windowOS()

});