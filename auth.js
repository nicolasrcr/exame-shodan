import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

// LOGIN EMAIL/SENHA
window.login = function () {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;
  const error = document.getElementById("error");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(() => {
      if (error) error.innerText = "Usuário ou senha inválidos";
    });
};

// LOGIN GOOGLE
window.loginGoogle = function () {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((err) => {
      alert("Erro no login com Google");
      console.error(err);
    });
};

// PROTEÇÃO DAS PÁGINAS
onAuthStateChanged(auth, (user) => {
  const isLoginPage = location.pathname.includes("login");

  if (!user && !isLoginPage) {
    window.location.href = "login.html";
  }
});

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};
