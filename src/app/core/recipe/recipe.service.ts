import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Recipe} from '../../model/recipe';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  public open(id: string) {

    const url = `${this.host}/recipes/${id}/external`;

    window.open(url, '_blank');
  }

  public get(id: string): Observable<Recipe> {

    const url = `${this.host}/recipes/${id}`;

    return this.http.get<Recipe>(url);
  }

}
