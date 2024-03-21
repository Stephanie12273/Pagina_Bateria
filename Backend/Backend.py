from firebase import firebase
import pandas as pd
import time

firebase = firebase.FirebaseApplication("https://proyecto-48aa4-default-rtdb.firebaseio.com/", None)

df = pd.read_csv(r"C:\Users\Camilo Garcia\OneDrive - unimilitar.edu.co\Desktop\Universidad\Mantenimiento Preventido en la nube\Pagina_Bateria\Backend\TripA01.csv", encoding='latin1', sep=';')
velocidades = df["Velocity [km/h]"].tolist()
EstadoCarga = df["SoC [%]"].tolist()
Corriente = df["Battery Current [A]"].tolist()
Elevacion = df["Elevation [m]"].tolist()

# Enviar cada segundo valor de velocidad a Firebase
for i in range(0, len(velocidades), 2):
    firebase.post('/Backend/datos/Carro1', {'velocidad': velocidades[i]})
    firebase.post('/Backend/datos/Carro1',{'SoC': EstadoCarga[i]})
    firebase.post('/Backend/datos/Carro1',{'Corriente': Corriente[i]})
    firebase.post('/Backend/datos/Carro1',{'Elevacion': Elevacion[i]})      
    time.sleep(20)
