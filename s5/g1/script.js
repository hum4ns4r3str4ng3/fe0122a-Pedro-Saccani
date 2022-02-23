var dataOggi = new Date ();
console.log(dataOggi);

var dataJS = document.getElementById('data') ;

var dataAnnoJS = document.getElementById('data-anno');
var dataMesiJS = document.getElementById('data-mesi');
var dataGiorniJS = document.getElementById('data-giorni');
var dataOraJS = document.getElementById('data-ore');
var dataMinutiJS = document.getElementById('data-minuti');


//dataJS.innerHTML = dataOggi;

dataAnnoJS.innerHTML = dataOggi.getFullYear();
dataMesiJS.innerHTML = dataOggi.getMonth() + 1;
dataGiorniJS.innerHTML = dataOggi.getDate();
dataOraJS.innerHTML = dataOggi.getHours();
dataMinutiJS.innerHTML = dataOggi.getMinutes();









