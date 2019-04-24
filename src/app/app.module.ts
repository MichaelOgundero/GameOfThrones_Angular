import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { dictionaryService } from './dictionary.service';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './book-detail.component';
import { BookCharactersComponent } from './book-characters.component';
import { BookHouseComponent } from './book-house.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, BookDetailComponent, BookCharactersComponent,BookHouseComponent],
  providers: [dictionaryService], //so that its available to all the componenets in the app
  bootstrap: [ AppComponent ]
})
export class AppModule { }
