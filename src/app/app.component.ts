import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { dictionaryService } from './dictionary.service';
import {Sens} from './classes/definitions'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  /*name = 'Angular';*/

 /* constructor(private _dictionaryService: dictionaryService){

  }*/

  //lstWords: Sens;

  title = 'app';
  results = '';

  constructor(private http: HttpClient){

  }



  ngOnInit(): void{
   /* this._dictionaryService.getWord()
    .subscribe
    (
      data=>
      {
        this.lstWords = data;
      }

    )
    console.log(this._dictionaryService.getWord());
  }*/

  

this.http.get('https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb/ace?fields=definitions').subscribe(data => {
      console.log(data);
    });
  }

  

}
