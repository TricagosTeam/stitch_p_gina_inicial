import { 
    auth, 
    provider 
  } from './firebase-config.js';
  
  import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut 
  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  
  // === Registro ===
  export async function registerUser(email, password) {
    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  }
  
  // === Login ===
  export async function loginUser(email, password) {
    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login realizado com sucesso!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }
  }
  
  // === Login com Google ===
  export async function loginWithGoogle() {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "index.html";
    } catch (error) {
      alert("Erro no login com Google: " + error.message);
    }
  }
  
  // === Recuperação de senha ===
  export async function resetPassword(email) {
    if (!email) {
      alert("Informe seu e-mail para redefinir a senha.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("E-mail de recuperação enviado!");
    } catch (error) {
      alert("Erro: " + error.message);
    }
  }
  
  // === Proteção de Rotas ===
  export function protectRoute() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "login.html";
      }
    });
  }
  
  // === Logout ===
  export async function logoutUser() {
    await signOut(auth);
    window.location.href = "login.html";
  }
  