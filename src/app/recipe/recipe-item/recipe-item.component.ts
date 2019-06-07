import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {SourceService} from '../../core/source/source.service';
import {RecipeService} from '../../core/recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private logoService: SourceService
  ) {
  }

  ngOnInit() {
  }

  open() {
    this.recipeService.open(this.recipe.id);
  }

  get logo() {
    return this.logoService.getLogo(this.recipe.source);
  }

  get name() {
    return this.logoService.getName(this.recipe.source);
  }

}
