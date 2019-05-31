import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {SharedModule} from '../shared/shared.module';
import {ResultComponent} from './result/result.component';
import {FormsModule} from '@angular/forms';
import {RecipeModule} from '../recipe/recipe.module';

@NgModule({
  declarations: [SearchComponent, ResultComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RecipeModule
  ],
  exports: [SearchComponent]
})
export class SearchModule {
}
