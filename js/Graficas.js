// Import the functions you need from the SDKs you need
import app from 'registo.js'

const database = getDatabase(app);

// Referencia a los datos de velocidad en la base de datos
const velocidadRef = ref(database, 'Backend/datos/Carro1/velocidad');

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
