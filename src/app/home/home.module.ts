import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HowtoComponent} from './howto/howto.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HowtoComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
