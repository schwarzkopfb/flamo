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
    initParallax('write-to-us', 0.1)

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
        'write-to-us',
        'contact',
        'offer'
    ]
        .forEach(function (item) {
            $('[href="#' + item + '"]').click(function (e) {
                e.preventDefault()
                
                var bodyWidth = $body.width(),
                    correction = bodyWidth > 768 && bodyWidth < 992
                        ? -58
                        : 0

                $body.stop().animate({ scrollTop: $('#' + item).offset().top + correction })
            })
        })

    // CONTACT FORM

    $('#contact-form').submit(function (e) {
        e.preventDefault()

        $.ajax({
            url: 'https://wt-23ab5b12ef02c94babf61d2affacf952-0.run.webtask.io/send-mail',
            type: 'post',
            data: $(this).serialize(),
            success: function() {
                alert('Köszönjük megkeresését, kollégáink hamarosan felveszik Önnel a kapcsolatot!')
                $('#write-to-us').hide()
            }
        })
    })
}

