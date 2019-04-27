import { Component, OnInit } from '@angular/core';
import { dictionaryService } from './dictionary.service';
import {Observable,from} from 'rxjs';
import {RootObjectHouses} from './houses';

import 'hammerjs';

@Component({
  selector: 'my-app',
  templateUrl: './book-house.component.html',
  styleUrls: [ './book-house.component.css' ]
})
export class BookHouseComponent{

  private rootobjectshouse: RootObjectHouses[] = [];
  private rootobjectshouseObservable: Observable<any[]>;

  public houses:any[] = [];

  private rootobjectshouseObservableSearch: Observable<any[]>[];

   private isDetails: boolean = false;

  selectedHouse: RootObjectHouses;



  constructor(private _dictionaryService: dictionaryService){

    this.getHouses();
    
      //this.rootobjectshouseObservable = this._dictionaryService.getHouses(1);
    
  }


  async getHouses(house: RootObjectHouses){
      this.isDetails = true;
      
     
      for(let i = 1; i<10; ++i){
       const list:any[] =    await this._dictionaryService.getHouses(i).toPromise();    //the promise promises theres going to be a value in it in the future
        list.forEach( item => this.houses.push(item));
      }


     this.selectedHouse = house;
      
  }

  getSearchHouses(val: string){
    this.rootobjectshouseObservableSearch = this._dictionaryService.getSearchHouses(val);
  }


 

  goBack(){
    this.isDetails = false;
    this.selectedHouse = null;
  }

  


 
}

