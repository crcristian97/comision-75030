//Arrays - son estructuras de datos que nos permiten almacenar una lista de datos
//Los arrays tienen indice que arrancan en 0
//Los arrays puede ser de cualquier tipo de dato

const dolarCompra = [1185, 1035, 1188, 1196, 1208];
const dolarVenta = [1205, 1075, 1193, 1220, 1212, 1398];

console.log("Dolar blue Compra: ", dolarCompra[0]);
console.log("Dolar blue Venta: ", dolarVenta[0]);

const entregasTotal = ['Julian Seltenreich - entrega 1', 'Juan Perez - entrega 2', 'Pedro Gomez - entrega 3', 'Juan Perez - entrega 4', 'Pedro Gomez - entrega 5' , 'Julian Seltenreich - entrega 6', 'Juan Perez - entrega 7', 'Pedro Gomez - entrega 8', 'Juan Perez - entrega 9', 'Pedro Gomez - entrega 10' , 'Julian Seltenreich - entrega 11', 'Juan Perez - entrega 12', 'Pedro Gomez - entrega 13', 'Juan Perez - entrega 14', 'Pedro Gomez - entrega 15' , 'Julian Seltenreich - entrega 16', 'Juan Perez - entrega 17', 'Pedro Gomez - entrega 18', 'Juan Perez - entrega 19', 'Pedro Gomez - entrega 20' , 'Cristian - entrega 21'];

const nuevoAlumno = 'Cristian Cabrera - entrega 23';
entregasTotal.push(nuevoAlumno);


console.log("Todas (", entregasTotal.length, ")");
console.log(`Todas (${entregasTotal.length})`); //ESM6


const alumnosZoom = ['Antonella', 'julian', 'Diana', 'Cristian'];

const alumno = prompt('Ingrese el nombre del alumno');
//Chequear que alumno se encuentra o no en el zoom
if(alumnosZoom.indexOf(alumno)){
    console.log("el alumno si esta, asi que se le pasa presente");
};

if(alumnosZoom.includes(alumno)){
    console.log("el alumno si esta, asi que se le pasa presente");
};

//Javascript esta orientado a objectos, por lo que todo se trabaja con objetos
//el objeto tiene propiedades : clave valor

const profesorJavascriptFlex = {
    nombre: 'Cristian',
    apellido : 'Cabrera',
    edad : 30,
    email : 'cristian@gmail.com',
    accesoLinkAsistencia: true,
    accesoLinkDesafios: true,
    telefono : '1234567890',
    rol: 'profesor',
    entregas: []
}

const tutorJavascriptFlex = {
    nombre: 'Diana',
    apellido: 'Gomez',
    edad: 28,
    email: 'diana@gmail.com',
    accesoLinkAsistencia: false,
    accesoLinkDesafios: false,
    telefono: '1234567890',
    rol: 'tutor',
    entregas: []
}

const alumnoComision75030 = {
    nombre: 'Leandro',
    apellido: 'Gomez',
    edad: 25,
    email: 'leandro@gmail.com',
    accesoLinkAsistencia: false,
    accesoLinkDesafios: false,
    telefono: '1234567890',
    rol: 'alumno',
    entregas: ['Entrega 1', 'Entrega 2', 'Entrega 3']
};

/*const comision75030 = [profesorJavascriptFlex, tutorJavascriptFlex, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030, alumnoComision75030];*/


class Coderhouse{
    constructor(rol = '', comisión = 0, nombre = '', apellido = '', email = '', telefono = '', imagen = '', 
        edad = 0) {
        this.rol = rol;
        this.comisión = Number(comisión);
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.imagen = imagen;
        this.edad = Number(edad);
    }
}

const comision75030 = [];

const profesor75030 = new Coderhouse('profesor', 75030, 'cristian', 'cabrera', 'cristian@gmail.com', '1234567890', 'imgProfe.jpg', 30);
const tutora75030 = new Coderhouse('tutor', 75030, 'diana', 'gomez', 'diana@gmail.com', '1234567890', 'imgTutor.jpg', 28);
const alumno75030Leandro = new Coderhouse('alumno', 75030, 'leandro', 'gomez', 'leandro@gmail.com', '1234567890', 'imgAlumno.jpg', 25);
const alumno75030Juan = new Coderhouse('alumno', 75030, 'juan', 'perez', 'juan@gmail.com', '1234567890', 'imgAlumno.jpg', 25);
const alumno75030Pedro = new Coderhouse('alumno', 75030, 'pedro', 'gomez', 'pedro@gmail.com', '1234567890', 'imgAlumno.jpg', 25);
const profesor66030 = new Coderhouse('profesor', 66030, 'antonella', 'gomez', 'antonella@gmail.com', '1234567890', 'imgProfe.jpg', 25);

if(profesor75030.comisión === 75030){
    comision75030.push(profesor75030);
};

if(tutora75030.comisión === 75030){
    comision75030.push(tutora75030);
};

if(alumno75030Leandro.comisión === 75030){
    comision75030.push(alumno75030Leandro);
};