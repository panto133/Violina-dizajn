$window = $(window);

$window.scroll(function () {
  $scroll_position = $window.scrollTop();
  if ($scroll_position > 10) { // if body is scrolled down by 300 pixels
    $('.header-navbar').addClass('background');
    $('.header-navbar').removeClass('fade-bck');
    $('.logo-image').addClass('visible-logo');
    // to get rid of jerk
    header_height = $('.header-navbar').innerHeight();
  } else {
    $('body').css('padding-top', '0');
    $('.header-navbar').removeClass('background');
    $('.header-navbar').addClass('fade-bck');
    $('.logo-image').removeClass('visible-logo');
  }
});
function RemoveContact() {
  var contactHolder = document.getElementsByClassName("contact-holder")[0];
  contactHolder.classList.add("contact-holder-after-transition");
}
function ContactHover() {
  var contactHolder = document.getElementsByClassName("contact-holder")[0];
  contactHolder.classList.add("contact-holder-pseudo");
  setTimeout(RemoveContact, 1000);
}
