import { db, auth } from '../../firebaseConfig.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';
import { removeItem } from './delete.js';

export async function loadTodoItems() {

    // Get the current users email
    const userEmail = auth.currentUser.email; 

    try {
        // References the users collection
        // Collection holds the specific todo items the user has 
        const userTodoItemsCollectionRef = collection(db, `todo-items-${userEmail}`);

        // Fetches all documents from the users collection 
        const querySnapshot = await getDocs(userTodoItemsCollectionRef);

        // Selects the HTML element that will contain the todo items
        const itemsContainer = document.querySelector('.todo-items');

        // Clear the container before displaying the updated list
        itemsContainer.innerHTML = ''; 

        // Loops over each document in the collection
        querySnapshot.forEach((doc) => {
            
            // Create the main div for the to-do item
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            // Create the bullet div
            const bulletDiv = document.createElement('div');
            bulletDiv.className = 'bullet';

            // Create the div for the to-do text
            const todoTextSpan = document.createElement('div');
            todoTextSpan.className = 'todo-text';
            todoTextSpan.textContent = doc.data().text;

            // Create the remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'removeBtn'; 
            removeButton.onclick = () => removeItem(doc.id);

            // Append the bullet, text, and button to the item div
            itemDiv.appendChild(bulletDiv);
            itemDiv.appendChild(todoTextSpan);
            itemDiv.appendChild(removeButton);

            // Append the item div to the container
            itemsContainer.appendChild(itemDiv);
        });
    
    // If there was an error when fetching the items
    } catch (error) {
        console.error("Error loading todo items: ", error);
    }
}

// Call the function to load items when the script loads
loadTodoItems();
