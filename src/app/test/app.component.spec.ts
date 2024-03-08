import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { provideHttpClient } from '@angular/common/http';
import { HackerNewsApiService } from '../services/hacker-news-api.service';

describe('AppComponent', () => {
  // const fixture = TestBed.createComponent(AppComponent);
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(), HackerNewsApiService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'HackerNewsViewerAngular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HackerNewsViewerAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hacker News Viewer');
  });

  it('should have load more button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.loadMoreButton')?.textContent).toContain('Load more');
  });

  it('should load more news', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.numberOfNews = 5;
    component.newsList = [1, 2, 3];
    component.loadMore();
    expect(component.newsToVisualize.length).toBe(3);
  });

  it('should observe news list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.listObserver.next([1, 2, 3]);
    component.listObserver.error([1, 2, 3]);
    component.listObserver.complete();
    // expect(component.newsToVisualize.length).toBe(3);
    // expect(component.newsList.length).toBe(3);
    expect(component.numberOfNews).toBe(10);
  });
});
