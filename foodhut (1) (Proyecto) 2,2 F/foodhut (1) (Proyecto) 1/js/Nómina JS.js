function convertUSDtoCOP(usdAmount) {
    return usdAmount * USD_TO_COP;
}

let amountInUSD = 100;
let amountInCOP = convertUSDtoCOP(amountInUSD);
  console.log(amountInCOP); // Output: 400000
// Salario base en USD
const SALARIO_BASE_USD = 1300;

// Lista de empleados con nombres y apellidos aleatorios
const empleados = [
    { nombre: "Carlos Gómez" },
    { nombre: "Ana Martínez" },
    { nombre: "Juan Pérez" },
    { nombre: "Sofía Ramírez" },
    { nombre: "Luis Torres" }
];

// Función para calcular prestaciones
function calcularPrestaciones(salarioBaseCOP) {
    const cesantias = salarioBaseCOP; // Cesantías (1 mes de sueldo)
    const interesesCesantias = cesantias * 0.12; // Intereses sobre cesantías (12%)
    const prima = salarioBaseCOP; // Prima de servicios (1 mes de sueldo)
    const vacaciones = salarioBaseCOP * 0.0833; // Vacaciones (8.33%)
    const totalPrestaciones = cesantias + interesesCesantias + prima + vacaciones;

    return { cesantias, interesesCesantias, prima, vacaciones, totalPrestaciones };
}

// Función para generar la nómina
function generarNomina() {
    const tablaNomina = document.getElementById("tabla-nomina");
    tablaNomina.innerHTML = ""; // Limpiar la tabla

    const salarioBaseCOP = SALARIO_BASE_USD * USD_TO_COP; // Convertir salario a COP

    empleados.forEach(empleado => {
        const prestaciones = calcularPrestaciones(salarioBaseCOP);
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${empleado.nombre}</td>
            <td>${salarioBaseCOP.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
            <td>${prestaciones.cesantias.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
            <td>${prestaciones.interesesCesantias.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
            <td>${prestaciones.prima.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
            <td>${prestaciones.vacaciones.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
            <td>${prestaciones.totalPrestaciones.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</td>
        `;
        tablaNomina.appendChild(fila);
    });
}

// Generar la nómina al cargar la página
document.addEventListener("DOMContentLoaded", generarNomina);