let category_nav_list = document.querySelector(".category_nav_list")
function Open_Categ_list() {
    category_nav_list.classList.toggle("active")
}



var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });