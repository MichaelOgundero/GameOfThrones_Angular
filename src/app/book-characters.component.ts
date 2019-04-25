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

  public characters:any[] = [];

  public bookName: any[] = []; 

  public bookNameArray: any[] = [];

  private rootobjectscharObservableSearch: Observable<any[]>;

  constructor(private _dictionaryService: dictionaryService){
    this.getCharacters();

  }

 

  async getCharacters(){
    for(let i = 1; i<44; i++){
      const list:any[] = await this._dictionaryService.getCharacters(i).toPromise();
      list.forEach(item => {   
        if(item.name == ""){
          item.name = "No Name";
        }
        if(item.aliases == 0){ //wtf how does this even work 2 equals works but not 3
          //console.log("xxxxx")
          item.aliases[0] = "No Alias";
        }
       if(item.books !== 0){
         for(let i = 0; i<item.books.length;i++){
             this._dictionaryService.getBookName(item.books[i]).subscribe(data => {
            console.log(data.name)          
            })
           }
       }
    
        this.characters.push(item)
        
      });//wtf


    }
    //console.log(this.characters[0])
    
  }  
  getSearchCharacters(val: string){
    this.rootobjectscharObservableSearch = this._dictionaryService.getSearchCharacters(val);
  }

 /* async getBookName(url: string){
    let bookName: string
    const list: any[] = await this._dictionaryService.getBookName(url).toPromise();
    list.forEach(item => {
     // console.log(item.name)
      this.bookNameArray.push(item)
      //return item.name;
    }) 
   
   
  }*/

  /*async getBookName(url: string): string{
    await this._dictionaryService.getBookName(url).subscribe(data => {
      console.log(data.name);
        return data.name;
        
     })

   
  }*/
}