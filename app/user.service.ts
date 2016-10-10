import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {
 
  constructor(private http: Http) { }

  getUsers(): Promise<any> {
    return this.http.get('https://spreadsheets.google.com/feeds/list/1nYWVUfdWa3ilqP6NMQ9h5lmmuzMjONmbX0QIH8ugz1Y/1/public/values?alt=json')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);               
  };
  getArea(): Promise<any> {
      return this.http.get('https://spreadsheets.google.com/feeds/list/1nYWVUfdWa3ilqP6NMQ9h5lmmuzMjONmbX0QIH8ugz1Y/2/public/values?alt=json')
          .toPromise()
          .then(response => response.json())
          .catch(this.handleError);
  };
  getSensor(): Promise<any> {
      return this.http.get('https://spreadsheets.google.com/feeds/list/1nYWVUfdWa3ilqP6NMQ9h5lmmuzMjONmbX0QIH8ugz1Y/3/public/values?alt=json')
          .toPromise()
          .then(response => response.json())
          .catch(this.handleError);
  };
 getLocation(): Promise<any> {
      return this.http.get('https://spreadsheets.google.com/feeds/list/1nYWVUfdWa3ilqP6NMQ9h5lmmuzMjONmbX0QIH8ugz1Y/4/public/values?alt=json')
          .toPromise()
          .then(response => response.json())
          .catch(this.handleError);
  };
  getEventDetails(): Promise<any> {
      return this.http.get('https://spreadsheets.google.com/feeds/list/1nYWVUfdWa3ilqP6NMQ9h5lmmuzMjONmbX0QIH8ugz1Y/5/public/values?alt=json')
          .toPromise()
          .then(response => response.json())
          .catch(this.handleError);
  };
  getEvent(): Promise<any> {
      return this.http.get('https://spreadsheets.google.com/feeds/list/1nYWVUfdWa3ilqP6NMQ9h5lmmuzMjONmbX0QIH8ugz1Y/6/public/values?alt=json')
          .toPromise()
          .then(response => response.json())
          .catch(this.handleError);
  };
  getRange(): Promise<any> {
      return this.http.get('https://spreadsheets.google.com/feeds/list/1nYWVUfdWa3ilqP6NMQ9h5lmmuzMjONmbX0QIH8ugz1Y/7/public/values?alt=json')
          .toPromise()
          .then(response => response.json())
          .catch(this.handleError);
  };
  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); 
     return Promise.reject(error.message || error);
    }
}