import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { dictionaryService } from './dictionary.service';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private _dictionaryService: dictionaryService){

  }


  ngOnInit(): void {
   
    this._dictionaryService.getBooks();
  }

}


