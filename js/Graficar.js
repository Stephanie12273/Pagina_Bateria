import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue, update} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBgBuZFXHhpoQKHyPDIObZjHVEl1R7OhgE",
    authDomain: "proyecto-48aa4.firebaseapp.com",
    databaseURL: "https://proyecto-48aa4-default-rtdb.firebaseio.com",
    projectId: "proyecto-48aa4",
    storageBucket: "proyecto-48aa4.appspot.com",
    messagingSenderId: "938336050215",
    appId: "1:938336050215:web:92bc33869a927a48510202"
};

// Iniciamos Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Obtencion de datos
const vel = ref(database, 'Backend/datos/Carro1');
console.log("Datos obtenidos");

// Ploteo en tiempo real
onValue(velRef, (snapshot) => {
    const velData = snapshot.val();
    const labels = Object.keys(velData);
    const data = Object.values(velData);

    // Destruir el gráfico anterior si existe
    if (velChart) {
        velChart.destroy();
    }

    // Actualizar la gráfica
    updateChart(labels, data);
});

// Función para actualizar la gráfica
function updateChart(labels, data) {
    var velChart = new Chart(document.getElementById('velocidad-chart'),{
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label:'velocidad',
                data: data,
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
}
