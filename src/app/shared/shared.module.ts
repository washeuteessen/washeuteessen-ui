import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule, MatRippleModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatInputModule,
    FontAwesomeModule,
    MatCardModule,
    FlexLayoutModule,
    MatRippleModule,
    MatButtonModule,
    InfiniteScrollModule
  ]
})
export class SharedModule {
}
