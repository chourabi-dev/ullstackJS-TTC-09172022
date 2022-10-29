function searchContact(event){
    const val = event.target.value;

    const elments = document.getElementsByClassName("contact");

   

    for (let i = 0; i < elments.length; i++) { 
        
            if ( elments.item(i).innerHTML.trim().toLowerCase().indexOf( val.toLowerCase() ) != -1 ) {
               elments.item(i).style.display='block' 
            }else{
                elments.item(i).style.display='none'  
            } 
    }

}