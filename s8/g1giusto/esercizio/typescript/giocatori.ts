

 
    
    let buttoneGenera:(HTMLElement|null) = document.getElementById("generaValoreBT")!
    buttoneGenera.addEventListener("click",function( ){
        let gamer1:string = document.getElementById("primoValore")["value"];

let gamer2:string = document.getElementById("secondoValore").value;
        
       

        var numero = Math.floor((Math.random() * (100 - 1)) + 1);
        var diff1 = Math.abs(numero - gamer1), diff2 = Math.abs(numero - gamer2);
        console.log('Numero casuale generato = ', numero);
        console.log(gamer1)
        console.log(gamer2)
        let comparaBT = document.getElementById("comparaBT");
        comparaBT.addEventListener("click", function(){
           
            if (numero === gamer1) {
                console.log('Il giocatore n1 ha indovinato \n');
            }
            else if (numero === gamer2) {
                console.log('Il giocatore n2 ha indovinato \n');
            }
            else if (diff1 < diff2) {
                console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più!');
            }
            else {
                console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');
            }

        })
        console.log(num1)
        console.log(num2)
    })
    
   

