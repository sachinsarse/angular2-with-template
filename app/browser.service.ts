// import { Injectable } from '@angular/core';

// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

// @Injectable()
// export class HeroService {
//     getHeroes(): Promise<Hero[]> {
//     return Promise.resolve(HEROES);
//     };

//     getHeroesSlowly(): Promise<Hero[]> {
//     return new Promise<Hero[]>(resolve =>
//         setTimeout(resolve, 2000)) // delay 2 seconds
//         .then(() => this.getHeroes());
//     };

//     getHero(id: number): Promise<Hero> {
//      return this.getHeroes()
//              .then(heroes => heroes.find(hero => hero.id === id));
//     };
// }

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class BrowserService {
 
  constructor(private http: Http) { }

  getBrowsers(): Promise<any> {
    return this.http.get('https://spreadsheets.google.com/feeds/list/1iCbjmOW99QwXp-pIcN8sQEz8o0z7KC6q6BR7P_DzAlY/1/public/values?alt=json')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);               
  };
 
  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); 
     return Promise.reject(error.message || error);
    }
}
