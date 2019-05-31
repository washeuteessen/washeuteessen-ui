import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  inputStr: string;
  searchStr: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchStr = params.s;
      if (searchStr) {
        this.inputStr = searchStr;
        this.searchStr = searchStr;
      } else {
        this.searchStr = null;
      }
    });
  }

  search(text?: string) {
    let s = text;
    if (!s) {
      s = this.inputStr;
    }
    this.router.navigate([], {queryParams: {s}});
  }

  get hasSearchStr() {
    return this.searchStr && this.searchStr.length > 0;
  }


}
