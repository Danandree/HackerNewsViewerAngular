import { Component } from '@angular/core';
import { HackerNewsApiService } from './services/hacker-news-api.service';
import { Observer } from 'rxjs';

import { NewsComponent } from './components/news/news.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatCardModule,
    NewsComponent,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HackerNewsViewerAngular';
  numberOfNews: number = 10;
  newsList: number[] = [];
  newsToVisualize: number[] = [];
  listObserver: Observer<number[]> = {
    next: (data: number[]) => {
      this.newsList = data;
      for (let i = 0; i < this.numberOfNews; i++) {
        this.newsToVisualize.push(this.newsList.shift()!);
      }
    },
    error: (error: any) => { console.log(error); },
    complete: () => { console.log('complete'); }
  };

  constructor(private hackerNewsApiService: HackerNewsApiService) { }

  ngOnInit(): void { this.getNewsList(); }

  getNewsList(): void {
    this.hackerNewsApiService.getNewsList().subscribe(this.listObserver);
  }

  loadMore(): void {
    for (let i = 0; i < this.numberOfNews; i++) {
      let newsId = this.newsList.shift();
      if (newsId) { this.newsToVisualize.push(newsId); }
      else {
        this.getNewsList();
        break;
      }
    }
  }
}
