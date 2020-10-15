import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
  });

  constructor(private  todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  post(): void {
    this.todoService.createTask(this.createForm.value);
  }
}
