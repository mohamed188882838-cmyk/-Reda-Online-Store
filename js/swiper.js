document.querySelectorAll(".slide_product").forEach(function(el){

  new Swiper(el, {
    slidesPerView: 5,
    spaceBetween: 20,

    autoplay:{
      delay:2500,
    },

    navigation:{
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },

    loop:true,
    observer:true,
    observeParents:true
  });

});