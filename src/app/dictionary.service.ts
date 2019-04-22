import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Sens} from './classes/definitions'

@Injectable()
export class dictionaryService
{
  endpoint: string = "entries";
  language_code: string = "en-us";
  word_id: string = "example";

  url: string = "https://od-api.oxforddictionaries.com/api/v2/";
  

  constructor(private httpclient: HttpClient){}

  lstWords: Sens;

  getWord()
  { 
    /*const _headers = new HttpHeaders();
    const headers: HttpHeaders = _headers
      .append('Accept', 'application/json')
      .append('app_id', 'c74cc171')
      .append('app_key', 'e09090c1f8aa81d6a32f261bf05a8dc5');*/

  //console.log(headers)

 const headers = new HttpHeaders(
   {
     'Accept': 'application/json',
     'app_id': 'c74cc171',
     'app_key': 'e09090c1f8aa81d6a32f261bf05a8dc5'
   }
 )  ;            

return  this.httpclient.get<Sens>(this.url,{
   headers: {'Accept':'application/json','app_id':'c74cc171','app_key': 'e09090c1f8aa81d6a32f261bf05a8dc5'}
});

}

}