// CREAZIONE DELLA INTERFACIA e ARRAY
var arrayClass = []; // CREAMO UNA LET ARRAY VOTA PER PERMETERE DI AGGIUNGERE I NUOVI OGGETI
// FETCH E AMBIENTE DI LAVORO
fetch('typescript/abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        arrayClass.push(vestiti); // PER OGNI CICLO DEL FOR EACH L OGGETTO SARA AGGIUNTO IN QUELLA LET ARRAY
    });
    // Creazione di altre stanze -- USARE IL COMANDI QUI SOTTO 
    var capellonero = new Abbigliamento(6, 7111, "primavera", "capello", 52, 10, "nero", 50, 70, "negozio", 40);
    arrayClass.push(capellonero);
    var giacona = new Abbigliamento(7, 7111, "primavera", "giacona", 52, 10, "gialla", 80, 100, "negozio", 50);
    arrayClass.push(giacona);
    var mutande = new Abbigliamento(8, 7111, "primavera", "mutande", 52, 10, "gialla", 10, 15, "negozio", 25);
    arrayClass.push(mutande);
    // OBS:  - getSaldoCapo() e getAcquisitoCapo() per consolare il prezzo solamente, getSaldoCapoI() e getAcquisitoCapoI() per prezzo e informazioni
    console.log(arrayClass);
    console.log(arrayClass[0]); // COSI POSSIAMO CERCARA DI ACCORDO CON L ORDINE DEL ARRAY I VALORI UNICI 
    console.log(arrayClass[1]);
    console.log(arrayClass[2]);
    console.log(arrayClass[3]);
    console.log(arrayClass[4]);
    console.log(arrayClass[5]);
    console.log(arrayClass[6]);
    console.log(arrayClass[7]);
    arrayClass[6].getSaldoCapo();
    arrayClass[6].getAcquisitoCapo();
    arrayClass[4].getAcquisitoCapoI();
    arrayClass[2].getSaldoCapoI();
    // COSI POSSIAMO CERCARA DI ACCORDO CON L ORDINE DEL ARRAY I VALORI UNICI  
    // USARE IL COMANDI QUA SOPRA
});
// Classe per usare come modello
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getSaldoCapoI = function () {
        var prezzoScontato = this.prezzoivainclusa -= this.prezzoivainclusa * 0.01 * this.saldo;
        console.log(this.capo + ' prezzo scontato: ' + prezzoScontato);
    };
    Abbigliamento.prototype.getAcquisitoCapoI = function () {
        var prezzoTotale = this.prezzoivainclusa;
        console.log(this.capo + ' prezzo totale:' + prezzoTotale);
    };
    Abbigliamento.prototype.getSaldoCapo = function () {
        console.log(this.prezzoivainclusa - this.prezzoivainclusa * 0.01 * this.saldo);
    };
    Abbigliamento.prototype.getAcquisitoCapo = function () {
        console.log(this.prezzoivainclusa);
    };
    return Abbigliamento;
}());
