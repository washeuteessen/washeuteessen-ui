import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faHeart as like} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faHeart as unlike} from '@fortawesome/free-regular-svg-icons/faHeart';
import {Recipe} from '../../model/recipe';
import {LikeService} from '../../core/like/like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit, OnChanges {

  @Input()
  recipe: Recipe;

  like = false;

  likeIcon = like;
  unlikeIcon = unlike;

  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.recipe) {
      this.like = this.likeService.hasLiked(this.recipe);
    }
  }

  toggle(event: Event) {
    this.like = !this.like;

    if (this.like) {
      this.likeService.addRecipe(this.recipe);
    } else {
      this.likeService.removeRecipe(this.recipe);
    }

    event.stopPropagation();
  }

}
