import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('f') form: ElementRef;
  @ViewChild('f') form: NgForm;

  defaultQuestion: string = 'pet';
  defaultEmail: string = '';
  defaultUsername: string = '';
  answer: string = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    /**
     * nadpisuje wszystkie wartości - trzeba podać wszystkie zmienne formularza
     */
    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   answer: '',
    //   gender: 'male'
    // });
    /**
     * nadpisuje wybrane wartości
     */
    this.form.form.patchValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      answer: '',
      gender: 'male'
    });
  }

  submitForm(form: NgForm) {
    console.log(this.form);
    this.submitted = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.answer;
    this.user.gender = this.form.value.gender;
  }
}
