import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  createTask(todo: Partial<Todo>): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}todos`, todo);
  }

  getAllTask(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}todos`);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}todos/${id}`);
  }
}
