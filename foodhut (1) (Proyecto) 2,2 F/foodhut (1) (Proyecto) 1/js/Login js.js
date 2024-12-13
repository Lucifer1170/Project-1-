// Función para manejar el evento de inicio de sesión
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        showErrorMessage(errorMessage, 'Por favor, completa todos los campos.');
    } else {
        hideErrorMessage(errorMessage);
        alert("Inicio de sesión exitoso para: " + username);
        // Aquí puedes agregar lógica para enviar los datos al servidor
    }
}

// Función para redirigir al formulario de registro
function handleRegisterRedirect() {
    alert('Redirigiendo al formulario de registro...');
    // Cambia esta línea para redirigir a la página de registro real
    window.location.href = '/register';
}

// Función para mostrar el mensaje de error
function showErrorMessage(element, message) {
    element.textContent = message;
    element.style.display = 'block';
}

// Función para ocultar el mensaje de error
function hideErrorMessage(element) {
    element.style.display = 'none';
}

// Asignación de eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginButton').addEventListener('click', handleLogin);
    document.getElementById('registerLink').addEventListener('click', handleRegisterRedirect);
});