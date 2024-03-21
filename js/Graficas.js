// Importar las funciones necesarias de la SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBgBuZFXHhpoQKHyPDIObZjHVEl1R7OhgE",
    authDomain: "proyecto-48aa4.firebaseapp.com",
    databaseURL: "https://proyecto-48aa4-default-rtdb.firebaseio.com/",
    projectId: "proyecto-48aa4",
    storageBucket: "proyecto-48aa4.appspot.com",
    messagingSenderId: "938336050215",
    appId: "1:938336050215:web:92bc33869a927a48510202"
};

// Inicializar la aplicación de Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Referencia a la base de datos de Firebase
const db = getDatabase(firebaseApp);

// Referencia a los datos de velocidad en la base de datos
const velocidadRef = ref(db, 'Backend/datos/Carro1/velocidad');

// Obtener los valores de velocidad y actualizar el gráfico cuando cambian
onValue(velocidadRef, (snapshot) => {
    const velocidadData = snapshot.val();
    
    // Configurar el gráfico de velocidad
    var velocidadChart = new Chart(document.getElementById('velocidad-chart'), {
        type: 'line',
        data: {
            labels: Object.keys(velocidadData),
            datasets: [{
                label: 'Velocidad',
                data: Object.values(velocidadData),
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
