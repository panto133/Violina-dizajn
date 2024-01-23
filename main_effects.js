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

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);