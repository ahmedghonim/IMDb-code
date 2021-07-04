import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { AuthGuard } from './auth.guard';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';

const routes: Routes = [
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"movies",component:MoviesComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"d",canActivate:[AuthGuard],component:DialogDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
