import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
    
  }
  submit(){
    console.log(this.loginForm);
  }
  get name() {
    return this.loginForm.get('userName'); 
  }
  get password() { return this.loginForm.get('password'); }
}
