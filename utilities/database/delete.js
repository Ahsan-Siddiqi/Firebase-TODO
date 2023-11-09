import { db, auth } from '../../firebaseConfig.js'; 
import { deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';
import { loadTodoItems } from './fetch.js';

export async function removeItem(id) {

    const userEmail = auth.currentUser.email; // Get the current users email 

    try {
        // Reference to the todo item in the users collection
        const todoItemDocRef = doc(db, `todo-items-${userEmail}`, id);

        // Delete the doucment referenced in todoItemDocRef
        deleteDoc(todoItemDocRef);
        loadTodoItems(); // Reload the items

    // If there was an error when deleting the item
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}

