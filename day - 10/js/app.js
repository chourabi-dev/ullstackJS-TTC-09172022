 
var productsList = [
    { id:1 , category:1, title:"Iphone 14", price:5800 , photoURL:"https://tdiscount.tn/8-large_default/apple-iphone-14-black.webp" },
    { id:2 , category:2, title:"Sony playstation 2", price:250 , photoURL:"https://upload.wikimedia.org/wikipedia/commons/1/1c/PS2-Versions.jpg" },
    { id:3 , category:3, title:"Lg smart tv", price:2300 , photoURL:"https://m.media-amazon.com/images/I/71IBre-QupL._SL1500_.jpg" },
    { id:4 , category:1, title:"Samsung s21", price:2800 , photoURL:"https://www.tunisianet.com.tn/188886-large/telephone-portable-samsung-galaxy-s21-5g-gris.jpg" },
    
];
var categoriesList = [
    { id: 1 , name:"Smart phone" },
    { id: 2 , name:"Entertaiment" },
    { id: 3 , name:"TV" },
    
];

var display = 0;
var selectedPrice = 1000000000000000000000;


var productsListElement = document.getElementById("productsListElement");


var keywordsElement = document.getElementById("keywords");
var categoryElement = document.getElementById("category");
var priceElement = document.getElementById("price");



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


function initCategoryList(){
    let blocHTML ='<option value="">please choose a category</option>';

    categoriesList.map((c)=>{
        blocHTML = blocHTML + '<option value="'+c.id+'">'+c.name+'</option>'
    })

    categoryElement.innerHTML = blocHTML;
}

initCategoryList();


function initProductListDisplay(){
    let blocHTML = '';

    const keywords = keywordsElement.value;
    const category = categoryElement.value;
    const targetPrice = selectedPrice;

 





    productsList.filter( (p)=>{

        let condition =  ( p.title.toLowerCase().indexOf(keywords.toLowerCase()) != -1 )
        
        &&
         
        ( p.price <= targetPrice );
    
    
        if (category  != "") {
            
            condition = condition && ( p.category == category  );
        }
    
    return condition;


    }  ) .map( (p)=>{
        
        
        
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


function maxPrice(){
    let max = 0;

    productsList.map((p)=>{
        if (p.price > max) {
            max = p.price;
        }
    })

    return max;
}


priceElement.addEventListener("change",function(){
    const value = Number(this.value); 

    const targetPrice =  (( value * maxPrice() ) / 100);

    console.log(targetPrice);
    selectedPrice = targetPrice;

    document.getElementById("selected-price").innerHTML = targetPrice+"$"


    initProductListDisplay();
})



keywordsElement.addEventListener('keyup',function(){
    initProductListDisplay();
})

categoryElement.addEventListener('change',function(){
    initProductListDisplay();
})