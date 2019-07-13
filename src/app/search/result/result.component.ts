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
  recipies: Array<Recipe>;
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
      this.recipies = null;
      this.currentOffset = 0;
      this.searchNext();
    }
  }

  searchNext() {
    this.error = false;
    if (this.searchStr) {
      this.loading = true;
      this.searchService.search(this.searchStr, this.currentOffset, 15).subscribe(recipies => {
          this.loading = false;
          if (recipies.recipies.length > 0) {
            if (this.recipies) {
              this.recipies = this.recipies.concat(recipies.recipies);
            } else {
              this.recipies = recipies.recipies;
            }
            this.currentOffset += recipies.recipies.length;
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
