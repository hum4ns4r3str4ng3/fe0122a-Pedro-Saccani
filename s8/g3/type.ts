abstract class Tassa {
    
redditoannuolordo:number;


    constructor( redditoannuolordo:number){
        
        this.redditoannuolordo = redditoannuolordo
       
    }

  abstract  getUtileTasse():void;
        

   abstract getTasseInps():void;
        

 abstract getTasseIrpef():void;
abstract getRedditoAnnuoNetto():void;

}


    

class Artigiano extends Tassa {
    constructor(redditoannuolordo:number){
        super(redditoannuolordo)
       
       
    }
getUtileTasse(): number {
    return this.redditoannuolordo * 0.15 * 0.23
    
}
getTasseInps():number{
    return this.redditoannuolordo * 0.15
}
getTasseIrpef(): number {
    return this.redditoannuolordo * 0.23
}
getRedditoAnnuoNetto(): number {
    return this.redditoannuolordo -= this.getUtileTasse()
    
}

}


class Operaio extends Tassa {
    constructor(redditoannuolordo:number){
        super(redditoannuolordo)
       
       
    }
getUtileTasse(): number {
    return this.redditoannuolordo * 0.13 * 0.20
    
}
getTasseInps():number{
    return this.redditoannuolordo * 0.13
}
getTasseIrpef(): number {
    return this.redditoannuolordo * 0.20
}
getRedditoAnnuoNetto(): number {
    return this.redditoannuolordo -= this.getUtileTasse()
    
}

}


let Kaka = new Artigiano(5000);
console.log(Kaka.getTasseInps());
console.log(Kaka.getUtileTasse());
console.log(Kaka.getRedditoAnnuoNetto());

let KakaPedro = new Operaio(5000);



