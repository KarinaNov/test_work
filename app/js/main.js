$(function(){
  
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.agents-slider').slick({
        speed: 300,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2, 
        dots: false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false, 
            }
          },
          {
            breakpoint: 730,
            settings: {
              centerMode: true,
              centerPapping: '30px',
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  

      $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
      });
      
    
});