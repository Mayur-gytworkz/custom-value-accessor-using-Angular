import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyFormComponent } from './my-form/my-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomToggleComponent } from './custom-toggle/custom-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    CustomToggleComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserModule,ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
