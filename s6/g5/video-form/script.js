const btnPS = $("#startBtn")

$(()=>{
    $(btnPS).on("click",function(){
        $("input:text").val("Epicode School");
        $("input:password").prop("disabled", false);
        $("input[name='btnRadio']").first().attr("checked", "checked");
        const inCheck =$("input:checked")
        inCheck.attr("checked", "checked");
        
        
    });
    $("input:submit").on("click", function(){
        $("#psForm").on("submit", function(){
            alert("Form enviato");
        })
    })
});

$(document).ready