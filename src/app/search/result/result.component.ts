import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SearchService} from "../../core/search/search.service";
import {Recipe} from "../../model/recipe";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  @Input()
  searchStr: string;
  recipies: Array<Recipe>;

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.searchStr) {
      this.search();
    }
  }

  search() {
    this.searchService.search(this.searchStr).subscribe(recipies => {
      this.recipies = recipies.recipies;
    });
  }

}
