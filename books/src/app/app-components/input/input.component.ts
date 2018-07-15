import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputData: any;
  @Input() inputGroup: FormGroup;

  ngOnInit() {
  }

  onInputChange(data, event) {
  }

}
