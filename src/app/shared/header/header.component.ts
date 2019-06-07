import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchStr: string;

  @Input()
  showLogo = false;

  @Input()
  showLikes = false;

  @Input()
  showSearch = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/', 'search'], {queryParams: {s: this.searchStr}});
  }

}
