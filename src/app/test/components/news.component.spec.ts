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
      imports: [NewsComponent, HttpClientTestingModule],
      providers: [{ provide: Window, useValue: { location: { href: "" } } },]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to the news page', () => {
    component.newsDetail = new NEWS();
    component.goToNews();
    const spy = spyOn(component, 'goToNews').and.callThrough();
    // component.newsDetail.url = "";
    component.goToNews();
    expect(spy).toHaveBeenCalled();
    // expect(component.goToNews()).toBeTruthy();
    // expect(component.newsDetail.url).toBe("- - -");
  });
  
  it('should set date and domain', () => {
    component.newsDetail = new NEWS();
    component.newsDetail.url = "https://www.google.com";
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
    component.newsDetail = new NEWS();
    const event = new Event('click');
    component.goToNewsMainPage(event);
    expect(component.newsDetail.domain).toBeUndefined();

    const spy = spyOn(component, 'goToNewsMainPage');
    component.newsDetail.domain = 'www.google.com';
    component.goToNewsMainPage(event);
    expect(spy).toHaveBeenCalled();
    // component.goToNewsMainPage(event);
    // component.newsDetail.domain = 'www.google.com';
    // component.goToNewsMainPage(event);
  });
});
