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
const vel = ref (database, 'Backend/datos/Carro1');
console.log("Datos obtenidos");

// Ploteo en tiempo real
onValue (vel, (snapshot) => {
    const velData = snapshot.val();

    //Configuramos el primer plot
    var velChar = new Chart(document.getElementById('velocidad-chart'),{
        type: 'line',
        data: {
            labels: Object.keys(velData),
            datasets: [{
                label: 'Velocidad',
                data: Object.values(velData),
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

console.log("Graficas echas");
