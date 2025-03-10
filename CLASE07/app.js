
class Productos{
    constructor(nombre = '', precio = 0, stock = 0, descripcion = '', imagen = '', descuento = true) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = Number(stock);
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.descuento = descuento;
    }
}

const remera = new Productos('remera Nike', 2000, 10, 'remera de algodon nike', './img/camperaNorth.jpg', true);
const pantalon = new Productos('pantalon Nike', 2000, 10, 'pantalon de algodon nike', './img/camperaNorth.jpg', false);
const zapatilla = new Productos('zapatilla Nike', 1000, 10, 'zapatilla de algodon nike', './img/camperaNorth.jpg', true);
const gorra = new Productos('gorra Nike', 500, 10, 'gorra de algodon nike', './img/camperaNorth.jpg', false);
const remera2 = new Productos('remera Nike', 500, 10, 'remera de algodon nike', './img/camperaNorth.jpg', true);

const productosTotales = [remera, pantalon, zapatilla, gorra, remera2];
//aca vamos a insertar en el dom nuestros productos
 productosTotales.map((producto) =>{  
    const div = document.getElementById('productosTienda');
    const divProducto = document.createElement('div');
    divProducto.innerHTML += `
        <img src="${producto.imagen}" alt="${producto.nombre} title="${producto.nombre}">
        <h1 class="nombreProducto">${producto.nombre}</h1>
        <p class="descripcionProducto">${producto.descripcion}</p>
        <p class="precioProducto">${producto.precio}</p>
        <button class="botonAgregar" onclick="agregarAlCarrito()">Agregar al carrito</button>
    </div>
    `
    //cannot read properties of undefined (reading 'appendChild')
    div.appendChild(divProducto);
 });

 function agregarAlCarrito(){
    alert('Producto agregado al carrito');
 }