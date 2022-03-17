var Utente = /** @class */ (function () {
    function Utente(numberCarica, numeroChiamate) {
        this.numeroChiamate = numeroChiamate;
        this.numberCarica = numberCarica;
    }
    Utente.prototype.ricarica = function (soldi) {
        return this.numberCarica += soldi;
    };
    Utente.prototype.minutiDurata = function (minuti) {
        return this.numeroChiamate += minuti;
    };
    Utente.prototype.numero404 = function () {
        var aSoldi = this.numeroChiamate * 0.20;
        return this.numberCarica -= aSoldi;
    };
    Utente.prototype.numeroChiamata = function () {
        return this.numeroChiamate;
    };
    Utente.prototype.azerraChiamata = function () {
        this.numeroChiamate = 0;
    };
    Utente.prototype.consoleDati = function () {
        console.log(this.numberCarica, this.numeroChiamate);
    };
    return Utente;
}());
var Mario = new Utente(20, 0);
console.log(Mario.ricarica(10));
console.log(Mario.minutiDurata(40));
console.log(Mario.minutiDurata(10));
console.log(Mario.numero404());
console.log(Mario.numeroChiamata());
console.log(Mario.azerraChiamata());
Mario.consoleDati();
