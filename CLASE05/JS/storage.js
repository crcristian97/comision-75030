import { setInfoStorage } from '../helpers/helper.js';
//storage es el almacenamiendo de datos en el navegador
//localStorage y sessionStorage

//localStorage nos permite guardar informacion inclusive cuando se cierra el navegador o se apaga el pc y se puede compartir entre pestañas
//sessionStorage es informacion que se elimina si apago la computadora o cierro el navegagor

//exiten 3 metodos para guardar informacon
//setItem()
//getItem()
//removeItem()

//setItem() es para guardar informacion (le envio la info a mi navegador)
//getItem() es para obtener informacion (obtengo la info del navegador)
//removeItem() es para eliminar informacion (elimino la informacion del navegador)

//localStorage.removeItem('nombreUsuario');
//localStorage.clear();

const prompNombre = prompt('Ingrese su nombre: ');
// antes localStorage.setItem('nombreUsuario', prompNombre);
setInfoStorage('nombreUsuario', prompNombre);

