console.log("Servidor levantado");
//aca escribo mi codigo JAVASCRIPT
//VARIABLES
//¿QUE SON? ESPACIIO DE MEMORIA QUE USA JAVASCRIPT PARA ALMACENAR VALORES
//PARA QUE SIRVE? PARA MOSTRAR INFORMACION AL CLIENTE, MANIPULAR DATOS, INTERCAMBIAR INFORMACION
//FORMA DE ESCRIBIRLO
//snake_case
//camelCase

//INICIALIZANDO UNA VARIABLE y LA DECLARE
//STRING
let nombreProfesor = 'Cristian';
// PUEDO REASINGAR LET
nombreProfesor = 'Diana';

//TIPO DE DATO:
//string es PONERLE LA COMILLA A CUALQUIER TIPO DE DATOS
const tituloMicrosoftTeam = 'Domina Microsoft Teams fácil y rápido en el salón de clases';
const precioProdcuto = '35000';

//NO SE PUDE HACER CON CONST
/*
tituloMicrosoftTeam = 'Curso Javascript'; 
*/

//number: son los valores numericos
const edadCristian = 28;
const dolarBlue = 1220;
const capchat = 213812582;
const precio = 48000;

//Bolean
const esMayor = true;
const permisoBoliche = false;

//Que es el console.log?
//Es un metodo que nos permite ver informacion en la consola del navegador
//Para que la quiero ver? Para saber los datos de mi codigo;

console.log("Este es el valor del dolarblue:", dolarBlue);
console.log(dolarBlue);
console.log(typeof nombreProfesor);
console.log(typeof precio);
console.log(typeof esMayor);

//CALCULO DE COMANDITA
/*
const precioPlanAvanzado = 75;
const clientesTotales = 25000;
const resultadoCuentaBancaria = precioPlanAvanzado * clientesTotales;
console.log("Tenes un ingreso pasivo dolares de Fudo:", resultadoCuentaBancaria);
const pesosCuentaBancaria = resultadoCuentaBancaria * dolarBlue;
console.log("Tenes un ingreso pasivo pesos de Fudo:", pesosCuentaBancaria);
*/

//PROMPT: VENTANA INVASIVA
const precioPlanAvanzado = parseInt(prompt("Decime el precio de tu plan Avanzado"));
console.log("esto es el plan avanzado", precioPlanAvanzado)
const clientesTotales = parseInt(prompt("Cuantos clientes tenes?"));
console.log("esto clientesTotales", clientesTotales)
const resultadoCuentaBancaria = precioPlanAvanzado * clientesTotales;
console.log("Tenes un ingreso pasivo dolares de Fudo:", resultadoCuentaBancaria);
const pesosCuentaBancaria = resultadoCuentaBancaria * dolarBlue;
console.log("Tenes un ingreso pasivo pesos de Fudo:", pesosCuentaBancaria);
