import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiSignService } from './../api-sign.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isLogin = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _ApiSignService: ApiSignService
  ) {
    _ApiSignService.curantUser.subscribe(()=>{
      if (_ApiSignService.curantUser.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  }
  logOutFromApi(){
    return this._ApiSignService.logout()
  }
}
