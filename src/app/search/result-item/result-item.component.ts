import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../model/recipe";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

}
