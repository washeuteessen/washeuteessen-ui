import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {SharedModule} from "../shared/shared.module";
import {ResultComponent} from './result/result.component';
import {FormsModule} from "@angular/forms";
import { ResultItemComponent } from './result-item/result-item.component';

@NgModule({
  declarations: [SearchComponent, ResultComponent, ResultItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule {
}
