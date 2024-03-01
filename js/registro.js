// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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


//button
const submit = document.getElementById('registerButton');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  //inputs
  const nombre = document.getElementById('fullname').value;
  const cedula = document.getElementById('cedula').value;
  const motor = document.getElementById('motor').value;
  const chasis = document.getElementById('chasis').value;
  const email = document.getElementById('correo').value;
  const password = document.getElementById('contrasena').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("creando usuario ...")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
})


