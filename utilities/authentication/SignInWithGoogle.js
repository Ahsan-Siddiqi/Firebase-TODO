import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "../../firebaseConfig.js";

export const signInUserWithGoogle = async () => {
    /*
    signs in user and signs up user, if they are signing up a doc in the db will be created for the user
    */

    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);

        return "success";
    } catch (error) {
        console.error(error);
        return "error";
    }
};
