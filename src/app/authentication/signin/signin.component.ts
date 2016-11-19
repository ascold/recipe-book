import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'rb-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

    onSignin() {
      this.authService.signinUser(this.myForm.value);
      this.router.navigate(['/recipes']);
    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSignup(){
      this.router.navigate(['/signup']);
    }

}
