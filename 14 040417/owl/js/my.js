$(".owl-carousel").owlCarousel({
  loop: true,
  items: 1,
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    animateOut: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})