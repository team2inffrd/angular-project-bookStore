import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { BackendService } from '../../../services/backend.service'
import { shareService } from '../../../services/status-variables.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private fb: FormBuilder, private _backendService : BackendService, private _shareService: shareService) {
    this.createForm();
  }
  loginForm: FormGroup;

  createForm() {
    this.loginForm = this.fb.group ({
      email: ['', [Validators.required,Validators.minLength(4),forbiddenNameValidator(/anil/i)],''],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ])]
    });
    
  }
  submit(){
    console.log(this.loginForm);
  }
  get email() {
    return this.loginForm.get('email'); 
  }
  get password() { return this.loginForm.get('password'); }

  loginFun(type: string) : void  {
    const status: boolean=false;
    console.log(" username "+this.email.value);
    console.log(" password "+this.password.value);
    if (type === "post") {
      const data : any = {
        "userName": this.email.value,
        "password": this.password.value
      };
      this._backendService.update(data);
      // this._backendService.getData(this.name.value).subscribe(
      //   res => {
      //     const response: any = res.json();
      //     console.log("response "+JSON.stringify(response))
      //     this._shareService.errorStatus = false;
      //     // if (response.record[0].userName.toLowerCase().trim() !== this.name.value.toLowerCase().trim()) {
      //     //   this._backendService.update(data);
      //     // } else {
      //     //   console.log("User name already exists");
      //     // }
      //   }
      // )
      
    } else {
      this._backendService.getData(this.email.value).subscribe(
        res => {
          const response: any = res.json();
          console.log("response "+JSON.stringify(response))
          this._shareService.errorStatus = false;
          if (response.record[0] == null || response.record[0] == undefined ) {
            console.log("got null value")
          }
          else {
            if(this.verifyPassword(response.record[0].password,this.password.value)) {
              console.log("Login success");
            } else {
              console.log("Login Failed");
            }
          }
        },
        err => {
          this._shareService.errorStatus = true;
          console.log("Error occured");
        });
      }
    }
  verifyPassword(resPassword: string,currentPass: string): boolean {
    console.log("cur pass and res pass "+resPassword+ " "+ currentPass)
    if(resPassword.toLowerCase().trim() === currentPass.toLowerCase().trim()) {
      console.log("pass");
      return true;
    }
    else {
      console.log("fail");
      return false;
    }
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
