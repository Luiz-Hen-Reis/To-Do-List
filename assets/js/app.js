let input = document.querySelector('#todoInput');
let addTodo = document.querySelector('form button');
let todoList = document.querySelector('.todoList');

document.addEventListener('DOMContentLoaded', getTodos);
addTodo.addEventListener('click', (e) => {
    e.preventDefault();

    let inputValue = input.value;

    if (inputValue !== '') {

        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const todo = document.createElement('span');
        todo.innerHTML = inputValue;
        todo.style.marginLeft = '10px';
        todoItem.appendChild(todo);

        saveLocalTodos(inputValue);

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

        function removeTodo(e) {
            removeLocalTodos(todo.innerHTML);
            todoItem.remove();
        }

        todoList.appendChild(todoItem);

        input.value = '';
    }

});


function saveLocalTodos(todo) {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;

    if (localStorage.getItem('todos') === null) {
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
            removeLocalTodos(todo.innerHTML);
            todoItem.remove();
        }

        todoList.appendChild(todoItem);

    })
}

function removeLocalTodos(td) {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.splice(todos.indexOf(td), 1);

    localStorage.setItem('todos', JSON.stringify(todos));
}