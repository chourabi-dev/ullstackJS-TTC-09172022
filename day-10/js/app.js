/**
 *  <div class="col-md-4">
                                        <div class="card w-100"  >
                                            <img src="..." class="card-img-top" alt="...">
                                            <div class="card-body">
                                              <h5 class="card-title">Card title</h5>
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                              <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                          </div>
                                          
                                    </div> 
 
                                    <div class="col-md-12">
                                        <div class="card">
                                            <div class="card-body ligne-product-details">
                                                <div class="img">
                                                    <img src="" class="w-100" alt="">
                                                </div>
                                                <div class="details">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
 */

var productsList = [
    { id:1 , title:"Iphone 14", price:5800 , photoURL:"https://tdiscount.tn/8-large_default/apple-iphone-14-black.webp" },
    { id:2 , title:"Sony playstation 2", price:250 , photoURL:"https://upload.wikimedia.org/wikipedia/commons/1/1c/PS2-Versions.jpg" },
    { id:3 , title:"Lg smart tv", price:2300 , photoURL:"https://m.media-amazon.com/images/I/71IBre-QupL._SL1500_.jpg" },
    { id:4 , title:"Samsung s21", price:2800 , photoURL:"https://www.tunisianet.com.tn/188886-large/telephone-portable-samsung-galaxy-s21-5g-gris.jpg" },
    
];

var display = 0;

var productsListElement = document.getElementById("productsListElement");


document.getElementById("list-btn").addEventListener("click",function(){
    this.className="btn btn-primary";
    document.getElementById("grid-btn").className="btn";
    display = 1;
    initProductListDisplay();

})

document.getElementById("grid-btn").addEventListener("click",function(){
    this.className="btn btn-primary";
    document.getElementById("list-btn").className="btn";
    display = 0;
    initProductListDisplay();
})



function initProductListDisplay(){
    let blocHTML = '';

    productsList.map( (p)=>{
        if (display == 0) {
            
            blocHTML = blocHTML + `<div class="col-md-4">
            <div class="card w-100"  >
                <img src="${p.photoURL}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <p class="card-text">${p.price}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              
        </div> `;


        } else {
            blocHTML = blocHTML + `<div class="col-md-12">
            <div class="card">
                <div class="card-body ligne-product-details">
                    <div class="img">
                    <img src="${p.photoURL}" class="card-img-top w-100" alt="...">
                    </div>
                    <div class="details">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>`;
        }
    } )


    productsListElement.innerHTML = blocHTML;
}


// first call
initProductListDisplay();
