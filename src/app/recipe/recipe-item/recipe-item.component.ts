import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {SearchService} from "../../core/search/search.service";
import {SourceService} from "../../core/source/source.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor(
    private searchService: SearchService,
    private logoService: SourceService
  ) {
  }

  ngOnInit() {
  }

  open() {
    this.searchService.openRecipe(this.recipe.id);
  }

  get logo() {
    return this.logoService.getLogo(this.recipe.source);
  }

  get name() {
    return this.logoService.getName(this.recipe.source);
  }

}
