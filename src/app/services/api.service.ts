import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  public baseURL = 'https://hacker-news.firebaseio.com/v0/';

	httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'text/json',
                                'Access-Control-Allow-Origin':'*',
                                'Authorization':'authkey', })
  };

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    const url = `${this.baseURL}/beststories`;
    return this.http.get<Article[]>(this.baseURL,this.httpOptions);
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.baseURL}/item/${id}`;
    return this.http.get<Article>(this.baseURL,this.httpOptions);
  }


  
}
