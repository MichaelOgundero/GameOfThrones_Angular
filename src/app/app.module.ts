import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { dictionaryService } from './services/dictionary.service';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './books/book-detail.component';
import { BookCharactersComponent } from './characters/book-characters.component';
import { BookHouseComponent } from './houses/book-house.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';







@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule, MatButtonModule, MatInputModule,MatIconModule],
  declarations: [ AppComponent, HelloComponent, BookDetailComponent, BookCharactersComponent,BookHouseComponent],
  providers: [dictionaryService], //so that its available to all the componenets in the app
  bootstrap: [ AppComponent ]
})
export class AppModule { }
