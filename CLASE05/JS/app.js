import { splitProduct, setInfoStorage, getInfoStorage } from '../helpers/helper.js';

const productosLocalStorage = getInfoStorage('productos de Gato');
const nombreUsuario = getInfoStorage('nombreUsuario');
/* antes
if(productosLocalStorage.length > 0){
    alert(`${nombreUsuario}!!!! termina tu compra, vení`);
}*/

if(productosLocalStorage){
    alert(`${nombreUsuario}!!!! termina tu compra, vení`);
}



class AlimentoGato{
    constructor(marcas = [], precio = [], tamaño = [], envase = [], color = '' ){
        this.marcas = marcas;
        this.precio = precio;
        this.tamaño = tamaño;
        this.envase = envase;
        this.color = color;
    }
};


//do while ya que no sabemos cuantas veces se va a repetir o cuantos productos se van a ingresar
const arrayAlimentos = [];
let promptEsc;

do {
    const marcaUsuario = prompt(`${nombreUsuario} Ingrese la marca del alimento: `);
    const precioUsuario = prompt(`${nombreUsuario} Ingrese el precio del alimento: `);
    const tamañoUsuario = prompt(`${nombreUsuario} Ingrese el tamaño del alimento: `);
    const envaseUsuario = prompt(`${nombreUsuario} Ingrese el envase del alimento: `);
    const colorUsuario = prompt(`${nombreUsuario} Ingrese el color del alimento: `);
    const alimentoGato7Vidas = new AlimentoGato([marcaUsuario], precioUsuario, tamañoUsuario, envaseUsuario, colorUsuario);
    arrayAlimentos.push(alimentoGato7Vidas);

    setInfoStorage('productos de Gato', JSON.stringify(arrayAlimentos));

    promptEsc = prompt('Apreta ESC asi no cargas mas productos');
} while (promptEsc !== 'ESC');


console.log(arrayAlimentos);

