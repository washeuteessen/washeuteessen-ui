import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.scss']
})
export class RecipeGridComponent implements OnInit, OnChanges {

  static AMOUNT_AUTO_SCROLLS = 5;

  currentScroll = 0;

  @Input()
  recipies: Array<Recipe>;

  @Input()
  showLoadMore = false;

  @Output()
  load = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onScroll() {
    this.currentScroll++;
    if (this.currentScroll < RecipeGridComponent.AMOUNT_AUTO_SCROLLS) {
      this.load.emit();
    }
  }

  loadMore() {
    this.currentScroll = 0;
    this.load.emit();
  }

}
