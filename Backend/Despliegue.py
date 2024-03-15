import csv
import random
from firebase import firebase 

firebase = firebase.FirebaseApplication("https://proyecto-48aa4-default-rtdb.firebaseio.com/",None)

# Función para generar datos simulados
def generar_datos_simulados():
    tiempo = 0
    datos = []
    for _ in range(1000):  # Generar datos para 10 puntos en el tiempo
        temperatura = random.uniform(20, 30)  # Temperatura en grados Celsius
        elevacion = random.uniform(0, 1000)  # Elevación en metros
        velocidad = random.uniform(5, 20)  # Velocidad en metros por segundo
        corriente = random.uniform(0, 5)  # Corriente en amperios
        datos.append([tiempo, temperatura, elevacion, velocidad, corriente])
        tiempo += 1  # Aumentar el tiempo en cada iteración
    return datos

# Función para escribir los datos en un archivo CSV
def escribir_datos_csv(datos, nombre_archivo):
    with open(nombre_archivo, 'w', newline='') as archivo_csv:
        escritor_csv = csv.writer(archivo_csv)
        # Escribir encabezados
        escritor_csv.writerow(['Tiempo', 'Temperatura (°C)', 'Elevación (m)', 'Velocidad (m/s)', 'Corriente (A)'])
        # Escribir datos
        escritor_csv.writerows(datos)

# Generar datos simulados
datos_simulados = generar_datos_simulados()

# Escribir datos en un archivo CSV
nombre_archivo = 'datos_sensor.csv'
escribir_datos_csv(datos_simulados, nombre_archivo)

print(f"Los datos se han guardado en el archivo '{nombre_archivo}'")

# Escribir los datos en la base de datos en tiempo real de Firebase
rest = firebase.post('/Backend/datos',datos_simulados)

print("Los datos se han cargado en Firebase.")
