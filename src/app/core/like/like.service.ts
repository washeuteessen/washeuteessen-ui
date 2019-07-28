import {Injectable} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {RecipeService} from '../recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  static KEY = 'washeuteessen';

  likeData: Array<string>;
  subject = new BehaviorSubject<Array<string>>(new Array<string>());

  constructor(private recipeService: RecipeService) {
    this.likeData = JSON.parse(localStorage.getItem(LikeService.KEY));
    if (!this.likeData) {
      this.likeData = new Array<string>();
    }
    this.subject.next(this.likeData);
  }

  public addRecipe(recipe: Recipe) {
    const data = this.likeData;
    data.push(recipe.id);
    this.write(data);
  }

  public removeRecipe(recipe: Recipe) {
    const data = this.likeData;
    data.splice(data.indexOf(recipe.id), 1);
    this.write(data);
  }

  public getLikes(): Observable<Array<string>> {
    return this.subject.asObservable();
  }

  public hasLiked(recipe: Recipe): boolean {
    return this.likeData.indexOf(recipe.id) !== -1;
  }

  private write(data: any) {
    this.likeData = data;
    localStorage.setItem(LikeService.KEY, JSON.stringify(data));
    this.subject.next(data);
  }

  getRecipies(): Observable<Array<Recipe>> {
    const subject = new Subject<Array<Recipe>>();
    const recipies = new Array<Recipe>();
    this.likeData.forEach(like => {
      this.recipeService.get(like).subscribe(recipe => {
          recipies.push(recipe);
          subject.next(Array.from(recipies));
        },
        error => {
          subject.error(error);
        });
    });
    if (this.likeData.length === 0) {
      subject.complete();
    }
    return subject.asObservable();
  }

}
