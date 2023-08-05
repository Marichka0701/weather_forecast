import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDr44-SL-7Lwvp7cek4tRmHL5A2VMrcllA",
    authDomain: "tripforecast-d3b0d.firebaseapp.com",
    projectId: "tripforecast-d3b0d",
    storageBucket: "tripforecast-d3b0d.appspot.com",
    messagingSenderId: "132664203417",
    appId: "1:132664203417:web:c94ce707263ec15e8ac008"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
