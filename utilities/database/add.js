import { db, auth } from '../../firebaseConfig.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';
import { loadTodoItems } from './fetch.js';


export async function addItem(event) {
    
    // Prevents the form from refreshing when submitting
    event.preventDefault();

    // Get the HTML element holding the new todo item 
    const textInput = document.getElementById("todo-input");

    // Holds the new todo item and removes any extra whitespace
    const text = textInput.value.trim();

    // if the input was empty
    if (text === "") {
        console.log("No todo item entered");
        return;
    }

    // if the user is signed in
    if (auth.currentUser) {

        // Get the current users email
        const userEmail = auth.currentUser.email; 

        try {

            //Add the new todo item to the collection
            await addDoc(collection(db, `todo-items-${userEmail}`), {
                text: text, // text of the todo item
            });

            textInput.value = ''; // Clears the input feild 
            loadTodoItems(); // Reload the items

        // If there was an error adding the item
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    } 
    
    // if the user is not signed in
    else {
        console.log("User is not currently signed in");
    }
}
