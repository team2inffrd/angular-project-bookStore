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
    this.loginForm = this.fb.group({
      userName: ['', Validators.required, Validators.minLength(5)],
      password: ['', Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
    })
   }

   ngOnInit(){

   }
  // loginForm: FormGroup;
  // createForm() {
  //   this.loginForm = this.fb.group ({
  //     name: ['', [Validators.required,Validators.minLength(4),forbiddenNameValidator(/anil/i)],''],
  //     password: ['', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  //     ])]
  //   });
  // }
}
