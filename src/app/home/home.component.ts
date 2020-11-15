import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/services/todo.service';
import { Todo } from '../todo/interfaces/todo';
import { faEdit, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public value: Date [] = [new Date('05/16/2017'), new Date('05/12/2017'), new Date('05/6/2017'), new Date('05/26/2017'), new Date('05/20/2017')];
  public multiselect = true;
  tasks: Array<Todo>;
  faTrash = faTrash;
  faEdit = faEdit;
  faPluSquare = faPlusSquare;

  constructor(private  todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAllTask().subscribe(res => {
      this.tasks = res;
    });
  }

  delete(id: string): void {
    this.todoService.deleteTask(id).subscribe(() => {
      this.todoService.getAllTask().subscribe(res => {
        this.tasks = res;
      });
    });
  }
}
