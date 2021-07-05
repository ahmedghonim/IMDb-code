import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeHederComponent } from './home-heder/home-heder.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { CardWithDetaliesComponent } from './card-with-detalies/card-with-detalies.component';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    HomeHederComponent,
    MoviesComponent,
    TvComponent,
    RegisterComponent,
    NotfoundComponent,
    CardSliderComponent,
    CardWithDetaliesComponent,
    DialogDetailsComponent,
    DetailsComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    ObserversModule,
    HttpClientModule,
    RouterModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
