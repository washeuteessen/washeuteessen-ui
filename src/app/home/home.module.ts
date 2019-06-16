import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {TodayComponent} from './today/today.component';
import {RecipeModule} from '../recipe/recipe.module';
import {ImpressumComponent} from './impressum/impressum.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, TodayComponent, ImpressumComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecipeModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
