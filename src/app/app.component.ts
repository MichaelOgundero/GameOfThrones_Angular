import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { dictionaryService } from './dictionary.service';
import {Sens} from './classes/definitions'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private _dictionaryService: dictionaryService){

  }

  lstWords: Sens;

  ngOnInit(){
    this._dictionaryService.getWord()
    .subscribe
    (
      data=>
      {
        this.lstWords = data;
      }

    )
  }

}
