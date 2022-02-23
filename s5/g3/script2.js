



var toggle =  document.querySelector('#menu #toggle')
console.log(toggle)

toggle.addEventListener('click', function(){
 var tendina =  document.querySelector('.tendina')
 tendina.classList.toggle('nascosto')

})






var toggleDue =  document.querySelector('#menuDue #toggleDue')
console.log(toggleDue)

toggleDue.addEventListener('click', function(){
 var tendina =  document.querySelector('.tendinaDue')
 tendina.classList.toggle('nascostoDue')

})


var toggleTre =  document.querySelector(' #toggleTre')
console.log(toggleTre)

toggleTre.addEventListener('click', function(){
 var tendina =  document.querySelector('.nascostoTre')
 tendina.classList.toggle('tendinaTre')

})

