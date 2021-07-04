import { SharingDataCardService } from './../sharing-data-card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  constructor(private _SharingDataCardService:SharingDataCardService) { }

  ngOnInit(): void {
  }

}
