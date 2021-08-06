$(function () {
  // HamburgerMenu
  $('#menuBtn').on('click', function () {
    $('body').toggleClass('active')
    return false
  })

  // Scroll
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('#gotopBtn').stop().animate({ bottom: '30px' })
    } else {
      $('#gotopBtn').stop().animate({ bottom: '-80px' })
    }
  }).scroll()

  // Anchor
  $('.anchor').on('click', function () {
    var goto = $(this).data('href')
    if ($(goto).offset() != undefined) {
        $('html, body').removeClass('active').stop().animate({
            scrollTop: $(goto).offset().top - $('header').outerHeight(true)
        }, 800)
    }
    return false
})

  // GoTop
  $('#gotopBtn').on('click', function () {
    $('html, body').animate({ scrollTop: 0 })
    return false
  })
})