class TodoList {
    constructor(testo,bottone){
        this.testo = document.querySelector(testo)
        this.bottone = document.querySelector(bottone)
    }

    init(){
        this.bottone.addEventListener("click", () =>{
                  this.aggiungiHtml();
        })
    }
    aggiungiHtml(){
        let testo = this.testo;
        let div = document.createElement("div");

        document.querySelector('body').append(div)

    }
    rimuoviHtml(){

    }
    salvaDatiNelDb(aggiunta){
    

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
    rimuoviElementodaDb(el){

        let ls = localStorage.getItem('elementiSalvati')
        let db = JSON.parse(ls)
    
        let indiceElemento = db.indexOf(el.innerHTML)
    
        db.splice(indiceElemento,1)
    
        localStorage.setItem('elementiSalvati',JSON.stringify(db))
    }
    

}

let TodoList = new TodoList('#testo','#salva')