// Import SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Configuração Firebase do TRICAGO
const firebaseConfig = {
  apiKey: "AIzaSyCJe0ZRuCugrunqEe4LlBTTp1X7jn3MeyE",
  authDomain: "tricago1-90bd5.firebaseapp.com",
  projectId: "tricago1-90bd5",
  storageBucket: "tricago1-90bd5.firebasestorage.app",
  messagingSenderId: "584408202105",
  appId: "1:584408202105:web:f44c9aca39a6c20aa34da8",
  measurementId: "G-GWX96Y20TC"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
