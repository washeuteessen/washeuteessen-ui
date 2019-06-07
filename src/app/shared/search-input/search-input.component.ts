import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnChanges {

  goIcon = faArrowCircleRight;

  @Input()
  text: string;

  @Output()
  textChange = new EventEmitter<string>();

  @Output()
  search = new EventEmitter<string>();

  inputStr: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.text) {
      this.inputStr = this.text;
    }
  }

  inputStrChanged() {
    this.textChange.emit(this.inputStr);
  }

  doSearch() {
    this.search.emit(this.inputStr);
  }

  keyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.doSearch();
    }
  }

}
