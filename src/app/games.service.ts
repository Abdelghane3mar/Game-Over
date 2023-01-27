import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllGamesService {
 

  headers={'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            };

  constructor(public _HttpClient:HttpClient){ }
  getGames():Observable<any>{
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers:this.headers
    })
  

  }

   
  getGamesBrowser():Observable<any>{
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?=platform',{
      headers:this.headers,
      params:{
        platform:'browser'
      }
    })
    
  }
  
 getSortby():Observable<any>{
  return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?=sort-by',{
    headers:this.headers,
    params:{
      sortby:'popularity'
    }
  })
 }
 
 getDate():Observable<any>{
  return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?=sort-by',{
    headers:this.headers,
    params:{
      sortby:'releas-date'
    }
  })
 }

 getGate():Observable<any>{
  return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?=category',{
    headers:this.headers,
    params:{
      category:'racing'
    }
  })


}

getsports():Observable<any>{
  return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?=category',{
    headers:this.headers,
    params:{
      category:'racing'
    }
  })

 

}

getShooter():Observable<any>{
  return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games?=category',{
    headers:this.headers,
    params:{
      category:'shooter'
    }
  })  
} ;




getGamesId(id:number):Observable<any>{
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
    headers:this.headers
  })
   

}



  //Get Games By Cat
  getGamesByCat(cat: string): Observable<any> {
    return this._HttpClient.get(`${'https://free-to-play-games-database.p.rapidapi.com/api/games'}?category=${cat}`);
  }


  //Get Games By PlateForm
  getGamesByPlatForm(plat: string): Observable<any> {
    return this._HttpClient.get(`${'https://free-to-play-games-database.p.rapidapi.com/api/games'}?platform=${plat}`);
  }

  //Get Games By Sorted
  getGamesBySored(sort: string): Observable<any> {
    return this._HttpClient.get(`${'https://free-to-play-games-database.p.rapidapi.com/api/games'}?sort-by=${sort}`);
  }

  //Get Games By Sorted Plat Cat    platform=browser&category=mmorpg&sort-by=release-date
  getGamesBySPC(cat: string, plat: string, sort: string): Observable<any> {
    return this._HttpClient.get(
      `${'https://free-to-play-games-database.p.rapidapi.com/api/games'}?${
        plat != 'Browse By Platform:' ? `platform=${plat}&` : ''
      }${sort != 'Sort By:' ? `sort-by=${sort}&` : ''}${
        cat != 'all' ? `category=${cat}&` : ''
      }`
    );
  }


  // Method Play And Stop Video
  // Start Video
  playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    el.classList.replace('d-none', 'd-flex');
    el.muted = true;
    sp.classList.replace('d-none', 'd-flex');
    el.play()
      .then(() => {
        sp.classList.replace('d-flex', 'd-none');
      })
      .catch((err) => {
        console.log('Not Support');
      });
  }

  // Stop Video
  stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    sp.classList.replace('d-flex', 'd-none');
    el.muted = true;
    el.pause();
    el.classList.replace('d-flex', 'd-none');
  }


}


