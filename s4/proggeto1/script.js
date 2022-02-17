function prendiTasto(tasto){
    let risultato = document.getElementById("risultato")
    let num = tasto.id;
    risultato.value += num
}

function resetCalc () {
    let risultato = document.getElementById("risultato")
    risultato.value = ""
}

function totale () {
    let risultato = document.getElementById("risultato")
    let totale = eval(risultato.value)
    risultato.value = totale
}