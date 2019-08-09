import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-scroll',
  templateUrl: './recipe-scroll.component.html',
  styleUrls: ['./recipe-scroll.component.scss']
})
export class RecipeScrollComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  recipes: Array<Recipe>;

  constructor() {
  }

  ngOnInit() {
  }

}
