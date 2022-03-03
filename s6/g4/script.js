// quando il documento è pronto...(forma breve)...

    // creo una variabile "carosello" e creo così un oggetto jQuery che contenga gli elementi ul (il selettore è #img-l).

    var carosello = $("#img-l");
  var  lProp = parseInt(carosello.css("left"))
  var w = carosello.width;


 $("#l-btn").on("click", function(){
    var carosello = $("#img-l");
    var  lProp = parseInt(carosello.css("left"))
    console.log(lProp);
     if( lProp < 0){
    var carosello = $("#img-l");
 $(carosello).animate({left:"+=300px"});
 } else {
    $(carosello).animate({left:"+=300px"}).stop;
 }
}
 );   
  

    // gestisco il click event handler per il pulsante sinistro.
    
        // creo una variabile "lProp" che contiene il valore della proprietà "left" (usa parseInt per convertire in numero intero)
        // qui contengo l'ul che serve per muovere l'elemento a destra e sinistra.
        

        // determino il nuovo valore della proprietà left e prima creo una nuova variabile "newLProp" che lo contiene. 
        // Utilizzo l'if.
        

        // uso il metodo animate per cambiare il valore della proprietà "left"
    

    // gestisco il click event handler per il pulsante destro

    $("#r-btn").on("click", function(){
        var carosello = $("#img-l");
     $(carosello).animate({left:"-=300px"});
     });   

    
    /* function posi (elemento){
         $(carosello).css({position: "left"}) =  elemento
         if (elemento < "1600px") {$("#r-btn").on("click", function(){
            var carosello = $("#img-l");
         $(carosello).animate({left:"+=300px"});
         })   }
              
           else if (elemento > "0px"){$("#l-btn").on("click", function(){
     
            var carosello = $("#img-l");
         $(carosello).animate({left:"-=300px"});
         })   
        
        
           }  
            
         };
         posi();

     */
    
        // uso il codice per la gestione del pulsante sinistro, l'unica variazione è la determinazione del nuovo valore
        // della proprietà "left".
        

        // determino il nuovo valore della proprietà "left"
        

        // uso il metodo animate per cambiare il valore della proprietà left
     