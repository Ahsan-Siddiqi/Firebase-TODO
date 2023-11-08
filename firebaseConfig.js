// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// Firebase Environment Variables
const firebaseConfig = {
    apiKey: "AIzaSyDJmE4IygZbRDlCE--orzVGo8Wepub4kvo",
    authDomain: "learnwithfirebase-f5e6a.firebaseapp.com",
    projectId: "learnwithfirebase-f5e6a",
    storageBucket: "learnwithfirebase-f5e6a.appspot.com",
    messagingSenderId: "18082835905",
    appId: "1:18082835905:web:25e03f0ce0674a26831340",
};

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
