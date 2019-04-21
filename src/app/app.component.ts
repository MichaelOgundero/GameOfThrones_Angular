import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  readonly ROOT_URL = "https://od-api.oxforddictionaries.com/api/v2/"

  constructor(private http: HttpClient){}

}
