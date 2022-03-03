$(()=>{
    $("h2").on("click", function(){
        $(this).next().toggleClass("none");
        $(this).toggleClass("meno");
        $(this).toggleClass("piu");
    })
   
})


