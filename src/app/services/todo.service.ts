import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private _http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
