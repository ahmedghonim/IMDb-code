import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiMoviesService } from './../api-movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  topMovies: any = [];
  topTv: any = [];
  trendingMovies: any = [];
  trendingTv: any = [];
  trendingAll: any = [];
  persons: any = [];

  unsubscribeTopMovie: any;
  unsubscribeTopTv: any;
  unsubscribeTrendingMovie: any;
  unsubscribeTrendingTv: any;
  unsubscribeTrendingAll: any;
  unsubscribeTrendingPerson: any;

  constructor(private _ApiMoviesService: ApiMoviesService) {}

  ngOnInit(): void {
    this.unsubscribeTopMovie = this._ApiMoviesService
      .top('movie')
      .subscribe((responce) => {
        this.topMovies = responce.results;
      });

    this.unsubscribeTopTv = this._ApiMoviesService
      .top('tv')
      .subscribe((responce) => {
        this.topTv = responce.results;
      });
    this.unsubscribeTrendingMovie = this._ApiMoviesService
      .trending('movie')
      .subscribe((responce) => {
        this.trendingMovies = responce.results;
      });
    this.unsubscribeTrendingTv = this._ApiMoviesService
      .trending('tv')
      .subscribe((responce) => {
        this.trendingAll = responce.results;
      });
    this.unsubscribeTrendingAll = this._ApiMoviesService
      .trending('all')
      .subscribe((responce) => {
        this.trendingTv = responce.results;
      });
    this.unsubscribeTrendingPerson = this._ApiMoviesService
      .trending('person')
      .subscribe((responce) => {
        this.persons = responce.results;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeTopMovie.unsubscribe();
    this.unsubscribeTopTv.unsubscribe();
    this.unsubscribeTrendingMovie.unsubscribe();
    this.unsubscribeTrendingTv.unsubscribe();
    this.unsubscribeTrendingAll.unsubscribe();
    this.unsubscribeTrendingPerson.unsubscribe();
  }
}
