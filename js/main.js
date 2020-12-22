$(function() {
    $('.slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-arrow prev-arrow"><img src="images/slider/prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow next-arrow"><img src="images/slider/next.svg" alt=""></button>',
        fade: true,
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__for',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });



});