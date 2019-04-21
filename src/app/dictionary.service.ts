import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class dictionaryService
{
  readonly endpoint = "entries";
  readonly language_code = "en-us";
  readonly word_id = "example";
  readonly field = "definitions"
  readonly url = "https://od-api.oxforddictionaries.com/api/v2/" + this.endpoint + "/" + this.language_code + "/" + this.word_id + "/" + this.field;

  

  constructor(private httpclient: HttpClient){}

  getWord(): Observable<any>
  { 
    const _headers = new HttpHeaders();
    const headers: HttpHeaders = _headers
      .append('Accept', 'application/json')
      .append('app_id', 'c74cc171')
      .append('app_key', 'e09090c1f8aa81d6a32f261bf05a8dc5');
    return this.httpclient.get(this.url, {headers}); //headers is how we get the key to access the api
  }


}