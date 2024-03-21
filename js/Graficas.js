// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

// Referenciar el data
const dbRef = firebase.database().ref('Backend/datos/Carro1');

// Obtenemos los valores 
dbRef.on('value', (snapshot) => {
    const data = snapshot.val(); //Obtener los datos

    //Procesamiento de datos 
    const velocidadData = data.velocidad;

    // Configuramos las graficas 
    var velocidadChart = new Chart(document.getElementById('velocidad-chart'), {
        type: 'line',
        data: {
            labels: ["Tiempo"], // Si la velocidad es un solo valor, establece una sola etiqueta
            datasets: [{
                label: 'Velocidad',
                data: [velocidadData], // Solo necesitas pasar el valor directamente
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension : 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
