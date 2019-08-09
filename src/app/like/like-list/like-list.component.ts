import {Component, OnInit} from '@angular/core';
import {LikeService} from '../../core/like/like.service';
import {Recipe} from '../../model/recipe';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {

  iconNoFavorites = faHeart;
  iconLoading = faCircleNotch;
  iconError = faExclamationTriangle;

  error;
  loading = false;
  recipes: Array<Recipe>;

  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
    this.loading = true;
    this.likeService.getRecipes().subscribe(recipes => {
        this.recipes = recipes;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }


}
