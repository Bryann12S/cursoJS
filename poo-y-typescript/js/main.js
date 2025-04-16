var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS caragda!!");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Rojo", "fasdsa", "fadss", "fasda", 12);
    };
    return Main;
}());
var main = new Main();
