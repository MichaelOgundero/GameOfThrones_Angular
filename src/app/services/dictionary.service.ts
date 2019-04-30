import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable()
export class dictionaryService {
  constructor(private httpclient: HttpClient) { }

  getBooks(val: number) {
    let url = "https://www.anapioficeandfire.com/api/books/?page="+val+"&pageSize=50";
    return this.httpclient.get(url);
  }

  getSearchBook(val: string) {
    let url = "https://www.anapioficeandfire.com/api/books/" + "?name=" + val;
    return this.httpclient.get(url);
  }

  getCharacters(val: number){
      let url = "https://www.anapioficeandfire.com/api/characters/?page=" + val + "&pageSize=50";
      return this.httpclient.get(url);
  }

  getSearchCharacters(val: string) {
    let url = "https://anapioficeandfire.com/api/characters/" + "?name=" + val;
    return this.httpclient.get(url);
  }

  getHouses(val: number) {
    let url = "https://www.anapioficeandfire.com/api/houses/?page=" + val + "&pageSize=50";
    return this.httpclient.get(url);
  }

  getSearchHouses(val: string) {
    let url = "https://anapioficeandfire.com/api/houses/" + "?name=" + val;
    return this.httpclient.get(url);
  }

  getUrlInfo(url: string){
    return this.httpclient.get(url);
  }








}