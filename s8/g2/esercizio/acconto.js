var sonAccount = /** @class */ (function () {
    function sonAccount(balanceInit) {
        //proprieta e costruttore
        this.balanceInit = 0;
        this.balanceInit = balanceInit;
    }
    // metodi 
    sonAccount.prototype.oneDeposit = function (sommaDeposito) {
        return this.balanceInit += sommaDeposito;
    };
    sonAccount.prototype.oneWithdraw = function (sommaPrelevata) {
        return this.balanceInit -= sommaPrelevata;
    };
    sonAccount.prototype.twoDeposit = function (sommaDeposito2) {
        return this.balanceInit += sommaDeposito2;
    };
    sonAccount.prototype.twoWithdraw = function (sommaPrelevata2) {
        return this.balanceInit -= sommaPrelevata2;
    };
    sonAccount.prototype.addInterest = function (interest) {
        return this.balanceInit * interest;
    };
    sonAccount.prototype.addInterest2 = function () {
        return this.balanceInit * 0.1;
    };
    return sonAccount;
}());
// classe fatta, ora creamo una stanza con una nuova account
var gennaio = new sonAccount(0);
gennaio.oneDeposit(500);
gennaio.oneWithdraw(50);
console.log(gennaio);
