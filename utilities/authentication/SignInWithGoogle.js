import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "../../firebaseConfig.js";

// Function handles the users signin with their google account 
export async function signInUserWithGoogle () {

    /* STEP 2: Create a new instance of the Firebase Google Authenticator Proivider
    We are going to look at the following documentation to figure out how we might do 
    this: https://firebase.google.com/docs/auth/web/google-signin */

    try {

        /* STEP 3: Create a pop-up window to appear so users may enter there google emails to
        complete the authetication process. We are going to look at the following documentation 
        to figure out how we might do this: https://firebase.google.com/docs/auth/web/google-signin */

        // return the string "success" if sign-in was complete
        return "success";
    
    // If there was an error when signing-in
    } catch (error) {
        console.error(error);
        return "error";
    }
};








