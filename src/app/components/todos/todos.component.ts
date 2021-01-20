import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this._todoService.deleteTodo(todo).subscribe();
  }
}
