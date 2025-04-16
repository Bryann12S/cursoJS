
var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}}
    La hora es: ${hora}
`;

console.log(textoHora);
console.log(Math.ceil(Math.random()*1000));

//Funciones matematicas 