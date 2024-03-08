import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewsComponent } from '../../components/news/news.component';
import { ExpressionBinding } from '@angular/compiler';
import { NEWS } from '../../interfaces/hacker-news-object';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do to the news page', () => {
    // expect(component.goToNews()).toBeTruthy();
    expect(component.newsDetail.url).toBe("- - -");
  });

  it('should set date and domain', () => {
    component.setDateAndDomain();
    expect(component.newsDetail.date).toBeTruthy();
  });

  it('should observe news', () => {
    component.newsObserver.next(new NEWS());
    component.newsObserver.error('error');
    component.newsObserver.complete();
    expect(component.newsDetail).toBeTruthy();
  });

  it('should go to the news doman page', () => {
    const event = new Event('click');
    component.goToNewsMainPage(event);
    // component.newsDetail.domain = 'www.google.com';
    // component.goToNewsMainPage(event);
    expect(component.newsDetail.domain).toBeUndefined();
  });
});
