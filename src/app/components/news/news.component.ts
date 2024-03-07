import { Component, Input } from '@angular/core';
import { HackerNewsApiService } from '../../services/hacker-news-api.service';
import { Observer } from 'rxjs';

import { HackerNewsObject } from '../../interfaces/hacker-news-object';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() newsId!: number;
  newsDetail!: HackerNewsObject;
  newsObserver: Observer<HackerNewsObject> = {
    next: (data: any) => { console.log(data);this.newsDetail = data; },
    error: (error: any) => { console.log(error); },
    complete: () => { console.log('complete'); }
  }

  constructor(private hackerNewsApiService: HackerNewsApiService) { }

  ngOnInit(): void {
    this.hackerNewsApiService.getNewsFromId(this.newsId).subscribe(this.newsObserver);
  }

  getData(time: number): string{
    return new Date(time * 1000).toLocaleString().slice(0, -3);
  }

  getDomainFromUrl(url: string): string{
    return url.replace("http://", "").replace("https://", "").replace("www.", "").split(/[/?#]/)[0];
  }
}
