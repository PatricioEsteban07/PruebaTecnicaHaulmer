import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  public baseURL = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    const url = this.baseURL+"/beststories.json";
    return this.http.get<any>(url);
  }

  getArticle(id: number): Observable<any> {
    const url = `${this.baseURL}/item/${id}.json`;
    return this.http.get<any>(url);
  }
  
}
