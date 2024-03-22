import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue, update} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {chart} from "node_modules\chart.js";

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

// obtener la referencia a los datos de velocidad en firebase
const velref = ref(database, "Backend/datos/Carro1");

// Crear el gráfico utilizando Chart.js
const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Velocidad",
                data: [],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
,        ]
    },
});

//
onValue(velref, (snapshot) =>{
    const datosCarro1 = snapshot.val();

    Object.values(datosCarro1).forEach((dato) =>{
        const velocidad = dato.velocidad;
        chart.data.labels.push(new Date().toLocaleTimeString());
        chart.data.datasets[0].data.push(velocidad);
    });
    Chart.update();
});