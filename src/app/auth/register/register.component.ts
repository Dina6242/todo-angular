import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../services/customValidators';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public message: string;
  @ViewChild('modal', {static: false}) modal: ModalDirective;

  constructor(
    public userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.registerForm = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        username: [
          null,
          Validators.compose([Validators.required]),
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true,
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true,
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true,
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true,
              },
            ),
            Validators.minLength(8),
          ]),
        ],
        confirmPassword: [null, Validators.compose([Validators.required])],
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator,
      },
    );
  }

  register(): void {
    const userDetalis = this.registerForm.value;
    this.userService.register(userDetalis).subscribe(res => {
      this.authService.authenticate(res.access_token);
    }, error => {
      this.modal.show();
      this.message = error.error.message;
    });
  }
}


