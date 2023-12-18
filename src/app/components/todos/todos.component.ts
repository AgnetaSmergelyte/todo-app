import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [];
  inputTodo:string = "";
  editingTodoInput:string = "";
  constructor() {
    this.loadTodosFromLocalStorage();
  }

  loadTodosFromLocalStorage(): void {
    const storedData = localStorage.getItem('todo-list');

    if (storedData) {
      try {
        const parsedData: Todo[] = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          this.todos = parsedData;
        } else {
          console.error('Invalid data format in localStorage. Expected an array.');
        }
      } catch (error) {
        console.error('Error parsing data from localStorage:', error);
      }
    } else {
        this.todos = [
          {
            content: 'Write to Agneta',
            completed: false,
            editing: false
          },
          {
            content: 'Have a wonderful day',
            completed: false,
            editing: false
          }
        ]
    }
  }

  toggleDone (id: number) {
    this.todos.map((v, i) => {
      if (i === id && !v.editing) v.completed = !v.completed;
      return v;
    })
    localStorage.setItem('todo-list', JSON.stringify(this.todos));
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    localStorage.setItem('todo-list', JSON.stringify(this.todos));
  }

  editTodo(id: number) {
    this.todos.map((v, i) => {
      if (i === id) {
        v.editing = true;
        this.editingTodoInput = v.content;
      } else {
        v.editing = false;
      }
      return v;
    })
    localStorage.setItem('todo-list', JSON.stringify(this.todos));
  }

  saveTodo(id: number) {
    if (this.editingTodoInput === "") return;
    this.todos.map((v, i) => {
      if (i === id) {
        v.content = this.editingTodoInput;
        v.editing = false;
      }
      return v;
    })
    localStorage.setItem('todo-list', JSON.stringify(this.todos));
  }

  addTodo () {
    if (this.inputTodo !== "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
        editing: false
      });
      this.inputTodo = "";
    }
    localStorage.setItem('todo-list', JSON.stringify(this.todos));
  }

}
