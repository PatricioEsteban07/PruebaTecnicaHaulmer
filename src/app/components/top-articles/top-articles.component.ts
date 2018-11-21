import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { APIService } from '../../services/api.service';
import { Article } from '../../models/Article';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopArticlesComponent implements OnInit {

  public offset: number;
  public articlesID: number[];
  public allArticles: Article[];
  public articles: Article[];

  public oarticlesID: Observable<number[]>;
  public oallArticles: Observable<Article[]>;
  public oarticles: Observable<Article[]>;

  constructor(private service: APIService) {
    this.articlesID=new Array<number>();
    this.allArticles=new Array<Article>();
    this.articles=new Array<Article>();
    this.offset=50;
   }

  ngOnInit() {
    this.service.getArticles().subscribe(
      stories => {this.articlesID = stories;
                  this.oarticlesID = stories;
                  this.articles = this.getContentOfStories(this.articlesID.slice(0,this.offset));
                  this.allArticles = this.getContentOfStories(this.articlesID);
              //    this.onPaginateChange(0);
      }
    );
  }

  onPaginateChange(index: number){
    index = this.offset*index;
   // this.stories=this.getContentOfStories(this.storiesID.slice(index,index+this.offset));
    this.articles=this.allArticles.slice(index,index+this.offset);
  }
  
  public getContentOfStories(storiesID: number[]): Article[]
  {
    const storiesAux=new Array<Article>();
    for(let storyID of storiesID)
    {
      this.service.getArticle(storyID).subscribe(article => storiesAux.push(article as Article));
    }
    return storiesAux;
  }


}
