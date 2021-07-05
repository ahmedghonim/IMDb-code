import { BehaviorSubject } from 'rxjs';
import { CardWithDetaliesComponent } from './card-with-detalies/card-with-detalies.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingDataCardService {
 
  curantDataCard = new BehaviorSubject(null);
 
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';

  constructor() {}
 
  updateData(data: any) {
    this.curantDataCard.next(data);
    this.curantDataCard.subscribe((api) => {
      localStorage.setItem("carntApiData",JSON.stringify(data))
      
    // console.log( localStorage.getItem("carntApiData"));
    });
 
  }
}
