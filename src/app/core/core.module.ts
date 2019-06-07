import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchService} from './search/search.service';
import {HttpClientModule} from '@angular/common/http';
import {SourceService} from './source/source.service';
import {LikeService} from './like/like.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    SourceService,
    LikeService
  ]
})
export class CoreModule {
}
