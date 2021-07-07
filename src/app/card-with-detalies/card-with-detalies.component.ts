import { SharingDataCardService } from './../sharing-data-card.service';
import { DialogDetailsComponent } from './../dialog-details/dialog-details.component';
import { HomeComponent } from './../home/home.component';
import { ApiMoviesService } from './../api-movies.service';
import { BehaviorSubject } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import SwiperCore, { Autoplay, Mousewheel, Navigation } from 'swiper/core';
import { MatDialog } from '@angular/material/dialog';

SwiperCore.use([Navigation, Mousewheel, Autoplay]);

@Component({
  selector: 'app-card-with-detalies',
  templateUrl: './card-with-detalies.component.html',
  styleUrls: ['./card-with-detalies.component.scss'],
})
export class CardWithDetaliesComponent implements OnInit {
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';

  @Input() api: any = null;
  @Input() slidesPerView: any = null;

  constructor(
    private dialog: MatDialog,
    private _SharingDataCardService: SharingDataCardService
  ) {}
  
// function to oben dialog
  openDialog() {
    this.dialog.open(DialogDetailsComponent);
  }

  carntApiData(data?: any) {
    this._SharingDataCardService.updateData(data);
    this.openDialog();
  }
  
  carntApiDataDetails(data?: any) {// send data to detailes
    this._SharingDataCardService.updateData(data);
  }
  
  addToWatchlist(data?: any) {// send data to Watchlist
    this._SharingDataCardService.updateWatchlist(data);
  }
  ngOnInit(): void {
    
    
   
  }
}
