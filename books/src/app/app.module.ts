import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './app-components/button/button.component';
import { FormComponent } from './app-components/forms/forms.component';
import { InputComponent } from './app-components/input/input.component';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';
import { UtilityServiceService } from './app-services/utilityService.service';
import { BackendService } from '../services/http-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { shareService } from '../services/status-variables.service';
import { LoginComponent } from './app-components/login/login.component';
import { statusCodeInterceptor } from '../services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressModule
  ],
  providers: [
    UtilityServiceService, 
    BackendService, 
    shareService,
    { provide: HTTP_INTERCEPTORS, useClass: statusCodeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}
