import { Component, ElementRef , OnInit } from '@angular/core';
import { AllGamesService } from '../games.service';
import { Game } from './../game';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games:Game[] = [];
  constructor(private _AllGamesService: AllGamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  // Get Games Data From API
  getGames():any {
    this._AllGamesService.getGames().subscribe( (data) => {
        this.games = data ;
    })  }

  // Start Video
  playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._AllGamesService.playVideo(el, sp);
  }

  // Stop Video
  stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._AllGamesService.stopVideo(el, sp);
  }
}


