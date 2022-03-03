$("<div id=chess> </div>")
//.css("height", "1600px")
//.css("width", "1600px")
.css("background-color", "grey")
//.css("margin-left", "vh")
.appendTo("body")



    $("#crea").on("click", function(){

   
    for (let i = 0; i<8; i++) {
        /*$("#chess").append("<section id='quadrato-"+i+"'> </section>")
        $("#quadrato-"+i).css("height", "100px").css("width", "100px").css("display", "inline-block");*/
       
        /* $("section:odd").css("background-color", "white");
        $("section:even").css("background-color", "grey");
        $("section:nth-child(5)").css("background-color", "white");
        $("section:nth-child(6)").css("background-color", "grey");
        $("section:nth-child(7)").css("background-color", "white");
        $("section:nth-child(8)").css("background-color", "grey");
        $("section:nth-child(13)").css("background-color", "white");
        $("section:nth-child(14)").css("background-color", "grey");
        $("section:nth-child(15)").css("background-color", "white");
        $("section:nth-child(16)").css("background-color", "grey"); */
        for (let x=0; x<8;x++){

            let modulo = (i + x) % 2
            let bg;
            if(modulo ==0){
                bg = "black"
            } else {
                bg ="white"
            }
          /*  $("#chess").append("<section id='quadrato-"+x+"'>  </section>")
            $("#quadrato-"+x).css("height", "100px").css("width", "100px").css("display", "inline-block");
           let modulo = (i + x) % 2
           if (modulo ==0) {
            $("#quadrato-"+x).css("background-color", "black"); */

            $("<div>  </div>")
            .css({
                "width" : "100px",
                "height" : "100px",
                "top" : (i*100) + "px",
                "left" : (x*100) + "px",
                "margin-left" : "-2px",
                "margin-bottom" : "-4px",

                "position": "absolute",
                "background-color" : bg

            })
            .addClass("casella")
.appendTo("#chess")
           }
        }
    })
    //}
       $("#chess").on("click", ".casella", function(){
           $(this).css({"background-color" : "red"})
       })

 



/*$(()=>{
    $("section").on("mouseover mouseout", function(){
        $(this).css("bor");
    })
   
})*/