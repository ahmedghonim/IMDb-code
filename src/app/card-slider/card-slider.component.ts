import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  @Input() api:any;
  @Input() slidesPerView:number=5;
  constructor() { }

  ngOnInit(): void {
  }

}
