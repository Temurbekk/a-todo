import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses(): object {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this._todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }
}
