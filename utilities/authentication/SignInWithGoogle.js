import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "../../firebaseConfig.js";

export const signInUserWithGoogle = async () => {
    /*
    signs in user and signs up user, if they are signing up a doc in the db will be created for the user
    */

    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);

        const data = {
            uid: result.user.uid,
            email: result.user.email,
            createdAt: result.user.metadata.createdAt,
        };

        return { user: data, message: "success" };
    } catch (error) {
        console.error(error);
        return { user: null, message: "error" };
    }
};
