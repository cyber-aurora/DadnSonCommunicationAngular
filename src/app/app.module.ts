import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './form-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CharacteristicsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FormDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
