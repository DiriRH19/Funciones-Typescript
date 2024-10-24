
interface Producto {
    nombre: string;
    precio: number;
    cantidad: number;
}

// Array para almacenar los productos
let inventario: Producto[] = [];


function agregarProducto(nombre: string, precio: number, cantidad: number): void {
    inventario.push({ nombre, precio, cantidad });
}


function buscarProducto(nombre: string): Producto[] {
    return inventario.filter(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}


function calcularValorTotalInventario(): number {
    return inventario.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}


agregarProducto("Manzana", 0.5, 100);
agregarProducto("Banana", 0.3, 200);
agregarProducto("Leche", 1.2, 50);

console.log(buscarProducto("Banana"));
console.log("Valor total del inventario:", calcularValorTotalInventario()); 