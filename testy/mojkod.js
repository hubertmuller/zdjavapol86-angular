var Kot = /** @class */ (function () {
    function Kot() {
        this.komunikat = 'miau';
    }
    Kot.prototype.miau = function () {
        console.log('kot robi:' + this.komunikat);
    };
    return Kot;
}());
function a() {
    var x;
    x = 6;
    x++;
    console.log(x + 'aoao');
}
var kotek = new Kot();
kotek.miau();
a();
