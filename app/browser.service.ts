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
