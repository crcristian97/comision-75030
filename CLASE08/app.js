// Array de productos para simular un e-commerce
const productos = [
    {
        id: 1,
        nombre: "Smartphone Galaxy S23",
        precio: 999.99,
        descripcion: "Último modelo de Samsung con cámara de alta resolución y batería de larga duración",
        categoria: "Electrónica",
        imagen: "https://example.com/galaxy-s23.jpg",
        stock: 15
    },
    {
        id: 2,
        nombre: "Laptop MacBook Pro",
        precio: 1499.99,
        descripcion: "Potente laptop con procesador M2, 16GB RAM y 512GB SSD",
        categoria: "Computadoras",
        imagen: "https://example.com/macbook-pro.jpg",
        stock: 10
    },
    {
        id: 3,
        nombre: "Auriculares Bluetooth Sony",
        precio: 199.99,
        descripcion: "Auriculares inalámbricos con cancelación de ruido y 30 horas de batería",
        categoria: "Audio",
        imagen: "https://example.com/sony-headphones.jpg",
        stock: 25
    },
    {
        id: 4,
        nombre: "Smart TV 55 pulgadas",
        precio: 699.99,
        descripcion: "Televisor 4K con sistema operativo Android TV y sonido envolvente",
        categoria: "Electrónica",
        imagen: "https://example.com/smart-tv.jpg",
        stock: 8
    },
    {
        id: 5,
        nombre: "Zapatillas deportivas Nike",
        precio: 129.99,
        descripcion: "Zapatillas para running con tecnología de amortiguación avanzada",
        categoria: "Calzado",
        imagen: "https://example.com/nike-shoes.jpg",
        stock: 30
    },
    {
        id: 6,
        nombre: "Cámara DSLR Canon",
        precio: 849.99,
        descripcion: "Cámara profesional con sensor de 24MP y grabación de video 4K",
        categoria: "Fotografía",
        imagen: "https://example.com/canon-camera.jpg",
        stock: 12
    },
    {
        id: 7,
        nombre: "Reloj inteligente Apple Watch",
        precio: 399.99,
        descripcion: "Smartwatch con monitoreo de salud, GPS y resistencia al agua",
        categoria: "Wearables",
        imagen: "https://example.com/apple-watch.jpg",
        stock: 20
    },
    {
        id: 8,
        nombre: "Consola PlayStation 5",
        precio: 499.99,
        descripcion: "Consola de última generación con gráficos de alta fidelidad y carga rápida",
        categoria: "Videojuegos",
        imagen: "https://example.com/ps5.jpg",
        stock: 5
    },
    {
        id: 9,
        nombre: "Tablet iPad Air",
        precio: 599.99,
        descripcion: "Tablet ligera y potente con pantalla Retina y compatibilidad con Apple Pencil",
        categoria: "Computadoras",
        imagen: "https://example.com/ipad-air.jpg",
        stock: 18
    },
    {
        id: 10,
        nombre: "Altavoz inteligente Amazon Echo",
        precio: 99.99,
        descripcion: "Altavoz con asistente virtual Alexa y sonido de alta calidad",
        categoria: "Audio",
        imagen: "https://example.com/amazon-echo.jpg",
        stock: 22
    }
];

// Función para mostrar productos en el HTML
function mostrarProductos(productos = []) {
    const contenedor = document.getElementById("contenedor");
    alert('hola');
    contenedor.innerHTML = `
    <h1 class="text-3xl font-bold text-center my-4 text-blue-600">Catálogo de productos disponibles:</h1>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        ${productos.map(producto => `
            <li class="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">${producto.nombre}</h2>
                <p class="text-gray-600 mb-3">${producto.descripcion}</p>  
                <p class="text-lg font-bold text-green-600 mb-1">$${producto.precio}</p>
                <p class="text-sm text-gray-500 mb-3">Stock: ${producto.stock}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Agregar al carrito</button>
            </li>
        `).join('')}
    </ul>   
    `
}

// Llamar a la función para mostrar los productos
mostrarProductos(productos);

function respuestaClick(mensaje){
    alert(mensaje);
}

const buttonHelp = document.getElementById('buttonHelp');
//buttonHelp.addEventListener('click', respuestaClick); //1 forma
buttonHelp.addEventListener('click', respuestaClick('agregar al carrito')); //1 forma

/*buttonHelp.addEventListener('click', () => {
    alert('agregar al carrito');
}) 2da forma */

setTimeout(() => {
    alert('hola');
}, 1000);