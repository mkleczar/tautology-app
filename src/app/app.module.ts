import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParametersComponent } from './parameters/parameters.component';
import { InputComponent } from './input/input.component';

import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    ParametersComponent,
    InputComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        ButtonModule,
        ToggleButtonModule,
        InputTextModule,
        FieldsetModule,
        RippleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
