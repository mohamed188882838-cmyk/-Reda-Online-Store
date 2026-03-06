 fetch('products.json')
 .then (response => response.json())
 .then(data => {
    console.log(data);

    const swiper_items_sale = document.getElementById("swiper_items_sale")

    const swiper_elctronics = document.getElementById("swiper_elctronics")
    const swiper_appliances = document.getElementById("swiper_appliances")
    const swiper_mobiles = document.getElementById("swiper_mobiles")

   data.forEach(product => {
    if(product.old_price){
     const percent_disc =Math.floor((product.old_price - product.price) / product.old_price * 100 )






        swiper_items_sale.innerHTML += `  <div class="swiper-slide product">
          <span class="sale_preseny">%${percent_disc}</span>
          <div class="img_product">
            <a href="#"><img src="${product.img}" alt=""></a>
          </div>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="name_product"><a href="#">${product.name}</a></p>
          <div class="price">
            <p><span>$${product.price}</span></p>
            <p class="old_price">$${product.old_price}</p>

          </div>
          <div class="icons">
            <span class="btn_add_cart">
              <i class="fa-solid fa-cart-shopping"></i>add to cart
            </span>
            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
          </div>

        </div>
        
        
        
        
        
        
        `


    }

   })

data.forEach(product => {
  if(product.catetory == "electronics"){

  const old_price_pargraph = product.old_price ?`<p class="old_price">$${product.old_price}</p>` : "";



  const percent_disc_div= product.old_price ?`<span class="sale_preseny">%${Math.floor((product.old_price - product.price) / product.old_price * 100 )}</span>` : "";



    swiper_elctronics.innerHTML += `  <div class="swiper-slide product">




     ${percent_disc_div}



          
          <div class="img_product">
            <a href="#"><img src="${product.img}" alt=""></a>
          </div>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="name_product"><a href="#">${product.name}</a></p>
          <div class="price">
            <p><span>$${product.price}</span></p>
            ${old_price_pargraph}

          </div>
          <div class="icons">
            <span class="btn_add_cart">
              <i class="fa-solid fa-cart-shopping"></i>add to cart
            </span>
            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
          </div>

        </div>
        
        
        
        
        
        
        `
  
 
  }

})




data.forEach(product => {
  if(product.catetory == "appliances"){

  const old_price_pargraph = product.old_price ?`<p class="old_price">$${product.old_price}</p>` : "";



  const percent_disc_div= product.old_price ?`<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100 )}</span>` : "";



    swiper_appliances.innerHTML += `  <div class="swiper-slide product">




     ${percent_disc_div}



          
          <div class="img_product">
            <a href="#"><img src="${product.img}" alt=""></a>
          </div>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="name_product"><a href="#">${product.name}</a></p>
          <div class="price">
            <p><span>$${product.price}</span></p>
            ${old_price_pargraph}

          </div>
          <div class="icons">
            <span class="btn_add_cart">
              <i class="fa-solid fa-cart-shopping"></i>add to cart
            </span>
            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
          </div>

        </div>
        
        
        
        
        
        
        `
  
 
  }

})


 data.forEach(product => {
  if(product.catetory == "mobiles"){

  const old_price_pargraph = product.old_price ?`<p class="old_price">$${product.old_price}</p>` : "";



  const percent_disc_div= product.old_price ?`<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100 )}</span>` : "";



    const swiper_mobiles = document.getElementById("swiper_mobiles")
    .innerHTML += `  <div class="swiper-slide product">




     ${percent_disc_div}



          
          <div class="img_product">
            <a href="#"><img src="${product.img}" alt=""></a>
          </div>
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="name_product"><a href="#">${product.name}</a></p>
          <div class="price">
            <p><span>$${product.price}</span></p>
            ${old_price_pargraph}

          </div>
          <div class="icons">
            <span class="btn_add_cart">
              <i class="fa-solid fa-cart-shopping"></i>add to cart
            </span>
            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
          </div>

        </div>
        
        
        
        
        
        
        `
  
 
  }

})

 })

 