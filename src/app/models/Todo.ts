export class Todo {
  content: string;
  completed: boolean;
  editing: boolean;

  constructor(content: string, completed: boolean = false, editing: boolean = false) {
    this.content = content;
    this.completed = completed;
    this.editing = editing;
  }
}
