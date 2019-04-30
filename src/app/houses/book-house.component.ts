import { Component, OnInit } from '@angular/core';
import { dictionaryService } from '../services/dictionary.service';
import {Observable,from} from 'rxjs';
import {RootObjectHouses} from '../models/houses';

import 'hammerjs';

@Component({
  selector: 'my-app',
  templateUrl: '../houses/book-house.component.html',
  styleUrls: [ '../houses/book-house.component.css' ]
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
    
   
    
  }


  async getHouses(){
    for(let i = 1; i<10; ++i){
       const list:any[] =    await this._dictionaryService.getHouses(i).toPromise();    //the promise promises theres going to be a value in it in the future
        list.forEach( item => {
          
          if(item.overlord != ""){
            let url = item.overlord;
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              //console.log(data)
               item.overlord = data.name;
            })  
          }
          if(item.founder != ""){
            let url = item.founder;
            this._dictionaryService.getUrlInfo(url).subscribe(data =>{
              item.founder = data.name
            })
          }
          if(item.currentLord != ""){
            let url = item.currentLord;
            this._dictionaryService.getUrlInfo(url).subscribe(data =>{
              item.currentLord = data.name
            })
          }
          if(item.heir != ""){
            let url = item.heir;
            this._dictionaryService.getUrlInfo(url).subscribe(data =>{
              item.heir = data.name
            })
          }
          if(item.cadetBranches !== 0){   //the function returns a url so we quering the data and get the name from the json object
            for(let i=0; i<item.cadetBranches.length;i++){
              let url = item.cadetBranches[i];
              this._dictionaryService.getUrlInfo(url).subscribe(data => {
                item.cadetBranches[i] = data.name;
              })
            }
          }

          if(item.swornMembers !== 0){
            for(let i=0; i<item.swornMembers.length;i++){
              let url = item.swornMembers[i];
              this._dictionaryService.getUrlInfo(url).subscribe(data => {
                item.swornMembers[i] = data.name;
              })
            }
          }
          
          
          
          
          this.houses.push(item)});
      }  

      console.log(this.houses[0])
      
  }

  getSearchHouses(val: string){
    this.rootobjectshouseObservableSearch = this._dictionaryService.getSearchHouses(val);
  }


 

  goBack(){
    this.isDetails = false;
    this.selectedHouse = null;
  }

   getHouse(house: RootObjectHouses){
      this.isDetails = true;
      this.selectedHouse = house;
    }

  


 
}

