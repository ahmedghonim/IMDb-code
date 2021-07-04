import { NavComponent } from './../nav/nav.component';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
