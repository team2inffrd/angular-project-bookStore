import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ButtonComponent} from './app-components/button/button.component';
import {FormComponent} from './app-components/forms/forms.component';
import {InputComponent} from './app-components/input/input.component';
import {HeaderComponent} from './app-components/header/header.component';
import {FooterComponent} from './app-components/footer/footer.component';
import {UtilityServiceService} from './app-services/utilityService.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UtilityServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
