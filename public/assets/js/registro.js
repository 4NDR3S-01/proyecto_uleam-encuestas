import { auth, db } from '../data/firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-firestore.js";

function validarCorreo() {
    const nombre = document.getElementById('nombre').value;
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

    // Si el dominio es correcto, intentar registrar al usuario
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registro exitoso
            const user = userCredential.user;
            return setDoc(doc(db, "users", user.uid), {
                nombre: nombre,
                email: email
            });
        })
        .then(() => {
            window.location.href = 'panel.html';
        })
        .catch((error) => {
            errorSpan.textContent = error.message;
            errorSpan.style.visibility = 'visible';
        });

    return false; // Prevenir el envío del formulario
}

window.validarCorreo = validarCorreo;