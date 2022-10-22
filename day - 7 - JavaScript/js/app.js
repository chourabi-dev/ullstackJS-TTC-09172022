console.log("js is working from app.js");

/**
 *     console.log( typeof 10 );
    console.log( typeof 10.5 );
    console.log( typeof "bonjour" );
    console.log( typeof true ); 
    console.log( typeof [1,2,3,4,5] ); 
    console.log( typeof {} ); 
    console.log( typeof new Date() );
 */



// TP 1 

/**
 * var x = 0;
var y = 0;



 function calculer(){
    
    x = Number(document.getElementById('xinput').value);

    y = Number(document.getElementById('yinput').value);





    var somme = (x+y);

    console.log(somme);

    var resultElemnt =  document.getElementById("result");

    resultElemnt.innerText = somme;
}

 

 */




// TP2


/**
 * var blockElement = document.getElementById('block');


// SET

// insert text
blockElement.innerText= 'bonjour';

// insert HTML
blockElement.innerHTML= '<h1>bonjour</h1>';

// edit style
blockElement.style.color='orange'

// padding-top

blockElement.style.paddingTop= '10px';


// GET


// get the html inside the div

var html = blockElement.innerHTML;

console.log(html);

// get the padding from the div

var padding = blockElement.style.paddingTop;

console.log(padding);
 */



// ARRAY

/**
 * var notes = [15,16,19,18,13,10,5,8,9,6]
undefined
notes
(10) [15, 16, 19, 18, 13, 10, 5, 8, 9, 6]
notes.length
10
notes[0]
15
notes[notes.length -1 ]
6
notes.push(14)
11
notes
(11) [15, 16, 19, 18, 13, 10, 5, 8, 9, 6, 14]
notes.pop()
14
notes
(10) [15, 16, 19, 18, 13, 10, 5, 8, 9, 6]
notes.pop()
6
notes.pop()
9
notes
(8) [15, 16, 19, 18, 13, 10, 5, 8]
notes.shift()
15
notes
(7) [16, 19, 18, 13, 10, 5, 8]
notes.splice(2,1)
[18]
notes
(6) [16, 19, 13, 10, 5, 8]
notes[3] = 18
18
notes
(6) [16, 19, 13, 18, 5, 8]
 */






// MAPPING

/**
 * var som = 0;

for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    
    som = som + note;
}

var moy = som / notes.length;

console.log(moy);
 */

// callback function
/**
 * var som = 0


notes.map((note , index)=>{
    console.log(note , index); 
});

 

notes.forEach (  (note)=>{
    console.log(note);
} ) 
 */


var notes = [15,16,19,18,13,10,5,8,9,6];


// min

var min = notes[0];

notes.map( (note)=>{

    if (note < min) {
        min = note;
    }

} )

console.log(min);

 

// max

var max = notes[0];

notes.map( (note)=>{

    if (note > max) {
        max = note;
    }

} )

console.log(max);





// FILTER


var res = notes.filter( (note)=> note < 10  );

console.log(res);





var products = [ 'canon d45', 'samsung s21', 'iphone 13 pro max', 'oppo', 'Motorolla' ]

var res2 = products.filter( (p)=> p.toLowerCase() .indexOf(  'm' )  != -1 )

console.log(res2);




// JSON
/**
 * const user = {  name:'test user', email:'tchourabi@gmail', country:'TN' , product: [] , address:{ city:'tn', ville:'Tunisia' }  };

console.log(user.address.city); 

    {  key:value, ...  }

 */



var productList = [
    { id:1, name:'Canon d45', price: 1200 }, 
    { id:2, name:'HP pavillion', price: 3000 }, 
    { id:3, name:'Iphone 14 pro max s', price: 5600 }, 
    
];

// name a
// price < 3500


var res3 = productList.filter( (p)=> ( p.name.toLowerCase().indexOf('a') != -1)  && ( p.price <= 3500 )  )

console.log(res3);

// SHOPPING LIST




var shoppingInputElement = document.getElementById("shoppingInput");
var listElement = document.getElementById('list');

function addProduct(){

    const product = shoppingInputElement.value;

    const liElement = '<li>'+product+'</li>';

    // SET
    listElement.innerHTML =   listElement.innerHTML + liElement   ;


    shoppingInputElement.value= '';
    console.log(product);
}