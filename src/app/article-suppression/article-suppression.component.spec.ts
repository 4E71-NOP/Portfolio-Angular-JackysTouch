import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSuppressionComponent } from './article-suppression.component';

describe('ArticleSuppressionComponent', () => {
  let component: ArticleSuppressionComponent;
  let fixture: ComponentFixture<ArticleSuppressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSuppressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
