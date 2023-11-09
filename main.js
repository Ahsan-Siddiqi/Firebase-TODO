import { addItem } from './utilities/database/add.js';
import {loadTodoItems} from './utilities/database/fetch.js';

import { auth } from './firebaseConfig.js'; // Make sure the path is correct


// waits until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Listen to see if user is signed in
  auth.onAuthStateChanged(user => {
    // User is signed in
    if (user) {
      loadTodoItems();
    } 
    // User is signed out
    else {
      console.log('User is not signed in');
    }
  });
});

document.getElementById('new-todo-btn').addEventListener('click', addItem);
