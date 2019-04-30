import { Component } from '@angular/core';
import { dictionaryService } from '../services/dictionary.service';
import {Observable} from 'rxjs';
import {RootObjectCharacters} from '../models/characters';


@Component({
  selector: 'my-app',
  templateUrl: '../characters/book-characters.component.html',
  styleUrls: [ '../characters/book-characters.component.css' ]
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

  async getCharacters(){
 

    for(let i = 1; i<44; i++){
      const list:any[] = await this._dictionaryService.getCharacters(i).toPromise();
      list.forEach(item => {   
        if(item.name == ""){
          item.name = "No Name";
        }
        if(item.aliases == 0){ 
          item.aliases[0] = "No Alias";
        }
      
        if(item.povBooks == 0){
          item.povBooks[0] = "None"
        }

        if(item.povBooks !==0){
          for(let i=0; i<item.povBooks.length; i++){
            let url = item.povBooks[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.povBooks[i] = data.name
            })
          }
        }

        if(item.books !==0){
          for(let i=0; i<item.books.length; i++){
            let url = item.books[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.books[i] = data.name;
            })
          }
        }

        if(item.allegiances !==0){
          for(let i=0; i<item.allegiances.length;i++){
            let url = item.allegiances[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.allegiances[i] = data.name;
            })
          }
        }

        if(item.spouse !==0){
          for(let i=0; i<item.spouse.length; i++){
            let url = item.spouse[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.spouse[i] = data.name;
            })
          }
        }

        if(item.father != ""){
          let url = item.father;
          this._dictionaryService.getUrlInfo(url).subscribe(data => {
            item.father = data.name
          })
        }

        if(item.mother != ""){
          let url = item.mother;
          this._dictionaryService.getUrlInfo(url).subscribe(data => {
            item.mother = data.name;
          })
        }
         

        this.characters.push(item);
        
       }); 
    }
      
  
  }  
 

  async searchCharacters(val: string){
    const list: any[] = await this._dictionaryService.getSearchCharacters(val).toPromise();
    list.forEach(item => {

      //this set the name of the books based on the number at the end of url the array returns from the api
       

       if(item.books == 0){
         item.books[0] = "See povBook(s)"
       }

        if(item.povBooks == 0){
          item.povBooks[0] = "None"
        }

         if(item.povBooks !==0){
          for(let i=0; i<item.povBooks.length; i++){
            let url = item.povBooks[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.povBooks[i] = data.name
            })
          }
        }

        if(item.books !==0){
          for(let i=0; i<item.books.length; i++){
            let url = item.books[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.books[i] = data.name;
            })
          }
        }

        if(item.allegiances !==0){
          for(let i=0; i<item.allegiances.length;i++){
            let url = item.allegiances[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.allegiances[i] = data.name;
            })
          }
        }

        if(item.spouse !==0){
          for(let i=0; i<item.spouse.length; i++){
            let url = item.spouse[i];
            this._dictionaryService.getUrlInfo(url).subscribe(data => {
              item.spouse[i] = data.name;
            })
          }
        }

        if(item.father != ""){
          let url = item.father;
          this._dictionaryService.getUrlInfo(url).subscribe(data => {
            item.father = data.name
          })
        }

        if(item.mother != ""){
          let url = item.mother;
          this._dictionaryService.getUrlInfo(url).subscribe(data => {
            item.mother = data.name;
          })
        }

      this.characterSearchArray.length = 0;
      this.characterSearchArray.push(item)
    })
    }


    goBack(){
      this.isDetails = false;
      this.selectedCharacter = null;
    }

    getCharacter(character: RootObjectCharacters){
        this.isDetails = true;
        this.selectedCharacter = character;
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