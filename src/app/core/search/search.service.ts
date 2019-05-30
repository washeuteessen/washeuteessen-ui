import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  public search(searchStr: string): Observable<any> {

    const url = `${this.host}/search`;

    const params = new HttpParams().append('s', searchStr);

    return this.http.get(url, {params});
  }

}
