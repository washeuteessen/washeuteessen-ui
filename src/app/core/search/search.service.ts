import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  public search(searchStr: string, offset?: number, limit?: number): Observable<any> {

    const url = `${this.host}/search`;

    let params = new HttpParams()
      .append('s', searchStr);

    if (offset) {
      params = params.append('offset', '' + offset);
    }

    if (limit) {
      params = params.append('limit', '' + limit);
    }

    return this.http.get(url, {params});
  }

}
