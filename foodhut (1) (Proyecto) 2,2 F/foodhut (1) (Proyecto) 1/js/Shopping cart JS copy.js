// Array para almacenar los productos en el carrito
let carrito = [];
let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Agregar el producto al carrito
    carrito.push({ nombre, precio });
    
    // Actualizar el total
    total += precio;
    
    // Actualizar la vista del carrito
    actualizarCarrito();
}

// Función para actualizar la lista de productos en el carrito y el total
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`; // Usando template literal
        listaCarrito.appendChild(li);
    });
    // Mostrar el total actualizado
    document.getElementById('total').textContent = total.toFixed(2);
}

// Función para finalizar la compra
function finalizarCompra() {

    // Mostrar la sección de factura
    document.getElementById('factura').style.display = 'block';
    document.getElementById('carrito').style.display = 'none';

    const facturaDetalle = document.getElementById('factura-detalle');
    facturaDetalle.innerHTML = ''; // Limpiar la factura

    // Mostrar los productos en la factura
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = $;{item.nombre} - $$;{item.precio.toFixed(2)};
        facturaDetalle.appendChild(li);
    });
// Mostrar el total en la factura
document.getElementById('total-factura').textContent = total.toFixed(2);

}

// Función para imprimir la factura
function imprimirFactura() {
    window.print();
}