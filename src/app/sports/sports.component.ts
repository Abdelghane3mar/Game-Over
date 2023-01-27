import { AllGamesService } from './../games.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from './../game';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sports:Game[] = [];
  curentLength: number = 13;

  curentYear: number = new Date().getFullYear();
  loading: boolean = true;  

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _AllGamesService: AllGamesService,
    private _Router: Router
  ) {
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  // Curent Cat
  curentCat: string = this._ActivatedRoute.snapshot.params['category'] ?? 'all';

  // Curent Select
  curentP: string = '';
  curentC: string = '';
  curentS: string = '';



  // --------- Scroll
  @HostListener('window:scroll')
  seeMore(): void {
    if (scrollY + innerHeight + 200 >= document.body.offsetHeight) {
      if (this.sports.length > this.curentLength) {
        this.curentLength += 13;
      } else {
        this.loading = false;
      }
    }
  }

  ngOnInit(): void {
    this.getGames();
  }

  // Get Games Data From API
  getGames():any {
    this._AllGamesService.getGames().subscribe({
      next:(data)=>{
        this.sports=data.splice(150,70);
      console.log(data);
      }
      
      
    })
       }

  // Start Video
  playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._AllGamesService.playVideo(el, sp);
  }

  // Stop Video
  stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._AllGamesService.stopVideo(el, sp);
  }


}
