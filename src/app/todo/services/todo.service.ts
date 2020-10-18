import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAllTask(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}todos`);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}todos/${id}`);
  }
}

