import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input()
  icon;

  @Input()
  spin = false;

  @Input()
  text: string;

  constructor() {
  }

  ngOnInit() {
  }

}
