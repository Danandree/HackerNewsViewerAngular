import { Component, Input } from '@angular/core';
import { HackerNewsApiService } from '../../services/hacker-news-api.service';
import { Observer } from 'rxjs';

import { HackerNewsObject, NEWS } from '../../interfaces/hacker-news-object';


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
  newsDetail = new NEWS();
  newsObserver: Observer<NEWS> = {
    next: (data: any) => { this.newsDetail = data; },
    error: (error: any) => { console.log(error); },
    complete: () => { console.log('complete'); }
  }

  constructor(private hackerNewsApiService: HackerNewsApiService) { }

  ngOnInit(): void {
    this.hackerNewsApiService.getNewsFromId(this.newsId).subscribe(this.newsObserver);
  }

  getData(time: number): string {
    return new Date(time * 1000).toLocaleString().slice(0, -3);
  }

  getDomainFromUrl(url: string): string {
    return url.replace("http://", "").replace("https://", "").replace("www.", "").split(/[/?#]/)[0];
  }

  goToNews(url: string): void {
    if (url) {
      window.location.href = url;
    } else {
      // Dialog per dire che non c'è il link
    }
  }

  goToNewsMainPage(url: string, event: Event): void {
    event.stopPropagation();
    console.log(event);
    if (url) {
      const domain = this.getDomainFromUrl(url);
      window.location.href = "https://" + domain;
    }
  }

  setDateAndDomain(): void {
    // TODO settare la data e il dominiop già alla partenza permettendo di risparmiare funzioni
  }
}
