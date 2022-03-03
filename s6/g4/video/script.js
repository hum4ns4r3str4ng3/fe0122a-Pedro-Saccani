
    
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
        $("#animaBT").on("click", function(){
         $("#box")
        /* .animate({width:"+=200px"})
         .animate({heigth:"+=200px"})//
         .animate({marginleft:"150px"})//
         .animate({borderWidth:"30px"})//
         .animate({opacity:0.5})//
         .delay(2000).animate({borderWidth:"50px"})//*/
         //.slideUp(6000);
         .animate({width:"500"},
         {duration:3000, //4seg
         easing:"linear",
      step:function(x){
         $("#testo").text(Math.round(x*100 / 500)+ "%") 
     // easing:"swing",
      //complete:function(){
        // $("#testo").text("animazione completata")
      }

      });
   })  
     
     
     $("#stopBT").on("click", function(){
         //$("#box").stop();
         $("#box").finish();
     
     })