// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwsD0NtXETXilPN-TyP3G29SIW7D3ZPuI",
    authDomain: "todo-with-firebase-639fa.firebaseapp.com",
    projectId: "todo-with-firebase-639fa",
    storageBucket: "todo-with-firebase-639fa.appspot.com",
    messagingSenderId: "1080296922459",
    appId: "1:1080296922459:web:4433d89d83c6692c870e7e"

  };
  
  

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
