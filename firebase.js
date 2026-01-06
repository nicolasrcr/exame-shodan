import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVDnWeAciyfCvkIP5h6A_4wzF_wuhQ8cE",
  authDomain: "exame-shodan.firebaseapp.com",
  projectId: "exame-shodan",
  storageBucket: "exame-shodan.firebasestorage.app",
  messagingSenderId: "946521490986",
  appId: "1:946521490986:web:9c60dc59567cd98116a553"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
