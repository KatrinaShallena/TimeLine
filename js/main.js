$(document).ready(function () {
"use strict";

    var mySwiper = new Swiper('.swiper-container .swiper-box', {
        speed: 500,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        slidesPerView: 4,
        loop: true
    });

    $( "#accordion" ).accordion();

});
