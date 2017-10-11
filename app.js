$(function () {
  console.log('booya');

  $(window).scroll((event) => {
    $('.background-image img').css('transform', `translateY(${-(($(document).scrollTop()) / 10)}px)`)
  })
});
