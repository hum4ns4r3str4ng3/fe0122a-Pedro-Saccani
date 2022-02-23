var buttonJS = document.getElementById('label'); 

var budInizJS = document.getElementById('budIniz');

function bugdetBtn (){
    const budgetIniz = document.getElementById('budInizIP').value;
    
    
    budInizJS.innerHTML = "Questo e tuo budget di partenza : " + budgetIniz + "$" ;
    

};






buttonJS.addEventListener('click', bugdetBtn );




//// seconda parte //// 


var buttonJS2 = document.getElementById('label2');

var budSecJS = document.getElementById('budSec'); 

var warningJS = document.getElementById('warning');

function budSecFN() {
    const budgetIniz = document.getElementById('budInizIP').value;
    
    var budSec = document.getElementById('budSecIP').value;
   
    budSecJS.innerHTML = "Tu hai speso " + budSec + " Il tuo budjet adesso e : " + ( budgetIniz - budSec); 
    if  (budSec>=900 ) {warningJS.innerHTML = "tu stai finendo il tuo budjet"}
    else if (budSec >= 500) {warningJS.innerHTML = "tu gia hai ultrapassato la meta del suo budjet !"};

};


 buttonJS2.addEventListener('click', budSecFN );
