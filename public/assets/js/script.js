// Menu Toggle For AppHeader

$('.menu-toggle').click(function() {
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
});

// Slider HomePage
// let current = 0;
// var slides = document.getElementsByClassName("slide");
// $('.js-arrow-right').click(() => {
//     current = current < slides.length - 1 ? current + 1 : 0;
//     for (var i = 0; i < slides.length; i++) {
//         if (i != current) {
//             slides[i].style.opacity = "0";
//         }
//     }
//     slides[current].style.opacity = "1";
//     console.log("clicked", current);

// });
// $('.js-arrow-left').click(() => {
//     current = current > 0 ? current - 1 : slides.length - 1;
//     for (var i = 0; i < slides.length; i++) {
//         if (i != current) {
//             slides[i].style.opacity = "0";
//         }
//     }
//     slides[current].style.opacity = "1";
//     console.log("clicked", current);
// })