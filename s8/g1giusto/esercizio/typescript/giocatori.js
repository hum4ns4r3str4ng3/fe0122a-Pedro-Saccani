var buttoneGenera = document.getElementById("generaValoreBT");
buttoneGenera.addEventListener("click", function () {
   
    var numero = Math.floor((Math.random() * (100 - 1)) + 1);
    
    console.log('Numero casuale generato = ', numero);
    
    var comparaBT = document.getElementById("comparaBT");
    comparaBT.addEventListener("click", function () {
        var div = document.createElement("div");
            document.querySelector("body").append(div)
        
        var gamer1 = document.getElementById("primoValore")["value"];
    var gamer2 = document.getElementById("secondoValore").value;
        var diff1 = Math.abs(numero - gamer1);
        var diff2 = Math.abs(numero - gamer2);
        function aggiornaHTML(){
            var div = document.createElement("div");
            document.querySelector("body").append(div)
        }
        aggiornaHTML();
        if (numero === gamer1) {
         //   console.log('Il giocatore n1 ha indovinato \n');
         div.append("Il numero generato e :" + numero +"Il giocatore n1 ha indovinato \n'");
        }
        else if (numero === gamer2) {
           // console.log('Il giocatore n2 ha indovinato \n');
            div.append("Il numero generato e :" + numero +"Il giocatore n2 ha indovinato \n'");
        }
        else if (diff1 < diff2) {
            console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più!');
            div.append("Il numero generato e :" + numero +"Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più!");
        }
        else if (diff1 > diff2) {
          //  console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');
            div.append("Il numero generato e :" + numero + "Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!");
        }
        else {
            console.log("Hai inserito un valore sbagliato")
        }
        console.log(diff1,diff2)
        console.log(gamer1,gamer2)
    });
    
});
