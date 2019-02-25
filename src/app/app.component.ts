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

  defaultQuestion: string = "pet";
  defaultEmail: string = "";
  defaultUsername: string = "";

  answer: string = "";

  genders = ['male', 'female'];

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
  }
}
