import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { APIService } from '../../../services/api.service';

import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input()
  public articleID: number;

  @Output() 
  public isReady = new EventEmitter();

  public article: Article;

  constructor(private service: APIService) {
    this.article=new Article();
  }

  ngOnInit() {
    this.service.getArticle(this.articleID).subscribe(
      article => {this.article = article;
                  this.isReady.emit(1); 
                console.log(1);},
      error => { this.isReady.emit(2); 
        console.log(2);}
    );
  }
}
