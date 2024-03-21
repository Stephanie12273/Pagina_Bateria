// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, set, ref,child,update} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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
const database = getDatabase(app)
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
      updateUserProfile(user)
      
      const uid = user.uid;
      return uid;
      // ...
    } else {
      
      window.location.href="Login.html"
    }
});

function updateUserProfile(user){
    const nombre_usuario=user.displayName;
    const correo_elec=user.email;

    //
    document.getElementById("nombre_usuario").textContent=nombre_usuario;
    document.getElementById("correo_elec").textContent=correo_elec;
}

const logout = document.getElementById("fin_sesion");
logout.addEventListener('click',function logout(){
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href="Login.html"
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      });
});
