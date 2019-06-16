import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SearchService} from '../../core/search/search.service';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  @Input()
  searchStr: string;
  recipies: Array<Recipe>;
  moreAvailable = true;

  currentOffset = 0;

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.searchStr) {
      this.recipies = new Array<Recipe>();
      this.currentOffset = 0;
      this.searchNext();
    }
  }

  searchNext() {
    if (this.searchStr) {
      this.searchService.search(this.searchStr, this.currentOffset, 10).subscribe(recipies => {
        if (recipies.recipies.length > 0) {
          this.recipies = this.recipies.concat(recipies.recipies);
          this.currentOffset += recipies.recipies.length;
        } else {
          this.moreAvailable = false;
        }
      });
    }
  }

}
