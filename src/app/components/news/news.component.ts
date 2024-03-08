import { Component, Input } from '@angular/core';
import { Observer } from 'rxjs';
import { HackerNewsApiService } from '../../services/hacker-news-api.service';

import { NEWS } from '../../interfaces/hacker-news-object';

import { MatCardModule } from '@angular/material/card';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() newsId!: number;
  newsDetail!: NEWS;
  newsObserver: Observer<NEWS> = {
    next: (data: NEWS) => {
      this.newsDetail = data;
      this.setDateAndDomain();
    },
    error: (error: any) => { console.log(error); },
    complete: () => { console.log('complete'); }
  }

  constructor(private hackerNewsApiService: HackerNewsApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.hackerNewsApiService.getNewsFromId(this.newsId).subscribe(this.newsObserver);
  }

  goToNews(): void {
    if (this.newsDetail.url) { window.location.href = this.newsDetail.url; }
    else { this.dialog.open(ErrorDialogComponent, { data: { message: "URL della news non trovato!", status: 0 } }); }
  }

  goToNewsMainPage(event: Event): void {
    event.stopPropagation();
    if (this.newsDetail.domain) { window.location.href = "https://" + this.newsDetail.domain; }
  }

  setDateAndDomain(): void {
    this.newsDetail.date = new Date(this.newsDetail.time * 1000).toLocaleString().slice(0, -3);
    if (this.newsDetail.url) {
      this.newsDetail.domain = this.newsDetail.url.replace("http://", "").replace("https://", "").replace("www.", "").split(/[/?#]/)[0];
    }
  }
}
