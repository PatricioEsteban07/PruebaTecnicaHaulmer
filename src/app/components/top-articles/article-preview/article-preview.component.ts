import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { APIService } from '../../../services/api.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input()
  public article: Observable<Article>;

  constructor(private service: APIService) { }

  ngOnInit() {
  }

}
