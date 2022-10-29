var notes = [];



function ajouterMoyen(){


   if ( document.getElementById("moyen").value != '' ) {
    const note = Number(document.getElementById("moyen").value);

    notes.push(note);
    document.getElementById("moyen").value='';


    // change total

    document.getElementById('total').innerHTML = notes.length

   }

}


function calculMoyen(){
    let sum = 0;

    notes.map((note)=>{
        sum+= note; 
    });


    const moyen = sum / notes.length;
    document.getElementById('message').innerHTML='<div class="alert alert-success">Votre moyen  =  '+moyen+'  </div>';
}