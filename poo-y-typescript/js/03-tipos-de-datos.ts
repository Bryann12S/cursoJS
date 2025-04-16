 
 //crear un tipo de dato
 type alfanumerico = string | number;
 
 //String

 let cadena: alfanumerico = "Bryan.com";

 cadena = 12;

 //number

 let numero: number = 12;

 //boleano
 let verdadero_falso: boolean = true;

 //any
 let cualquiera: any = "Hola";
 cualquiera = 77;

 //array
 var lenguajes: Array<string> = ["PHP","JS","CSS"]

 let years:  number[]=[12,13,14];

 // let vs var

 var numero1=10;
 var numero2=12;
 if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
 }
 console.log(numero1,numero2)
 console.log (cadena, numero, verdadero_falso, cualquiera, lenguajes, years);