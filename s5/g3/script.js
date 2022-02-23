var buttonJS = document.getElementById('toggle');
var dropdownJS = document.getElementById('myDropdown');

function nascondi () {
dropdownJS.style.display = "none";
};
nascondi ();

function appari(){
   
    var dropdownJS = document.getElementById('myDropdown');

    dropdownJS.style.display == "block";
    if (dropdownJS.style.display = "block") {
        buttonJS.addEventListener('click', nascondi);
    }
    else {
        buttonJS.addEventListener('click', appari);
    }
    

    
};










buttonJS.addEventListener('click', appari);


var toggle =  document.querySelector('#menu #toggle')
console.log(toggle)

toggle.addEventListener('click', function(){
 var tendina =  document.querySelector('.tendina')
 tendina.classList.toggle('nascosto')

})
   


