import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from './../api-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topMovies:any = [];
  topTv:any = [];
  trendingMovies:any = [];
  trendingTv:any = [];
  trendingAll:any = [];
  persons:any = [];
  constructor(private _ApiMoviesService: ApiMoviesService) {
    _ApiMoviesService.top('movie').subscribe((responce) => {
      this.topMovies = responce.results;
    });
    _ApiMoviesService.top('tv').subscribe((responce) => {
      this.topTv = responce.results;
    });
    _ApiMoviesService.trending('movie').subscribe((responce) => {
      this.trendingMovies = responce.results;
    });
    _ApiMoviesService.trending('tv').subscribe((responce) => {
      this.trendingAll = responce.results;
    });
    _ApiMoviesService.trending('all').subscribe((responce) => {
      this.trendingTv = responce.results;
    });
    _ApiMoviesService.trending('person').subscribe((responce) => {
      this.persons = responce.results;
    });
    
  }

  ngOnInit(): void {}
}
