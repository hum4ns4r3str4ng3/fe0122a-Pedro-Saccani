class sonAccount{

    //proprieta e costruttore
    balanceInit:number = 0; 
    constructor(balanceInit:number){
        this.balanceInit = balanceInit
    }

// metodi 
    oneDeposit(sommaDeposito:number){
      return  this.balanceInit += sommaDeposito
    }
    oneWithdraw(sommaPrelevata:number){
        return this.balanceInit -= sommaPrelevata
    }
    twoDeposit(sommaDeposito2:number){
        return  this.balanceInit += sommaDeposito2
      }
      twoWithdraw(sommaPrelevata2:number){
          return this.balanceInit -= sommaPrelevata2
      }
     addInterest (interest:number){
         return this.balanceInit * interest
     } 
     addInterest2 (){
        return this.balanceInit * 0.1
    } 


}

// classe fatta, ora creamo una stanza con una nuova account

let gennaio = new sonAccount(0);
gennaio.oneDeposit(500);
gennaio.oneWithdraw(50);
console.log(gennaio);