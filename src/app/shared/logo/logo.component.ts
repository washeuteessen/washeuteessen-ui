import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {


  @Input()
  centered = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openHome() {
    this.router.navigate(['/']);
  }

}
