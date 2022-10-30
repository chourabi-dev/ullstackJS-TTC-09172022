function toggleState(){
    const classes = document.getElementById("btn").classList

   

    let isActive = false;

    for (let i = 0; i < classes.length; i++) {
        
        if (classes[i] == "active") {
            isActive= true;
        }
        
    }

    if ( isActive == true ) {
        document.getElementById("btn").className="toggle-btn"

        localStorage.setItem('status','not-active')


    } else {
        document.getElementById("btn").className="toggle-btn active"

        localStorage.setItem('status','active')
    }
}

function initToggleBtn(){
    const oldStatus = localStorage.getItem('status');

    if (oldStatus != null) {
        
        if (oldStatus =='active') {
            document.getElementById("btn").className="toggle-btn active"
        }else{
            document.getElementById("btn").className="toggle-btn"
        }
    }
}


initToggleBtn();


 