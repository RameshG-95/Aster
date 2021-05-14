var owl = $('.testimonials .owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2.3
        }
    }
})

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
