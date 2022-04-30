let input = document.querySelector('#todoInput');
let addTodo = document.querySelector('form button');
let todoList = document.querySelector('.todoList');

document.addEventListener('DOMContentLoaded', getTodos);
addTodo.addEventListener('click', (e) => {
    e.preventDefault();

    let inputValue = input.value;

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todo = document.createElement('span');
    todo.innerHTML = inputValue;
    todoItem.appendChild(todo);

    saveTodos(inputValue);

    const buttonCheck = document.createElement('button');
    buttonCheck.innerHTML = `<i class="fa fa-solid fa-check"></i>`;
    todoItem.appendChild(buttonCheck);

    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('remove-todo');
    buttonRemove.innerHTML = `<i class="fa fa-solid fa-eraser"></i>`;
    todoItem.appendChild(buttonRemove);

    buttonCheck.addEventListener('click', checkTodo);
    buttonRemove.addEventListener('click', removeTodo);
    
    function checkTodo() {
        todoItem.classList.add('checked');
        todo.style.color = '#00A86B';
        buttonCheck.style.color = '#00A86B';
    }

    function removeTodo() {
        todoItem.style.display = 'none';
    }

    todoList.appendChild(todoItem);

    input.value = '';
});


function saveTodos(todo) {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach((td) => {
        const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todo = document.createElement('span');
    todo.innerHTML = td;
    todoItem.appendChild(todo);
    todo.style.marginLeft = '10px';

    const buttonCheck = document.createElement('button');
    buttonCheck.innerHTML = `<i class="fa fa-solid fa-check"></i>`;
    todoItem.appendChild(buttonCheck);

    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('remove-todo');
    buttonRemove.innerHTML = `<i class="fa fa-solid fa-eraser"></i>`;
    todoItem.appendChild(buttonRemove);

    buttonCheck.addEventListener('click', checkTodo);
    buttonRemove.addEventListener('click', removeTodo);
    
    function checkTodo() {
        todoItem.classList.add('checked');
        todo.style.color = '#00A86B';
        buttonCheck.style.color = '#00A86B';
    }

    function removeTodo() {
        todoItem.style.display = 'none';
    }

    todoList.appendChild(todoItem);

    })
}
