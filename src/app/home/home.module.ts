import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {TodayComponent} from './today/today.component';
import {RecipeModule} from '../recipe/recipe.module';

@NgModule({
  declarations: [HomeComponent, TodayComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecipeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
