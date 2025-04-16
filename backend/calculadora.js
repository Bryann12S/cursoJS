'use strict'

var params = process.argv.slice(2);

var numer1 = parseFloat(params[0]);
var numer2 = parseFloat(params[1]);

var plantilla = `
La suma de ${numer1} + ${numer2} es igual a ${numer1 + numer2}
La resta de ${numer1} - ${numer2} es igual a ${numer1 - numer2}
La multiplicacion de ${numer1} * ${numer2} es igual a ${numer1 * numer2}
La division de ${numer1} / ${numer2} es igual a ${numer1 / numer2}
La potencia de ${numer1} ^ ${numer2} es igual a ${Math.pow(numer1, numer2)}
La raiz cuadrada de ${numer1} es igual a ${Math.sqrt(numer1)}
La raiz cuadrada de ${numer2} es igual a ${Math.sqrt(numer2)}
    `;
console.log(plantilla);
console.log('Calculadora cargada...');
