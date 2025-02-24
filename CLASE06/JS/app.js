import { sortFuncion } from "./sortFuncion.js";
const alumnos = [
    {
        nombre: 'facundo',
        apellido: 'irigoitia',
        edad: '30',
        top10: true,
        entregaN1: true,
        sendTask1: true,
        encargadoCorreccion: 'cristian'
    },
    {
        nombre: 'maria',
        apellido: 'gonzalez',
        edad: '25',
        top10: false,
        entregaN1: true,
        sendTask1: false,
        encargadoCorreccion: 'diana'
    },
    {
        nombre: 'juan',
        apellido: 'perez',
        edad: '22',
        top10: true,
        sendTask1: true,
        encargadoCorreccion: 'cristian'
    },
    {
        nombre: 'laura',
        apellido: 'martinez',
        edad: '28',
        top10: false,
        sendTask1: true,
        encargadoCorreccion: 'diana'
    },
    {
        nombre: 'pedro',
        apellido: 'lopez',
        edad: '35',
        top10: true,
        sendTask1: true,
        encargadoCorreccion: 'cristian'
    },
    {
        nombre: 'ana',
        apellido: 'sanchez',
        edad: '27',
        top10: false,
        sendTask1: true,
        encargadoCorreccion: 'diana'
    },
    {
        nombre: 'jose',
        apellido: 'ramirez',
        edad: '31',
        top10: true,
        sendTask1: true,
        encargadoCorreccion: 'cristian'
    },
    {
        nombre: 'carla',
        apellido: 'torres',
        edad: '29',
        top10: false,
        sendTask1: true,
        encargadoCorreccion: 'diana'
    },
    {
        nombre: 'luis',
        apellido: 'fernandez',
        edad: '24',
        top10: true,
        sendTask1: true,
        encargadoCorreccion: 'cristian'
    },
    {
        nombre: 'sofia',
        apellido: 'castro',
        edad: '26',
        top10: false,
        sendTask1: true,
        encargadoCorreccion: 'diana'
    },
];

//necesito saber que en la comision de javascript de cristian cuantos quedaron en el top10
//-cuantos top10 alumnos tiene cristian
//-cuantos top10 alumnos sacamos en coderhouse

//ME ENCUENTRA EL PRIMER VALOR
/*const alumnosTop10ComisionCristian = alumnos.find((alumno) => {
    alumno.top10 === true
}
);
console.log(alumnosTop10ComisionCristian);
*/
const alumnosTop10ComisionCristian = alumnos.filter((alumno) => {
    return alumno.top10 === true; 
});

const entregaN1ComisionCristian = alumnos.filter((alumno) => {
    return alumno.sendTask1 === true && alumno.encargadoCorreccion === 'cristian'
})
// es que map me duelve un nuevo array permitiendo la inmutabilidad del objeto
/*
const entregaN1ComisionCristian2Map = alumnos.map((alumno) => {
    return alumno.sendTask1 === true && alumno.encargadoCorreccion === 'cristian'
})
*/
/*
// es que forEach no devuelve un nuevo array, sino que modifica el array original
const entregaN1ComisionCristianForEach = alumnos.forEach((alumno) => {
    return alumno.sendTask1 === true && alumno.encargadoCorreccion === 'cristian'
});
console.log(entregaN1ComisionCristian)
*/

//tosorted(). acomodame alfabeticamente 

const nombreOrden = sortFuncion(alumnos, 'nombre');
const top10Orden = sortFuncion(alumnos, 'top10');

console.log(nombreOrden);
console.log(top10Orden);
