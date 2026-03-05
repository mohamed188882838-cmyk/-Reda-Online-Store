var swiper = new Swiper(".slide-swp", {
      pagination: {
        el: ".swiper-pagination",
        dynamicaBullests: true,
        clickable:true,
      },
      autoplay:{
        delay:2500,
      }
      ,loop:true
    });

    var swiper = new Swiper(".slide_product", {
        slidesPerView: 5,
        spaceBetween: 20,
      
      autoplay:{
        delay:2500,
      },
      navigation:{
        nextE1:".swiper_button_next",
        prevE1:".swiper_button_prev",
      },
      loop:true
    });

