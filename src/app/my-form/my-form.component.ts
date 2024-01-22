import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup;
  formSubmitted: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      toggle1: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    } else {
      console.log('Form has validation errors.');
    }
  }
}
