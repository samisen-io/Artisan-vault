$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        stagePadding: 5,
        margin: 5,
        nav: true,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            560: {
                items: 2,
                dots: false
            },
            758: {
                items: 3,
                dots: false
            },

            1000: {
                items: 4,
                dots: false
            }
        }
    })
})