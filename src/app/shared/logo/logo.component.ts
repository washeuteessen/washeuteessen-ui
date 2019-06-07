import {Component, Input, OnInit} from '@angular/core';
import {faUtensils} from '@fortawesome/free-solid-svg-icons/faUtensils';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  utensilsIcon = faUtensils;

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
