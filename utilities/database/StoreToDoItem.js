import { collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "../../firebaseConfig.js";

export async function storeToDoItem(userId, userEmail, itemText) {
    try {
        // get a reference to the collection we want to store in (user specific, since we use a userId)
        const userTodoListCollection = collection(db, `todo-list-${userId}`);

        // generate a unique id for the document and assemble our data into an object
        const docUniqueId = generateUniqueId();
        const data = {
            userId: userId, // user ID
            email: userEmail, // user email
            itemText: itemText, // the todo item
            uid: docUniqueId, // uniqie id associated with the document
        };

        // store the following data in a document the specified user collection
        // userTodoListCollection -> the collection we store into
        // docUniqueId -> the name of our document
        // data -> the data object the document will contain
        await setDoc(doc(userTodoListCollection, docUniqueId), data);
    } catch (error) {
        console.error("Error storing data:", error);
        throw new Error("Failed to store item!");
    }
}

// helper function for storeToDoItem that generates a unique Id
// we need this so that we can get a referance each document
function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    const uniqueId = `${timestamp}_${randomNum}`;
    return uniqueId;
}
