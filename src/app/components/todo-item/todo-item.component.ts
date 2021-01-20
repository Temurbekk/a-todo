import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;

  constructor() {}

  ngOnInit(): void {}

  setClasses(): object {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo): void {
    console.log('toggle');
  }

  onDelete(todo): void {
    console.log('delete');
  }
}
