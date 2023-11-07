import { signInUserWithGoogle } from "./SignInWithGoogle";

const testButton = document.getElementById("button");

const handleGoogleSignUp = async () => {
    const response = await signInUserWithGoogle();

    if (response.message === "Error") {
        router.push("/");
        console.log("Error")
    } 
};

testButton.addEventListener("click",handleGoogleSignUp);

// Check if a user is logged in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("User is logged in:", user.displayName);
      // You can access user information, such as user.uid, user.email, etc.
    } else {
      // User is signed out.
      console.log("User is not logged in");
    }
  });