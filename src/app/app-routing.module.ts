import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './book-detail.component';

import { BookCharactersComponent } from './book-characters.component';

import { BookHouseComponent } from './book-house.component';


const appRoutes: Routes = [
  {
    path: "books",
    component: BookDetailComponent
  },
  {
    path: "",
    redirectTo: "/books", //if u have an empty path it redirects to the details page
    pathMatch: "full"
  },
  {
    path: "characters",
    component: BookCharactersComponent
  },
  {
    path: "houses",
    component: BookHouseComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }