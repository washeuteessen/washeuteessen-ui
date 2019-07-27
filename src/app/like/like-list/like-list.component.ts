import {Component, OnInit} from '@angular/core';
import {LikeService} from '../../core/like/like.service';
import {Recipe} from '../../model/recipe';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {

  iconNoFavorites = faHeart;

  recipies: Array<Recipe>;

  constructor(private likeService: LikeService) {
  }

  ngOnInit() {
    this.likeService.getRecipies().subscribe(recipies => {
        this.recipies = recipies;
      }
    );
  }


}
