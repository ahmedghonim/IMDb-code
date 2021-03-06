import { WatchlistComponent } from './watchlist/watchlist.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"movies",component:MoviesComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"details",canActivate:[AuthGuard],component:DetailsComponent},
  {path:"watchlist",canActivate:[AuthGuard],component:WatchlistComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
