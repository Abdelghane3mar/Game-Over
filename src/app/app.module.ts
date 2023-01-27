import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TermPipe } from './term.pipe';
import { SliceuntilePipe } from './sliceuntile.pipe';
import { SplitPipe } from './split.pipe';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IsloginDirective } from './islogin.directive';
import { NotloginDirective } from './notlogin.directive';
import { BrowserComponent } from './browser/browser.component';
import { ShooterComponent } from './shooter/shooter.component';
import { PopularityComponent } from './popularity/popularity.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { RacingComponent } from './racing/racing.component';
import { SportsComponent } from './sports/sports.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { BattleComponent } from './battle/battle.component';
import { ZombieComponent } from './zombie/zombie.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { ActionComponent } from './action/action.component';
import { FlightComponent } from './flight/flight.component';
import { ReleasComponent } from './releas/releas.component';
import { SocialComponent } from './social/social.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TermPipe,
    SliceuntilePipe,
    SplitPipe,
    FooterComponent,
    GamesComponent,
    DetailsComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    IsloginDirective,
    NotloginDirective,
    BrowserComponent,
    ShooterComponent,
    PopularityComponent,
    AlphabeticalComponent,
    RelevanceComponent,
    RacingComponent,
    SportsComponent,
    OpenWorldComponent,
    BattleComponent,
    ZombieComponent,
    FantasyComponent,
    ActionComponent,
    FlightComponent,
    ReleasComponent,
    SocialComponent,
    LoadingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //BrowserAnimationsModule, 
    //ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
