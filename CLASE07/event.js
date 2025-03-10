//1 FORMA DE DAR EVENTOS AL BUTTON
const boton = document.getElementById('botonClick');
boton.addEventListener('click', saludar());

function saludar(){
    alert('Hola');
}

//2 forma de dar eventos
boton.addEventListener('click', () => {
    alert('Hola');
});

//3er forma de dar envetos
boton.onclick = () => {
    alert('Hola');
};

w.onkeydown = (event) => {
    console.log(event);
}