import { Component, OnInit } from '@angular/core';
import { dictionaryService } from './dictionary.service';
import {Observable} from 'rxjs';
import {RootObject} from './book'

import 'hammerjs';


@Component({
  selector: 'my-app',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.css' ]
})
export class BookDetailComponent  {

 private rootobjects: RootObject[] = [];
 private rootobjectsObservable: Observable<any[]>;

 private rootobjectsObservableSearch: Observable<any[]>;

 private isDetails: boolean = false;





  constructor(private _dictionaryService: dictionaryService){


    this.rootobjectsObservable = this._dictionaryService.getBooks();
    
  
  }

  ngOnInit(){
    console.log(this._dictionaryService.getSearchBook("A Game Of Thrones"))
  }

  getSearchBook(val: string){
      this.rootobjectsObservableSearch = this._dictionaryService.getSearchBook(val);
    
  }

  getBooks(){
    this.isDetails = true;
    console.log("xxx")
  }

  goBack(){
    this.isDetails = false;
  }

 
}

