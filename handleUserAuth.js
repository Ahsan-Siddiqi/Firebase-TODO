import { auth } from "./firebaseConfig.js"; // get our firebase auth instance
import { signInUserWithGoogle } from "./utilities/authentication/SignInWithGoogle.js";

auth.onAuthStateChanged(function (user) {
    if (user) {
        // user is signed in.
        console.log("User is logged in:", user.displayName);
        window.location.href = "todo.html";
    } else {
        // user is signed out.
        console.log("User is not logged in");
    }
});

const handleGoogleSignUp = async () => {
    const response = await signInUserWithGoogle();

    if (response === "error") {
        console.log("Error, user not signed in with Google");
    }
};

const testButton = document.getElementById("button");

testButton.addEventListener("click", handleGoogleSignUp);
