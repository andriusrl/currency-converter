"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(id, origin, value, destiny, tax, date) {
        this.id = id;
        this.origin = origin;
        this.value = value;
        this.destiny = destiny;
        this.tax = tax;
        this.date = date;
    }
    Transaction.prototype.getId = function () {
        return this.id;
    };
    Transaction.prototype.getOrigin = function () {
        return this.origin;
    };
    Transaction.prototype.getValue = function () {
        return this.value;
    };
    Transaction.prototype.getDestiny = function () {
        return this.destiny;
    };
    Transaction.prototype.getTax = function () {
        return this.tax;
    };
    Transaction.prototype.getDate = function () {
        return this.date;
    };
    return Transaction;
}());
exports.Transaction = Transaction;
