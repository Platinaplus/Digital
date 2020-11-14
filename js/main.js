$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next"></button>',
        prevArrow:'<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows:false
            }
          },
        ]
      });

      $('.citate__items').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false

      });

      $('.menu__btn, .menu a').on('click', ()=>{
        $('.menu').toggleClass('active')
        $('.menu__btn').toggleClass('close')
      });

      $(".menu a, .footer a").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
      });
});