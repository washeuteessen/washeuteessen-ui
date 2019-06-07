import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'likes',
    loadChildren: './like/like.module#LikeModule'
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
