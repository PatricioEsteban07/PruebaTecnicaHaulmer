import { Component, OnInit } from '@angular/core';

import { APIService } from '../../services/api.service';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.css']
})
export class TopArticlesComponent implements OnInit {

  public stories: Article[];

  constructor(private service: APIService) { }

  ngOnInit() {
    this.service.getArticles().subscribe(stories => this.stories = stories);
  }

}
