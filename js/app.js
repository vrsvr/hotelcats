$(function () {


  let header = $("#header");
  let introH = $("#intro").innerHeight(),
  scrollOffset = $(window).scrollTop();
  let nav = $("#nav");

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
      scrollTop: elementOffset - 30
    }, 600)
  });

  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    dots: true,
    arrows: true
  });

  let sliderr = $("#roomsSlider")

  sliderr.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true
  });

});
