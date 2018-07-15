import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent }  from './app-components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { HttpModule } from '@angular/http'
import { shareService } from '../services/status-variables.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [BackendService, shareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
