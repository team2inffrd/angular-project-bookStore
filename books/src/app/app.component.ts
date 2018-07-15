import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  formData = {
    'formTitle': '',
    'formElements': [
      {
        'formElementType': 'input',
        'formElementSubType': 'text',
        'formElementTitle': 'Username',
        'order': 1,
        'label': 'Username',
        'key': 'user_name',
        'required': true
      },
      {
        'formElementType': 'input',
        'formElementSubType': 'password',
        'formElementTitle': 'Password',
        'order': 2,
        'label': 'Password',
        'key': 'user_password',
        'required': true
      },
      {
        'formElementType': 'button',
        'formElementSubType': 'primary',
        'formElementTitle': 'Login',
        'order': 3,
        'label': 'Login',
        'key': 'login_button',
        'required': false
      }
    ]
  };
}
