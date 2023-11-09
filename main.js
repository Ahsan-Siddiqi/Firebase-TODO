import { addItem } from './utilities/database/add.js';
import {loadTodoItems} from './utilities/database/fetch.js';


loadTodoItems(); 
document.getElementById('new-todo-btn').addEventListener('click', addItem);


