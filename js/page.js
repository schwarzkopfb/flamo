// hide preloader
$(window).load(function () {
    $('.preloader').fadeOut(1000, initPage)
})

function initPage() {
    // ------- WOW ANIMATED ------ //
    window.wow = new WOW({ mobile: false })
    wow.init()

    // ------- JQUERY PARALLAX ---- //
    function initParallax(href, duration) {
        $('#' + href).parallax("100%", duration)
    }

    initParallax('home', 0.1)
    initParallax('gallery', 0.3)
    initParallax('menu', 0.2)
    initParallax('team', 0.3)
    initParallax('contact', 0.1)

    // HIDE MOBILE MENU AFTER CLIKING ON A LINK
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide')
    })

    // NIVO LIGHTBOX
    $('#gallery a').nivoLightbox({
        effect: 'fadeScale'
    });

    var $body = $('html, body');

    // INIT MENU
    [
        'home',
        'gallery',
        'menu',
        'team',
        'contact'
    ]
        .forEach(function (item) {
            $('[href="#' + item + '"]').click(function (e) {
                e.preventDefault()

                $body.stop().animate({ scrollTop: $('#' + item).offset().top })
            })
        })
}

