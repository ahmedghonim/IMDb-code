import { SharingDataCardService } from './../sharing-data-card.service';
import { BehaviorSubject } from 'rxjs';
import { MoviesComponent } from './../movies/movies.component';
import { NavComponent } from './../nav/nav.component';
import { HomeComponent } from './../home/home.component';
import { CardWithDetaliesComponent } from './../card-with-detalies/card-with-detalies.component';
import { ApiMoviesService } from './../api-movies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.scss'],
})
export class DialogDetailsComponent implements OnInit {
  constructor() {
    this.data.subscribe((x)=>{
console.log(x);

    })
    
  }

  @Input() data=new BehaviorSubject(null)

  ngOnInit(): void {}
}
