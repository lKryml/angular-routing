import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeverageComponent } from './beverage/beverage.component';
import { SpokenLanguagesComponent } from './spoken-languages/spoken-languages.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    BeverageComponent,
    SpokenLanguagesComponent,
    ProgrammingLanguagesComponent,
    NotFoundComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
