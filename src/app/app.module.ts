import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { dictionaryService } from './dictionary.service';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './app-routing.module';
import { WordDetailComponent } from './word-detail.component';
import { WordSearchComponent } from './word-search.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, WordDetailComponent, WordSearchComponent ],
  providers: [dictionaryService], //so that its available to all the componenets in the app
  bootstrap: [ AppComponent ]
})
export class AppModule { }
