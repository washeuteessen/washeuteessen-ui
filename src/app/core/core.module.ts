import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchService} from './search/search.service';
import {HttpClientModule} from '@angular/common/http';
import {SourceService} from './source/source.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    SourceService
  ]
})
export class CoreModule {
}
