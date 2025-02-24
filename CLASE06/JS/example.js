
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

const remera = new Productos('remera Nike', 2000, 10, 'remera de algodon nike', 'imgRemera.jpg', true);
const pantalon = new Productos('pantalon Nike', 2000, 10, 'pantalon de algodon nike', 'imgPantalon.jpg', false);
const zapatilla = new Productos('zapatilla Nike', 1000, 10, 'zapatilla de algodon nike', 'imgZapatilla.jpg', true);
const gorra = new Productos('gorra Nike', 500, 10, 'gorra de algodon nike', 'imgGorra.jpg', false);
const remera2 = new Productos('remera Nike', 500, 10, 'remera de algodon nike', 'imgRemera.jpg', true);

const productosTotales = [remera, pantalon, zapatilla, gorra, remera2];

//quiero encontrar el producto que me filtre el usuario
const productoUsuario = prompt('que producto queres')

const productoFilter = productosTotales.filter((producto) => {
    return producto.nombre === productoUsuario;
});

const productoMayorPrecio = productosTotales.filter((producto) => {
   return producto.precio > 2000
});

const productoIVA = productosTotales.map((producto) => {
    return {
        nombre: producto.nombre.toUpperCase(),
        precio: producto.precio * 1.21,
        stock: producto.stock,
        descripcion: producto.descripcion,
        imagen: producto.imagen,
        descuento: producto.descuento
    }
});

console.log("Producto encontrado: ", productoFilter);
console.log("Productos mayores a 2500000", productoMayorPrecio);
console.log("Precio con IVA", productoIVA);

//vamos a usar el reduce para otro ejemplo
// que podemos hacer con el reduce

const total = productosTotales.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
}, 0);

console.log("Total de los productos", total);

