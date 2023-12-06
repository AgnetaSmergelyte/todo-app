import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo:string = "";
  editingTodoInput:string = "";
  constructor() {}
  ngOnInit() {
    this.todos = [
      {
        content: 'Write to Agneta',
        completed: false,
        editing: false
      },
      {
        content: 'Have a wonderful day',
        completed: false,
        editing: true
      }
    ]
  }

  toggleDone (id: number) {
    this.todos.map((v, i) => {
      if (i === id && !v.editing) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
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
  }

}
