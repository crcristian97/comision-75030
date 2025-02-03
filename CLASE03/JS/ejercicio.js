//PRINCIPIO SOLID
//creamos una funcion
//llamada sumar
//retornar un resultado

function sumar() {
    let numero1 = 5;
    let resultado = resultado(numero1, 5);
    return resultado;
};

function resultado(num1 = 0, num2 = 0){
    return num1 + num2;
};

function sumarTres(){
    let numberOne = 1;
    let numberTwo = 2;
    let numberThree = 3;
    let resultado = resultado(numberThree, numberTwo);
}
  
sumar();

//PARÁMETRO
const numeroUsuario = prompt('elegi tu gaseosa');

if(numeroUsuario === 1){
    gaseosas('Coca Cola'); // toco el numero 1 
}else if(numeroUsuario === 2){
    gaseosas('Sprite'); // toco el numero 2
}else {
    gaseosas('Paso de los toros'); 
};

function gaseosas(gaseosa = ''){
    console.log(`Te vas a tomar una ${gaseosa}`);
};

//muchos parámetros, n10
//cuantos son buenas practicas? 3-5
function sendEmailAlert(nombre = '', email = '', id = 0){

}
let nombre = 'elias';
sendEmailAlert(nombre, email, id); // elias va a estar enviandose a nombre de la funcion sendEmailAlert
sendEmailAlert(email, id, nombre); // elias va a estar enviandse a id de la funcion sendEmailAlert
sendEmailAlert( id, nombre, email);// elias va a estar enviandose a email de la funcion sendEmailAlert

//parametro se envia SI O SI en orden 


//SCOPE
//Global: utilizar la variable en cualquier ámbito. PJ
const IVA = 0.21;  //varaibles de scope global
const producto = 'Remera' //varaibles de scope global
function sumarProducto(producto = ''){
    //const IVA = 0.21; //scope local
    return producto * IVA;
};

function restarProducto(producto = '', IVA = 0){
    //accedo a IVA Y PRODCUTO DENTRO DEL SCOPE LOCAL
    const IVATela = 0.31
    return producto - IVATela;
};

sumarProducto(producto);
restarProducto(producto, IVA);
////////////////////////////////

// VAR - REASIGNAR Y REDECLARARLA EN EL MISMO SCOPE Y EN OTRO SCOPE
// LET - REASIGNARLA EN EL MISMO SCOPE, PODES REDECLARARLA Y REASIGNAR EN OTRO SCOPE  
// CONST - NI REASIGNAR NI REDECLRAR EN NINGUN SCOPE. MEJOR MANEJO DE ERRORES

//SIMULAR PAGINA DEL DOLAR
/* PRIMER FORMA
const dolarOficialCompra = 1034;
const dolarOficialVenta = 1074;
const dolarMepCompra = 1174;
const dolarMepVenta = 1177;
const dolarLiquiCompra = 1186;
const dolarLiquiVenta = 1187;
*/

//2 FORMA
/*
const dolar = 1000;
function resultDolar(priceDolar = 0 , multiplicacion = 0){
    const priceDolar = 9999999;
    return priceDolar * multiplicacion;
    //console.error('')
};

const oficialCompra = resultDolar(dolar, 0.03);
const oficialVenta = resultDolar(dolar, 0.5);
const mepCompra = resultDolar(dolar, 0.7);
const mepVenta = resultDolar(dolar, 0.98);
*/
/*
const oficialCompra = function( dolar){
    return dolar * 0.03;
}
*/


//funciones anónimas y funciones flecha
//anonimas no le tenes que poner nombre dsp de la palabra funcion pero si tenes que asignarla a la const
//flecha igua que la anónima pero reemplazando los paréntesis por las flechas

function changeLenguaje(){

};

changeLenguaje();
//anonimas

const changeLenguajes = function( ){
//aca hago mi lógica
};


//EJEMPLO DE CODERHOUSE
const suma  = (a = 0,b = 0) => a + b; // 605

const resta = (a = 0,b = 0) => a - b;
//Si una función flecha puede resolver su objetivo en una sola línea de código y, a su vez, debe retornar ese dato, podemos obviar las llaves {} y la palabra reservada return
const iva = (x = 0) => x * 0.21; 

let precioProducto = 500;
let descuento = 50;

//Calculo: precioProducto + iva - descuento
                                            //IVA = 105
                            //500
                        //RESULTADO FUNCION SUMA = 605

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
//555
console.log(nuevoPrecio);

