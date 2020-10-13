import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
