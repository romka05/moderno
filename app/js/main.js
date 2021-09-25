$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  $(".product-slider__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $(".header__btn-menu").on("click", function () {
    $(".header__box").toggleClass("active");
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });

  var mixer = mixitup(".products__inner-box");
});
