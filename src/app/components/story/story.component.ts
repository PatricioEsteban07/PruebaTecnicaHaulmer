import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { APIService } from '../../services/api.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public story: Article;
  public comments: Article[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: APIService) { }

  ngOnInit() {
    this.story=new Article();
    this.comments=new Array<Article>();
    this.getStory();
  }
  
  /**
   * método para, dada la ubicación actual en la aplicación, volver a la página anterior.
   */
  goBack(): void {
    this.location.back();
  }

  getStory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getArticle(id).subscribe(
      story => { this.story = story;
                  if(story.kids!=null)
                  { 
                    this.comments=this.getComments(this.story.kids);
                  }
               }
    );
  }
  
  getComments(kids: number[]): Article[]
  {
    const commentsAux=new Array<Article>();
    for(let commentID of kids)
    {
      this.service.getArticle(commentID).subscribe(article => { if(article.deleted!=true) commentsAux.push(article as Article)});
    }
    console.log(this.story);
    console.log(kids);
    console.log(commentsAux);
    return commentsAux;
  }

}
