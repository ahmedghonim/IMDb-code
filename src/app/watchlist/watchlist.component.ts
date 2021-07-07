import { SharingDataCardService } from './../sharing-data-card.service';
import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit ,OnDestroy {

  constructor(private _SharingDataCardService:SharingDataCardService) { }

api :any=[]
  ngOnInit(): void {
    
    let dataFromLocal:any = localStorage.getItem('watchlist')
    this.api= JSON.parse(dataFromLocal)
    
  }
  ngOnDestroy(): void {
    
  }

}
