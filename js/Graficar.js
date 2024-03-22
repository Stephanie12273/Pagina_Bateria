import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabse, ref, onValue, update} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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
