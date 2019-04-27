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

  public characterSearchArray: any[] = [];

  private rootobjectscharObservableSearch: Observable<any[]>;

  private isDetails: boolean = false;

  selectedCharacter: RootObjectCharacters;



  constructor(private _dictionaryService: dictionaryService){
    this.getCharacters();


  }

  async getCharacters(character: RootObjectCharacters){
    this.isDetails = true;

    for(let i = 1; i<44; i++){
      const list:any[] = await this._dictionaryService.getCharacters(i).toPromise();
      list.forEach(item => {   
        if(item.name == ""){
          item.name = "No Name";
        }
        if(item.aliases == 0){ 
          item.aliases[0] = "No Alias";
        }
       if(item.books !== 0){
         for(let i = 0; i<item.books.length;i++){
            if(item.books[i].includes('1')){
              item.books[i] = " A Game of Thrones"
            }
            if(item.books[i].includes('2')){
              item.books[i] = " A Clash of Kings"
            }
            if(item.books[i].includes('3')){
              item.books[i] = " A Storm of Swords"
            }
            if(item.books[i].includes('4')){
              item.books[i] = " The Hedge Knight"
            }
            if(item.books[i].includes('5')){
              item.books[i] = " A Feast for Crows"
            }
            if(item.books[i].includes('6')){
              item.books[i] = " The Sworn Sword"
            }
            if(item.books[i].includes('7')){
              item.books[i] = " The Mystery Knight"
            }
            if(item.books[i].includes('8')){
              item.books[i] = " A Dance with Dragons"
            }
            if(item.books[i].includes('9')){
              item.books[i] = " The Princess and the Queen"
            }
            if(item.books[i].includes('10')){
              item.books[i] = " The Rogue Prince"
            }
            if(item.books[i].includes('11')){
              item.books[i] = " The World of Ice and Fire"
            }
            if(item.books[i].includes('12')){
              item.books[i] = " A Knight of the Seven Kingdoms"
            }   
           }
       }
        
        if(item.povBooks == 0){
          item.povBooks[0] = "None"
        }
         if(item.povBooks !== 0){
         for(let i = 0; i<item.povBooks.length;i++){
            if(item.povBooks[i].includes('1')){
              item.povBooks[i] = " A Game of Thrones"
            }
            if(item.povBooks[i].includes('2')){
              item.povBooks[i] = " A Clash of Kings"
            }
            if(item.povBooks[i].includes('3')){
              item.povBooks[i] = " A Storm of Swords"
            }
            if(item.povBooks[i].includes('4')){
              item.povBooks[i] = " The Hedge Knight"
            }
            if(item.povBooks[i].includes('5')){
              item.povBooks[i] = " A Feast for Crows"
            }
            if(item.povBooks[i].includes('6')){
              item.povBooks[i] = " The Sworn Sword"
            }
            if(item.povBooks[i].includes('7')){
              item.povBooks[i] = " The Mystery Knight"
            }
            if(item.povBooks[i].includes('8')){
              item.povBooks[i] = " A Dance with Dragons"
            }
            if(item.povBooks[i].includes('9')){
              item.povBooks[i] = " The Princess and the Queen"
            }
            if(item.povBooks[i].includes('10')){
              item.povBooks[i] = " The Rogue Prince"
            }
            if(item.povBooks[i].includes('11')){
              item.povBooks[i] = " The World of Ice and Fire"
            }
            if(item.povBooks[i].includes('12')){
              item.povBooks[i] = " A Knight of the Seven Kingdoms"
            }   
           }
       }
        this.characters.push(item);
        
      });//wtf   
    }  
    this.selectedCharacter = character;
  }  
 

  async searchCharacters(val: string){
    const list: any[] = await this._dictionaryService.getSearchCharacters(val).toPromise();
    list.forEach(item => {

      //this set the name of the books based on the number at the end of url the array returns from the api
       if(item.books !== 0){
         for(let i = 0; i<item.books.length;i++){
            if(item.books[i].includes('1')){
              item.books[i] = " A Game of Thrones"
            }
            if(item.books[i].includes('2')){
              item.books[i] = " A Clash of Kings"
            }
            if(item.books[i].includes('3')){
              item.books[i] = " A Storm of Swords"
            }
            if(item.books[i].includes('4')){
              item.books[i] = " The Hedge Knight"
            }
            if(item.books[i].includes('5')){
              item.books[i] = " A Feast for Crows"
            }
            if(item.books[i].includes('6')){
              item.books[i] = " The Sworn Sword"
            }
            if(item.books[i].includes('7')){
              item.books[i] = " The Mystery Knight"
            }
            if(item.books[i].includes('8')){
              item.books[i] = " A Dance with Dragons"
            }
            if(item.books[i].includes('9')){
              item.books[i] = " The Princess and the Queen"
            }
            if(item.books[i].includes('10')){
              item.books[i] = " The Rogue Prince"
            }
            if(item.books[i].includes('11')){
              item.books[i] = " The World of Ice and Fire"
            }
            if(item.books[i].includes('12')){
              item.books[i] = " A Knight of the Seven Kingdoms"
            }   
           }
       }

       if(item.books == 0){
         item.books[0] = "See povBook(s)"
       }

        if(item.povBooks == 0){
          item.povBooks[0] = "None"
        }

         if(item.povBooks !== 0){
         for(let i = 0; i<item.povBooks.length;i++){
            if(item.povBooks[i].includes('1')){
              item.povBooks[i] = " A Game of Thrones"
            }
            if(item.povBooks[i].includes('2')){
              item.povBooks[i] = " A Clash of Kings"
            }
            if(item.povBooks[i].includes('3')){
              item.povBooks[i] = " A Storm of Swords"
            }
            if(item.povBooks[i].includes('4')){
              item.povBooks[i] = " The Hedge Knight"
            }
            if(item.povBooks[i].includes('5')){
              item.povBooks[i] = " A Feast for Crows"
            }
            if(item.povBooks[i].includes('6')){
              item.povBooks[i] = " The Sworn Sword"
            }
            if(item.povBooks[i].includes('7')){
              item.povBooks[i] = " The Mystery Knight"
            }
            if(item.povBooks[i].includes('8')){
              item.povBooks[i] = " A Dance with Dragons"
            }
            if(item.povBooks[i].includes('9')){
              item.povBooks[i] = " The Princess and the Queen"
            }
            if(item.povBooks[i].includes('10')){
              item.povBooks[i] = " The Rogue Prince"
            }
            if(item.povBooks[i].includes('11')){
              item.povBooks[i] = " The World of Ice and Fire"
            }
            if(item.povBooks[i].includes('12')){
              item.povBooks[i] = " A Knight of the Seven Kingdoms"
            }   
           }
       }

      this.characterSearchArray.length = 0;
      this.characterSearchArray.push(item)
    })
    }


    goBack(){
      this.isDetails = false;
      this.selectedCharacter = null;
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