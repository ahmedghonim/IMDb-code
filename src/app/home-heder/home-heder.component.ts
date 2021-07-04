import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from './../api-movies.service';
import SwiperCore, { Autoplay, Mousewheel, Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs,Mousewheel,Autoplay]);

@Component({
  selector: 'app-home-heder',
  templateUrl: './home-heder.component.html',
  styleUrls: ['./home-heder.component.scss']
})
export class HomeHederComponent implements OnInit {
trendingMovies:any = []
imgPrefex = 'https://image.tmdb.org/t/p/w500/'
  constructor(private _ApiMoviesService:ApiMoviesService) {
    _ApiMoviesService.trending('all').subscribe((response)=>{
      this.trendingMovies = response.results
    })
   }
   thumbsSwiper: any;
  ngOnInit(): void {
  }
  
  
}
