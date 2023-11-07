import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


export const signInUserWithGoogle = async () => {
    /*
    signs in user and signs up user, if they are signing up a doc in the db will be created for the user
    */
    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);

        const data = {
            uid: result.user.uid,
            email: result.user.email,
            createdAt: result.user.metadata.createdAt,
        };

        // if user does not exist make a doc for them in the db
        //await storeUserData(data);
        

        return { user: data, message: "success" };
    } catch (error) {
        console.error(error);
        return { user: null, message: "Error" };
    }
};