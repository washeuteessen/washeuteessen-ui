import {Component, OnInit} from '@angular/core';
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {Router} from "@angular/router";
import {LikeService} from "../../core/like/like.service";

@Component({
  selector: 'app-like-link',
  templateUrl: './like-link.component.html',
  styleUrls: ['./like-link.component.scss']
})
export class LikeLinkComponent implements OnInit {

  like = faHeart;

  likeCount = 0;

  constructor(private router: Router,
              private likeService: LikeService
  ) {
  }

  ngOnInit() {
    this.likeService.getLikes().subscribe(likes => {
        this.likeCount = likes.length;
      }
    );
  }

  openLikes() {
    this.router.navigate(['/', 'likes']);
  }

}
