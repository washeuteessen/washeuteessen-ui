import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule, MatRippleModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {LogoComponent} from './logo/logo.component';

const modules = [
  CommonModule,
  MatInputModule,
  FontAwesomeModule,
  MatCardModule,
  FlexLayoutModule,
  MatRippleModule,
  MatButtonModule,
  InfiniteScrollModule
]

@NgModule({
  declarations: [LogoComponent],
  imports: modules,
  exports: [
    modules,
    LogoComponent
  ]
})
export class SharedModule {
}
