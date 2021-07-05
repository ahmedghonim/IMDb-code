import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharingDataCardService } from '../sharing-data-card.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(private _CardService: SharingDataCardService) {}
  api: any;
  imgPrefex = this._CardService.imgPrefex;

  ngOnInit() {
    // this._CardService.curantDataCard.subscribe((api) => {
    //   this.api = api;
    // });
    
    let data: any = localStorage.getItem('carntApiData');
    this.api = JSON.parse(data);
  }
  ngOnDestroy() {
    localStorage.removeItem('carntApiData');
  }
}
