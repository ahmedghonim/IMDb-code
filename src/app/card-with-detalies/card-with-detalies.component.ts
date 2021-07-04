import { HomeComponent } from './../home/home.component';
import { ApiMoviesService } from './../api-movies.service';
import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import SwiperCore, { Autoplay, Mousewheel, Navigation } from 'swiper/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailsComponent } from '../dialog-details/dialog-details.component';

SwiperCore.use([Navigation, Mousewheel, Autoplay]);

@Component({
  selector: 'app-card-with-detalies',
  templateUrl: './card-with-detalies.component.html',
  styleUrls: ['./card-with-detalies.component.scss'],
})
export class CardWithDetaliesComponent implements OnInit {
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';

  @Input() api: any;
  @Input() slidesPerView: number = 5;
  constructor(
    private dialog: MatDialog,
    private _ApiMoviesService: ApiMoviesService
  ) {}

  openDialog() {
    this.dialog.open(HomeComponent);
  }

  x: string='';
  get(data?: any) {
    this.x = data;

    console.log(this.x);

    this.openDialog();
  }

  ngOnInit(): void {}
}
