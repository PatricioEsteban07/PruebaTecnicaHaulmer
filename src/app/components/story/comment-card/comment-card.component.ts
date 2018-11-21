import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { APIService } from '../../../services/api.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input()
  public comment: Article;
  @Input()
  public color: boolean;
  public comments: Article[];
  public kids: Article[];

  constructor(private service: APIService) {}

  ngOnInit() {
    this.color=!this.color;
    this.kids=new Array<Article>();
    this.comments=new Array<Article>();
    if(this.comment.kids!=null)
    {
      this.comments=this.getKids(this.comment.kids);
    }
  }

  getKids(kids: number[]): Article[]
  {
    const base=new Array<Article>();
    for(let commentID of kids)
    {
      this.service.getArticle(commentID).subscribe(
        article => {  if(article.deleted!=true) {
                        base.push(article as Article); 
                       // console.log("Se obtuvo comment "+article.id)
                      }
                    },
       // error => {console.log("Error obteniendo comment "+commentID)}
      );
    }
    return base;
  }
}
