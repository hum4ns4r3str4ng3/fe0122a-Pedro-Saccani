var toggle =  document.querySelector('#menu #toggle')
console.log(toggle)

toggle.addEventListener('click', function(){
 var tendina =  document.querySelector('.tendina')
 tendina.classList.toggle('nascosto')

})


var buttonJS = document.getElementById('insertBTN')
var toDoJs = document.getElementById('insert').value; 
var bigListaJs = document.getElementById('biglista')

buttonJS.addEventListener('click', function(){
    let toDoJs = document.getElementById('insert').value; 
var bigListaJs = document.getElementById('biglista')
let liCreator = document.createElement('li')

liCreator.innerHTML = toDoJs;
bigListaJs.append(liCreator);
bigListaJs.prepend(liCreator);
document.getElementById('insert').value = ""

liCreator.addEventListener('click', function(){
    liCreator.remove()
})

salvaDatiNelDb(toDoJs);


})




//Dalla riga 29 in su JSOn

function creaHtml(){
  
    let elementiSalvati = JSON.parse(localStorage.getItem("elementiSalvati"));
    elementiSalvati.forEach(function (elemento){
        
        let liCreator = document.createElement("li");
        liCreator.innerHTML = elemento;
        let bigListaJs = document.getElementById("biglista");
        liCreator.addEventListener("click",function(){
            liCreator.remove();
            rimuoviElementodaDb(liCreator);
        });
        bigListaJs.append(liCreator);
    })
}

creaHtml();


function salvaDatiNelDb(aggiunta){
    

    /*salvataggio dati*/
    
        /* versione estesa
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
    }
    */

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}



//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}






var dataOggi = new Date ();
console.log(dataOggi);

var dataJS = document.getElementById('data') ;


var dataOraJS = document.getElementById('data-ore');
var dataMinutiJS = document.getElementById('data-minuti');


//dataJS.innerHTML = dataOggi;


dataOraJS.innerHTML = formata(dataOggi.getHours()) ;
dataMinutiJS.innerHTML = formata(dataOggi.getMinutes());


function formata(time) {
    if (time < 10) {return "0" + time;}
    else { return time;}
}