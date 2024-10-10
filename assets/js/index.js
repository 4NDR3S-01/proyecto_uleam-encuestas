function validarCorreo() {
    const email = document.getElementById('email').value;
    const errorSpan = document.getElementById('email-error');
    const dominioPermitido = '@live.uleam.edu.ec';

    // Limpiar mensaje de error previo
    errorSpan.textContent = '';

    // Verificar si el correo contiene el dominio permitido
    if (!email.endsWith(dominioPermitido)) {
        errorSpan.textContent = `El correo debe pertenecer al dominio ${dominioPermitido}`;
        errorSpan.style.visibility = 'visible';
        return false; // Prevenir el envío del formulario
    }
    return true; // Permitir el envío si el dominio es correcto
}

function redirectToRegister() {
    window.location.href = '/registro.html'; // Redirige a la página de registro
}
