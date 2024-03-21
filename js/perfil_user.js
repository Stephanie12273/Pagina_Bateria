// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue   } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgBuZFXHhpoQKHyPDIObZjHVEl1R7OhgE",
    authDomain: "proyecto-48aa4.firebaseapp.com",
    databaseURL: "https://proyecto-48aa4-default-rtdb.firebaseio.com",
    projectId: "proyecto-48aa4",
    storageBucket: "proyecto-48aa4.appspot.com",
    messagingSenderId: "938336050215",
    appId: "1:938336050215:web:92bc33869a927a48510202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app)



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid; // Obtener el UID del usuario autenticado
        const userRef = ref(database, 'usuarios/' + uid); // Construir la referencia en la base de datos

        // Escuchar cambios en los datos del usuario
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val(); // Obtener los datos del usuario
            if (userData) {
                // Actualizar la interfaz de usuario con los datos del perfil
                document.getElementById("nombre_usuario").textContent = userData.nombre;
                document.getElementById("correo_elec").textContent = userData.email;
                document.getElementById("cedula").textContent = userData.cedula;
                document.getElementById("motor").textContent = userData.motor;
                document.getElementById("chasis").textContent = userData.chasis;
                // Otros datos de perfil...
            } else {
                console.log("No se encontraron datos para el usuario");
            }
        });
    } else {
        // Usuario no autenticado, redirigir a la página de inicio de sesión
        window.location.href = "Login.html";
    }
});

function updateUserProfile(user) {    
    const correo_elec = user.email;      
    document.getElementById("correo_elec").textContent = correo_elec;
}





const logout = document.getElementById("fin_sesion");
logout.addEventListener('click', function logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "Login.html"
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });
});




