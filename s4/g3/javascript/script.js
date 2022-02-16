//range

function range(){
    var a = document.getElementById('primo').value
    var b = document.getElementById('secondo').value
    document.getElementById('range').innerHTML = (Number (a) - Number(b))
}





//operatore ternario // 
var eta = (anni>18) ? "proibito l ingresso" : "ingresso permesso"; 


var anni = 24 ;

document.write(eta);



// CHIEDERE perche quando cambia variabile aggiorna valore di tutti due, e come fare a spostare su una nuova linea //

vitalunga = () => "Buongiorno";
alert(vitalunga()) ;

// STEP 2 senza domanda //


function operazione (){
    var primonumero = 5 ;
    var secondonumer = 8;
    function multiplicazione ()  {
        console.log(primonumero * secondonumer);
    }
    return multiplicazione();

}

operazione();

// 1 definire funzione , 2 definire variabile, 3 definire altra funzione 4 return, 5 scrivere la prima funzione //



alert(8!=10);
alert(8==10); 
document.write("<br>",  20>=20);


// perche la virgula dopo il br va e il + no //