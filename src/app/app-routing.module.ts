import { ReleasComponent } from './releas/releas.component';
import { FlightComponent } from './flight/flight.component';
import { ActionComponent } from './action/action.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { ZombieComponent } from './zombie/zombie.component';
import { BattleComponent } from './battle/battle.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { SportsComponent } from './sports/sports.component';
import { RacingComponent } from './racing/racing.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { PopularityComponent } from './popularity/popularity.component';
import { ShooterComponent } from './shooter/shooter.component';
import { BrowserComponent } from './browser/browser.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GamesComponent } from './games/games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'games', component:GamesComponent },
  { path: 'details/:id', component:DetailsComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'browser', component:BrowserComponent },
  { path: 'browser/:category', component:BrowserComponent },
  { path: 'shooter', component:ShooterComponent },
  { path: 'popularity', component:PopularityComponent },
  { path: 'alphabetical', component:AlphabeticalComponent },
  { path: 'relevance', component:RelevanceComponent },
  { path: 'racing', component:RacingComponent },
  { path: 'sports', component:SportsComponent },
  { path: 'open_world', component:OpenWorldComponent },
  { path: 'battle', component:BattleComponent },
  { path: 'zombie', component:ZombieComponent },
  { path: 'fantasy', component:FantasyComponent },
  { path: 'action', component:ActionComponent },
  { path: 'flight', component:FlightComponent },
  { path: 'releas', component:ReleasComponent },
  { path: 'login', component:LoginComponent },
  { path: '**', component:NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
