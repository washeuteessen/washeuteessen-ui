import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeGridComponent} from './recipe-grid/recipe-grid.component';
import {SharedModule} from '../shared/shared.module';
import {RecipeItemComponent} from './recipe-item/recipe-item.component';
import {RecipeScrollComponent} from './recipe-scroll/recipe-scroll.component';
import { RecipeScrollItemComponent } from './recipe-scroll-item/recipe-scroll-item.component';

@NgModule({
  declarations: [RecipeGridComponent, RecipeItemComponent, RecipeScrollComponent, RecipeScrollItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RecipeGridComponent,
    RecipeScrollComponent
  ]
})
export class RecipeModule {
}
