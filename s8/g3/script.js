var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tassa = /** @class */ (function () {
    function Tassa(redditoannuolordo) {
        this.redditoannuolordo = redditoannuolordo;
    }
    return Tassa;
}());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(redditoannuolordo) {
        return _super.call(this, redditoannuolordo) || this;
    }
    Artigiano.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * 0.15 * 0.23;
    };
    Artigiano.prototype.getTasseInps = function () {
        return this.redditoannuolordo * 0.15;
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * 0.23;
    };
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo -= this.getUtileTasse();
    };
    return Artigiano;
}(Tassa));
var Operaio = /** @class */ (function (_super) {
    __extends(Operaio, _super);
    function Operaio(redditoannuolordo) {
        return _super.call(this, redditoannuolordo) || this;
    }
    Operaio.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * 0.13 * 0.20;
    };
    Operaio.prototype.getTasseInps = function () {
        return this.redditoannuolordo * 0.13;
    };
    Operaio.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * 0.20;
    };
    Operaio.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo -= this.getUtileTasse();
    };
    return Operaio;
}(Tassa));
var Kaka = new Artigiano(5000);
console.log(Kaka.getTasseInps());
console.log(Kaka.getUtileTasse());
console.log(Kaka.getRedditoAnnuoNetto());
var KakaPedro = new Operaio(50000);
