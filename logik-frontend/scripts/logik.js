function expandNavbarMenu() {
    $(".navibar-mobile").css("margin-top") == "-100px" ? 
    $(".navibar-mobile").animate({"margin-top": "0"}, 500) :
    $(".navibar-mobile").animate({"margin-top": "-100px"}, 500)
}

function handleScroll() {
  $(window).scroll(function() {
    if ($(window).scrollTop() < 100) {
      $('.navibar-desktop').css('box-shadow','none')
      $('.navibar-desktop').css('background', 'transparent')
    }
    else {
      $('.navibar-desktop').css('box-shadow','0px 3px 6px #00000029')
      $('.navibar-desktop').css('background', 'white')
    }
  })
}

$(document).ready(function() {
  handleScroll()
});
