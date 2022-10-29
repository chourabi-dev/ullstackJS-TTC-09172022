var products = [];


function ajouterProduct(){
    const product = document.getElementById('product').value;


    if ( product != '' ) {
        

        const obj = { title: product ,  createdAt: new Date() };

        products.push(obj);

        initView();
    }
}


function formatDate(date){
    return date.getDate()+'/'+(date.getMonth()+1)+'/'+ date.getFullYear() ;
}



function initView(){

    let list = document.getElementById('list');
 
    list.innerHTML='';


    products.map((product,index)=>{

        const html = `<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${product.title}</div>
          ${formatDate(product.createdAt)}
        </div>
        <span class=" ">
          <button class="btn btn-sm btn-danger" onclick="removeProduct(${index})">remove</button>
        </span>
      </li>`;

      list.innerHTML = list.innerHTML + html;
 

    })
}


function removeProduct(index){
    console.log(index);

    products.splice(index,1);

    initView();
}