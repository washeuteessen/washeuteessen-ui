import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SearchService} from '../../core/search/search.service';
import {Recipe} from '../../model/recipe';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import {faFrown} from '@fortawesome/free-solid-svg-icons/faFrown';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  faWarning = faExclamationTriangle;
  faNotFound = faFrown;
  faLoading = faCircleNotch;

  @Input()
  searchStr: string;
  recipes: Array<Recipe>;
  moreAvailable = true;

  currentOffset = 0;
  error = false;
  loading = false;

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.searchStr) {
      this.recipes = null;
      this.currentOffset = 0;
      this.searchNext();
    }
  }

  searchNext() {
    this.error = false;
    if (this.searchStr) {
      this.loading = true;
      this.moreAvailable = false;
      const offset = this.currentOffset;
      this.currentOffset += 15;
      this.searchService.search(this.searchStr, this.currentOffset, 15).subscribe(recipes => {
          this.loading = false;
          if (recipes.recipes.length > 0) {
            if (this.recipes) {
              this.recipes = this.recipes.concat(recipes.recipes);
            } else {
              this.recipes = recipes.recipes;
            }
            this.moreAvailable = true;
          } else {
            this.moreAvailable = false;
          }
        },
        error => {
          this.loading = false;
          this.error = true;
        });
    }
  }

}
