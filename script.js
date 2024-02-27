'use strict';

import todos from "./assets/data/data.json" assert{type: 'json'};

const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.getElementById('todo-list');

function renderTodos() {
    const markup = todos.map((todo)=>{
        return `<li>${todo.title}</li>`
    }).join('');
    list.innerHTML = markup
}
renderTodos();

function addTodo() {
    const text = input.value.trim()

        const newTodo = {
            id: todos.length + 1,
            title: text
        };
    
        todos.push(newTodo)
        input.value = '';
        renderTodos();
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
});  