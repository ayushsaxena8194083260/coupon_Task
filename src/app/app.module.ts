import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowErrorsComponent } from 'src/validator/show-error';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports:[ShowErrorsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
