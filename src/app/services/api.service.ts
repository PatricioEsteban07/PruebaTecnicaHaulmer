import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  //API a consumir (Mayor información en https://github.com/HackerNews/API)
  public baseURL = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }
  
  /**
   * GET: Extrae los mejores artículos de la API.
   */
  getArticles(): Observable<any> {
    const url = this.baseURL+"/beststories.json";
    return this.http.get<any>(url);
  }

  /**
   * GET: extrae el artículo de la API en base a su ID.
   * @param id - el identificador del artículo a extraer.
   */
  getArticle(id: number): Observable<any> {
    const url = `${this.baseURL}/item/${id}.json`;
    return this.http.get<any>(url);
  }
  
}
