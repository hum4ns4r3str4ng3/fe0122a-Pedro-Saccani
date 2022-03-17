interface iSmartphone {
    numberCarica:number 
    numeroChiamate:number
    
}


class Utente implements iSmartphone {
    numberCarica:number 
    numeroChiamate:number
    constructor(numberCarica:number, numeroChiamate:number){
        this.numeroChiamate = numeroChiamate
        this.numberCarica = numberCarica

    }
    ricarica(soldi:number){
     return this.numberCarica += soldi
    }
    minutiDurata(minuti:number){
         return this.numeroChiamate += minuti
         
    }

    numero404(){
        let aSoldi:number = this.numeroChiamate * 0.20
        return this.numberCarica -=aSoldi
    }

    numeroChiamata(){
        return this.numeroChiamate
    }
   public azerraChiamata():void{
        this.numeroChiamate = 0
    }
     
    consoleDati(){
        console.log(this.numberCarica, this.numeroChiamate);
    } 

}

let Mario = new Utente(20,0);
console.log(Mario.ricarica(10));
console.log(Mario.minutiDurata(40));
console.log(Mario.minutiDurata(10));

console.log(Mario.numero404());
console.log(Mario.numeroChiamata());
console.log(Mario.azerraChiamata());




Mario.consoleDati();

