import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatBadgeModule, MatButtonModule, MatCardModule, MatInputModule, MatRippleModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {LogoComponent} from './logo/logo.component';
import {SearchInputComponent} from './search-input/search-input.component';
import {FormsModule} from '@angular/forms';
import {LikeButtonComponent} from './like-button/like-button.component';
import {LikeLinkComponent} from './like-link/like-link.component';
import {HeaderComponent} from "./header/header.component";
import {HeaderTitleComponent} from "./header-title/header-title.component";
import {DragScrollModule} from "ngx-drag-scroll";
import {NgxMasonryModule} from "ngx-masonry";

const modules = [
  MatInputModule,
  FontAwesomeModule,
  MatCardModule,
  FlexLayoutModule,
  MatRippleModule,
  MatButtonModule,
  InfiniteScrollModule,
  MatBadgeModule,
  DragScrollModule,
  NgxMasonryModule
];

const components = [
  LogoComponent,
  SearchInputComponent,
  LikeButtonComponent,
  LikeLinkComponent,
  HeaderComponent,
  HeaderTitleComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    modules
  ],
  exports: [
    modules,
    components
  ]
})
export class SharedModule {
}
