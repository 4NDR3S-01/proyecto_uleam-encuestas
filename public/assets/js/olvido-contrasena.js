import { auth } from './firebase-config.js';
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";

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

    // Si el dominio es correcto, enviar correo de recuperación
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Se ha enviado un correo para restablecer tu contraseña.");
            window.location.href = 'index.html';
        })
        .catch((error) => {
            errorSpan.textContent = error.message;
            errorSpan.style.visibility = 'visible';
        });

    return false; // Prevenir el envío del formulario
}

window.validarCorreo = validarCorreo;