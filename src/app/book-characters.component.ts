import { Component } from '@angular/core';
import { dictionaryService } from './dictionary.service';
import {Observable} from 'rxjs';
import {RootObjectCharacters} from './characters';


@Component({
  selector: 'my-app',
  templateUrl: './book-characters.component.html',
  styleUrls: [ './book-characters.component.css' ]
})
export class BookCharactersComponent {
  private rootobjectschar: RootObjectCharacters[] = [];
  private rootobjectscharObservable: Observable<any[]>;

  private rootobjectscharObservableSearch: Observable<any[]>;



  constructor(private _dictionaryService: dictionaryService){
   
  }

  ngOnInit(){
    console.log(this._dictionaryService.getSearchCharacters("Jon Snow"))
  }

  getSearchCharacters(val: string){
    this.rootobjectscharObservableSearch = this._dictionaryService.getSearchCharacters(val);
  }
}