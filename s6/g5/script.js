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
    .animate({width:"1000px"},
    {duration:30000, //4seg
    easing:"linear",
 step:function(x){
    $("#testo").text(Math.round(x*100 / 1000)+ "%") 
// easing:"swing",
 //complete:function(){
   // $("#testo").text("animazione completata")
 }

 });
})  


$("#stopBT").on("click", function(){
    //$("#box").stop();
    $("#box").stop();

})


$("#resetBT").on("click", function(){
    //$("#box").stop();
    $("#box").css({width:""});

})


