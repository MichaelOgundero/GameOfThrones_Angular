import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class dictionaryService
{
  constructor(private httpclient: HttpClient){}

  names: any = []

  getBooks()
  { 
    let url  = "https://www.anapioficeandfire.com/api/books/";
    return this.httpclient.get(url);
   

    
  }

  getSearchBook(val: string){
    let url = "https://www.anapioficeandfire.com/api/books/" + "?name=" + val;

    return this.httpclient.get(url);
  }


}