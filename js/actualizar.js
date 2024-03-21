// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue ,update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
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
const database = getDatabase(app);
const storage = getStorage(app); 
let uid;

onAuthStateChanged(auth, (user) => {
    if (user) {
        uid = user.uid; // Obtener el UID del usuario autenticado
        const userRef = ref(database, 'usuarios/' + uid); // Construir la referencia en la base de datos

        // Escuchar cambios en los datos del usuario
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val(); // Obtener los datos del usuario
            if (userData) {
                // Actualizar la interfaz de usuario con los datos del perfil
                document.getElementById("username").value = userData.nombre;
                document.getElementById("usercedula").value = userData.cedula;
                document.getElementById("usermotor").value = userData.motor;
                document.getElementById("userchasis").value = userData.chasis;

                console.log("datos presentados");

                
                // Otros datos de perfil...
            } else {
                alert("No se encontraron datos para el usuario");
            }
        });
    } else {
        // Usuario no autenticado, redirigir a la página de inicio de sesión
        window.location.href = "Login.html";
    }    
});

// Agregar event listener para el botón de "Actualizar"

document.getElementById("Actualizar").addEventListener("click", () => {
    const newName = document.getElementById("username").value;
    const newCedula = document.getElementById("usercedula").value;
    const newMotor = document.getElementById("usermotor").value;
    const newChasis = document.getElementById("userchasis").value;   

    // Actualizar los datos en la base de datos de Firebase
    update(ref(database, 'usuarios/' + uid), {
        nombre: newName,
        cedula: newCedula,
        motor: newMotor,
        chasis: newChasis,

    }).catch((error) => {
        console.error("Error al actualizar los datos:", error);
    });
    alert("Datos actualizados")
    
    
});

// cerrar sesion
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

