import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LikeListComponent} from './like-list/like-list.component';
import {LikeRoutingModule} from './like-routing.module';
import {RecipeModule} from '../recipe/recipe.module';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [LikeListComponent],
  imports: [
    CommonModule,
    LikeRoutingModule,
    RecipeModule,
    SharedModule
  ]
})
export class LikeModule {
}
