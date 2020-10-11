import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public massage: string;
  @ViewChild('modal', {static: false}) modal: ModalDirective;
  frmlogin = new FormGroup({
    username: new FormControl(null, Validators.email),
    password: new FormControl(null, Validators.required),
  });

  constructor(public userService: UserService, private authService: AuthService) {
  }

  login(): void {
    const userDetalis = this.frmlogin.value;
    this.userService.login(userDetalis).subscribe(res => {
      this.authService.authenticate(res.access_token);
    }, error => console.log({error}, error));

  }
}
