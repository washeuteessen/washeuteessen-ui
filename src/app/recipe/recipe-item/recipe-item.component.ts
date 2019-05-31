import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {SearchService} from "../../core/search/search.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  open() {
    this.searchService.openRecipe(this.recipe.id);
  }

}
