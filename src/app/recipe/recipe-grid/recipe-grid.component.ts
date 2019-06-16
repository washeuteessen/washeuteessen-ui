import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.scss']
})
export class RecipeGridComponent implements OnInit, OnChanges {

  static GRIDS = [1, 2, 3, 4];
  static AMOUNT_AUTO_SCROLLS = 5;

  grids: { [id: string]: Array<Array<Recipe>> } = {};
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
    if (changes.recipies) {
      this.calcGrids();
    }
  }

  calcGrids() {
    for (const grid of RecipeGridComponent.GRIDS) {
      this.grids[grid] = this.calcGrid(grid);
    }
  }

  calcGrid(columnSize: number) {
    const grid = new Array<Array<Recipe>>();
    for (let x = 0; x < columnSize; x++) {
      grid[x] = new Array<Recipe>();
    }
    for (let x = 0; x < this.recipies.length; x++) {
      grid[x % columnSize].push(this.recipies[x]);
    }
    return grid;
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
