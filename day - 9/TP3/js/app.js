

console.log(this);
                                                         
/**
 * document.getElementById('block').addEventListener("click",

// callback function
function(event){
    
        console.log("block clicked");

    console.log(this);

    this.innerHTML="clicked";  
 
    console.log(event);
})

 */
/*
document.getElementById('feild').addEventListener("mousemove",function(event){
    const x = event.clientX;
    const y = event.clientY;

    console.log(y);

    document.getElementById('ball').style.top=y+'px';
    document.getElementById('ball').style.left=x+'px';
    
})*/


/**
 * document.getElementById('input').addEventListener('keyup',function(event){
    console.log(event);

    document.getElementById('status').style.display = 'block';


    if (event.code === 'Enter') {
        document.getElementById('status').style.display = 'none';
    }
})
 */


document.getElementById('content').addEventListener('scroll',function(event){
    console.log(event);
})