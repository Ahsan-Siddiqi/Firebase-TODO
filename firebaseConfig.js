// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


// STEP 1: Declare Firebase Environment Variables  
const firebaseConfig = {
    apiKey: "YOUR-OWN-VARIABLE",
    authDomain: "YOUR-OWN-VARIABLE",
    projectId: "YOUR-OWN-VARIABLE",
    storageBucket: "YOUR-OWN-VARIABLE",
    messagingSenderId: "YOUR-OWN-VARIABLE",
    appId: "YOUR-OWN-VARIABLE",
};

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
