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
    private service: APIService) { 
      this.story=new Article();
      this.comments=new Array<Article>();
    }

  ngOnInit() {
    this.getStory();
  }
  
  /**
   * método para, dada la ubicación actual en la aplicación, volver a la página anterior.
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Método que, dado el id obtenido de la URL actual, obtiene los datos del artículo asociado.
   * 
   */
  getStory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getArticle(id).subscribe(
      story => { this.story = story;
                  if(story.kids!=null)
                  { 
                    this.comments=this.getComments(this.story.kids);
                  }
               },
      error => { this.location.go("/404error"); }
    );
  }

  /**
   * Método que, dado un arreglo de ID, obtiene todos los comentarios hijos asociados
   * @param kids - arreglo con los ID de los comentarios a extraer
   */
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
