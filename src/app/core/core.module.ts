import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchService} from "./search/search.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ]
})
export class CoreModule {
}
