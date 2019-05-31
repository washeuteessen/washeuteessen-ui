import {Component, OnInit} from '@angular/core';
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  goIcon = faArrowCircleRight;
  searchStr: string;
  inputStr: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchStr = params.s;
      if (searchStr) {
        this.searchStr = searchStr;
        this.inputStr = searchStr;
      } else {
        this.searchStr = null;
      }
    });
    this.inputStr = this.route.snapshot.queryParams.s;
  }

  search() {
    this.router.navigate([], {queryParams: {s: this.inputStr}});
  }

  get hasSearchStr() {
    return this.searchStr && this.searchStr.length > 0;
  }


}
