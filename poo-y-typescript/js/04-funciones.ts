
//funcion normal de JS
function getNumero(numero){
    return "El numero es: "+numero;
}
//en TS           typo de dato del p y el ripo de dato que va a devolver
function getNumero2(numero: number):string{
    return "El numero es: "+numero;
}

console.log(getNumero(12));
console.log(getNumero2(55));