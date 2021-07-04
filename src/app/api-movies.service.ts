import { HomeComponent } from './home/home.component';
import { CardWithDetaliesComponent } from './card-with-detalies/card-with-detalies.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMoviesService {
  constructor(private _HttpClient: HttpClient ) {}

  trending(type:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  top(type:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  persons():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }

  /* ------------------------ */

}
