import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HackerNewsObject } from '../interfaces/hacker-news-object';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {

  constructor(private http: HttpClient) { }

  getNewsList(): Observable<number[]> {
    return this.http.get<number[]>('https://hacker-news.firebaseio.com/v0/newstories.json', { responseType: 'json' });
  }

  getNewsFromId(id: number): Observable<HackerNewsObject> {
    return this.http.get<HackerNewsObject>('https://hacker-news.firebaseio.com/v0/item/' + id + '.json', { responseType: 'json' });
  }

}
