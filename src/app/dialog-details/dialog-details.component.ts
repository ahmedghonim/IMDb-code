import { SharingDataCardService } from './../sharing-data-card.service';
import { BehaviorSubject } from 'rxjs';
import { MoviesComponent } from './../movies/movies.component';
import { NavComponent } from './../nav/nav.component';
import { HomeComponent } from './../home/home.component';
import { CardWithDetaliesComponent } from './../card-with-detalies/card-with-detalies.component';
import { ApiMoviesService } from './../api-movies.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.scss'],
})
export class DialogDetailsComponent implements OnInit {
  constructor(private _CardService: SharingDataCardService) {}

  api: any;
  imgPrefex = this._CardService.imgPrefex;

  ngOnInit(): void {
    this._CardService.curantDataCard.subscribe((api) => {
      this.api = api;
    });
  }
}
