import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-scroll-item',
  templateUrl: './recipe-scroll-item.component.html',
  styleUrls: ['./recipe-scroll-item.component.scss']
})
export class RecipeScrollItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

}
