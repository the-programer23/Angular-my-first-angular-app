import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  @ViewChild('fTwo', { static: false }) signupFormTwo: NgForm;
  defaultQuestion = 'pet';
  defaultSubscription = 'Advanced';
  answer = '';
  genders = ['hombre', 'mujer'];
  subscriptions = ['Basic', 'Advanced', 'Advanced'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  userTwo = {
    email: '',
    subcription: '',
    password: '',
  };
  submitted = false;
  formTwoSubmitted = false;
  showFormTwo = false;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
  onFormTwoSubmit() {
    this.formTwoSubmitted = true;
    console.log('email: ' + this.signupFormTwo.value.emailTwo);
    console.log('subscriptions: ' + this.signupFormTwo.value.subscriptions);
    console.log('password: ' + this.signupFormTwo.value.password);
    this.signupFormTwo.reset();
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'hombre',
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  onShowFormTwo() {
    this.showFormTwo = !this.showFormTwo;
  }
}
