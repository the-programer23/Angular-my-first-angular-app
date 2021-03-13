import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.css'],
})
export class ThirdFormComponent implements OnInit {
  signupForm: FormGroup;
  projectStatusesList = ['Stable', 'Critical', 'Finished'];
  projectNamesForbiddenList = ['test'];

  constructor() {}
  //asynchronous validators goes outside the validators array
  ngOnInit() {
    this.signupForm = new FormGroup({
      projectname: new FormControl(
        null,
        [Validators.required, CustomValidator.invalidProjectName],
        CustomValidator.asyncInvalidProjectName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('Critical'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
