import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeGridComponent} from './recipe-grid/recipe-grid.component';
import {RecipeItemComponent} from './recipe-item/recipe-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [RecipeGridComponent, RecipeItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RecipeGridComponent
  ]
})
export class RecipeModule {
}
