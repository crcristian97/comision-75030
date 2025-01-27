//Pedir número mediante prompt() y sumarle otro nuevo número en cada repetición, realizando una salida por cada resultado (expresa el resultado de la operación).

//let numeroDni = parseInt(prompt("Ingrese su numero de DNI")); 40109439

//le voy a sumar 1 numero por cada persona que nace despues de mi
//for (let i = 40109400; i < numeroDni; i++) {
//  console.log(i);
//}


//Pedir un texto mediante prompt(), concatenar un valor adicional en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC” en el cuadro de diálogo.

/*let nombre = prompt("Ingrese un texto");

while ( nombre !== 'ESC') {
    let apellido = prompt("Ingrese su apellido");
                        //Cristian Cabrera
                        //CristianCabrera
                        //CristianCabrera
    let nombreCompleto = nombre + " " + apellido; //EM5
    console.log(nombreCompleto);
    nombre = prompt("Ingrese un texto");
} */

//Pedir un número por prompt(), repetir la salida del mensaje “Hola Coders!” X cantidad de veces, de acuerdo al número ingresado.

let numeroIngresado = parseInt(prompt("Ingrese un numero"));

for (let i = 0; i < numeroIngresado; i++) {
    console.log("Hola Coders!");
}



