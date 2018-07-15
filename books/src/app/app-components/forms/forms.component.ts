import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {FormBase} from './form-base';
import {UtilityServiceService} from '../../app-services/utilityService.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormComponent implements OnInit {
  loginForm: FormGroup;
  @Input() formData: any;

  constructor(private util: UtilityServiceService) {
  }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.loginForm = new FormGroup(this.toFormGroup(this.formData['formElements']));
  }

  toFormGroup(formElements: FormBase<any>[]) {
    let group: any = {};
    formElements.forEach(formElement => {
      console.log(formElement);
      if (this.util.stringComparator(formElement.key, 'user_name')) {
        group[formElement.key] = formElement.required ?
          new FormControl('', Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'))
          : new FormControl('');
      } else if (this.util.stringComparator(formElement.key, 'user_password')) {
        group[formElement.key] = formElement.required ? new FormControl('', Validators.minLength(8))
          : new FormControl('');
      }
      group[formElement.key] = formElement.required ? new FormControl('', Validators.required)
        : new FormControl('');
    });
    return group;
  }

  onSubmit(event) {
  }
}
