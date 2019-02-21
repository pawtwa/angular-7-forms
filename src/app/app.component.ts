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

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  submitForm(form: NgForm) {
    console.log(this.form);
  }
}
