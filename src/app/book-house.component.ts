import { Component, OnInit } from '@angular/core';
import { dictionaryService } from './dictionary.service';
import {Observable,from} from 'rxjs';
import {RootObjectHouses} from './houses';
import "rxjs/add/observable/of";

@Component({
  selector: 'my-app',
  templateUrl: './book-house.component.html',
  styleUrls: [ './book-house.component.css' ]
})
export class BookHouseComponent{

  private rootobjectshouse: RootObjectHouses[] = [];
  private rootobjectshouseObservable: Observable<any[]>;


  private rootobjectshouseObservableSearch: Observable<any[]>[];

  constructor(private _dictionaryService: dictionaryService){

      this.rootobjectshouseObservable = this._dictionaryService.getHouses(1);
    
  }

  getSearchHouses(val: string){
    this.rootobjectshouseObservableSearch = this._dictionaryService.getSearchHouses(val);
  }

  


 
}

