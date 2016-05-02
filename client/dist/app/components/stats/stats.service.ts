import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StatsService {
  
  private url: string = 'http://localhost:3000/api';

  constructor(private http: Http) { }
  
  byCustomer(id: any, range: string): Observable<any> {
    return this.http.get(this.url + '/customers/' + id +'/stats?range=' + range);
  }
}
