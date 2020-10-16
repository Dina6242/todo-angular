import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  createTask(todo: Partial<Todo>): void {
    this.http.post(`${environment.apiUrl}todos`, todo).subscribe();
  }


}
