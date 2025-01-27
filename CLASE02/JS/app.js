//Ciclo for:
//for es una palabra reservada
//Inicializacion, condicion y operador

//el ciclo for es un bucle --> loop


let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES'); //6
let texto = prompt('INGRESE TEXTO A REPETIR'); //Cristian crack
    
//Inicializacion index = 0
//Condicion index < cantidad
//si es falso cortamos el bucle
//Boolean: true o false
for (let index = 0; index < cantidad; index++) {
console.log(texto); //Cristian Crack
}

//¿Qué tiene que hacer este código?
//¿Por qué no cumple con su función?


let edadCampeonMundial = prompt('Sos mayor de edad y campeon del mundo?'); // 5
for (let index = 0; index < edadCampeonMundial; index++) {
    if (index < 18) {
      console.log("No podes pasar");
    }else {
      console.log("te muestro el DOM de la cervezeria");
      //se guarda en el localstorage t edad, o en la cookie;
    }
  //alert("lado");
}

//¿Qué tiene que hacer este código?
//¿Por qué no cumple con su función?
//¿Qué propuesta podrías hacer para que tenga sentido su uso?

let entrada = 'js1234';
let pass = 'js1234';

if(entrada == 'js1234'){
  //el usuario ingresa
}else {
  alert('contraseña incorrecta')
}



////////////////////////////////////////////////B
let entrada2 = 'js1234'


if(entrada2 == 'js1234'){
  //podes entrara
}else {
  alert("pass incorrecta")
}


let edad = '18';
//let edad = 18

//true
if(edad == 18){
  console.log("Podes entrar");
}

//false
if(edad === 18){
  console.log("Podes entrar");
}

//eL === COMPARA EL TIPO Y VALOR DE DATOS
//VALOR : 18
//TIPO ES STRING O NUMBER?
console.time("IF");
const diaFecha = 'Lunes';

if(diaFecha === 'Lunes'){
  console.log('es lunes');
}else if(diaFecha === 'Martes'){
  console.log('es martes');
}else if(diaFecha === 'Miercoles'){
  console.log('es miercoles');
}else if(diaFecha === 'Jueves'){
  console.log('es jueves');
}else if(diaFecha === 'Viernes'){
  console.log('es viernes');
}else if(diaFecha === 'Sabado'){
  console.log('es sabado');
}else if(diaFecha === 'Domingo'){
  console.log('es domingo');
}else {
  console.log('no es un dia de la semana');
}
console.timeEnd("IF");

console.time("SWITCH");
switch(diaFecha){
  case 'Lunes':
    console.log('es lunes');
    break;
  case 'Martes':
    console.log('es martes');
    break;
  case 'Miercoles':
    console.log('es miercoles');
    break;
  case 'Jueves':
    console.log('es jueves');
    break;
  case 'Viernes':
    console.log('es viernes');
    break;
  case 'Sabado':
    console.log('es sabado');
    break;
  case 'Domingo':
    console.log('es domingo');
    break;
  default:
    console.log('no es un dia de la semana');
}
console.timeEnd("SWITCH");


let ingresarNumero = '5'; //5
// En cada repetición, calculamos el número ingresado X el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero + " X " + i + " = " + resultado);
}


let entrada3 = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada3 != "ESC" ){
    alert("El usuario ingresó " + entrada); //5, cristian, 18, cntraseña, email.
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
