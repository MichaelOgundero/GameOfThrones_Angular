import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class dictionaryService
{
  readonly endpoint = "entries";
  readonly language_code = "en-us";
  word_id = "example";
  readonly url = "https://od-api.oxforddictionaries.com/api/v2/" + this.endpoint + "/" + this.language_code + "/" + this.word_id;

  constructor(private httpclient: HttpClient){}

 /* getClasses(): Observable<any>
  { 
    //return this.httpclient.get()
  }*/

}