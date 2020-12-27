$(function() {
    $('.slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<div class="prev-arrow"><img src="images/slider/prev.svg" alt=""></div>',
        nextArrow: '<div class="next-arrow"><img src="images/slider/next.svg" alt=""></div>',
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 940,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.menu__btn').click(function() {
        $('.header__menu ul').slideToggle();
    });

});

// prevArrow: '<span type="button" class="slick-arrow prev-arrow"><img src="images/slider/prev.svg" alt=""></span>',
// nextArrow: '<span type="button" class="slick-arrow next-arrow"><img src="images/slider/next.svg" alt=""></span>',