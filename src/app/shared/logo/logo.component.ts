import {Component, Input, OnInit} from '@angular/core';
import {faUtensils} from '@fortawesome/free-solid-svg-icons/faUtensils';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  utensilsIcon = faUtensils;

  @Input()
  centered = false;

  constructor() {
  }

  ngOnInit() {
  }

}
