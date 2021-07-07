import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { CardWithDetaliesComponent } from './card-with-detalies/card-with-detalies.component';
import { Injectable, OnDestroy } from '@angular/core';
import { localizedString } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root',
})
export class SharingDataCardService {
  curantDataCard = new BehaviorSubject(null);

  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  constructor() {
    let local: any = localStorage.getItem('watchlist');
    let stringfay: any =[ ... new Set(JSON.parse(local))] ;
    
    
    //TODO creat function mak uniq number 
    if (stringfay.length != 0) {
      let y:any = []
      for (let i = 0; i < stringfay.length; i++) {
        
        this.updateWatchlist(stringfay[i]);
      }
    }
  }

  updateData(data: any) {
    this.curantDataCard.next(data);
    this.curantDataCard.subscribe((api) => {
      localStorage.setItem('carntApiData', JSON.stringify(data));
    });
  }

  arrOfWatchlist: any = [];
  Watchlist: any = [];
  updateWatchlist(data: any) {
    this.arrOfWatchlist.push(data);
    this.Watchlist = [...new Set(this.arrOfWatchlist)];
    localStorage.setItem('watchlist', JSON.stringify(this.Watchlist));
  }
}
