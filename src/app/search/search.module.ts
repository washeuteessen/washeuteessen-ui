import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {SharedModule} from '../shared/shared.module';
import {ResultComponent} from './result/result.component';
import {FormsModule} from '@angular/forms';
import {RecipeModule} from '../recipe/recipe.module';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [SearchComponent, ResultComponent, SearchInputComponent],
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
