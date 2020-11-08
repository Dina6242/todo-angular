import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
  });

  constructor(private  todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getById(id).subscribe(res => {
        this.updateForm.get('name')?.setValue(res.name);
        this.updateForm.get('time')?.setValue(res.time);
      });
    }
  }

  put(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.updateTask(id, this.updateForm.value).subscribe(() => this.router.navigate(['/home']));
    }
  }
}

