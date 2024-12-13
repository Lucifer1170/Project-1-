// Función para cargar y mostrar la factura
function cargarFactura() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = localStorage.getItem('total') || '0.00';

    const facturaDetalle = document.getElementById('factura-detalle');
    const totalFactura = document.getElementById('total-factura');

    facturaDetalle.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = $;{item.nombre} - $$;{item.precio.toFixed(2)};
        facturaDetalle.appendChild(li);
    });

    totalFactura.textContent = total;
}

// Función para imprimir la factura
function imprimirFactura() {
    window.print();
}

// Cargar la factura al cargar la página
document.addEventListener('DOMContentLoaded',cargarFactura);