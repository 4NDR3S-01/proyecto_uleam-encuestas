import { auth } from '../data/firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";

function validarCorreo() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
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

    // Si el dominio es correcto, intentar iniciar sesión
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            window.location.href = 'panel.html';
        })
        .catch((error) => {
            // Error en el inicio de sesión
            errorSpan.textContent = error.message;
            errorSpan.style.visibility = 'visible';
        });

    return false; // Prevenir el envío del formulario
}

function redirectToRegister() {
    window.location.href = 'registro.html';
}

// Exponer funciones al ámbito global
window.validarCorreo = validarCorreo;
window.redirectToRegister = redirectToRegister;