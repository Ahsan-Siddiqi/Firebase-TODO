// This is the entry point file that will import and initialize the functions from other modules.

import { addItem } from './utilities/database/add.js';
import {loadTodoItems} from './utilities/database/fetch.js';


document.addEventListener('DOMContentLoaded', () => {
    loadTodoItems(); 
    document.getElementById('new-todo-btn').addEventListener('click', addItem);
    
});
