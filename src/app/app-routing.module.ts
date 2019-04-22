import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordDetailComponent } from './word-detail.component';

import { WordSearchComponent } from './word-search.component';


const appRoutes: Routes = [
  {
    path: "detail",
    component: WordDetailComponent
  },
  {
    path: "",
    redirectTo: "/detail", //if u have an empty path it redirects to the details page
    pathMatch: "full"
  },
  {
    path: "search",
    component: WordSearchComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }