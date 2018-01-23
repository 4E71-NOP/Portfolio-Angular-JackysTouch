import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInsertionComponent } from './article-insertion.component';

describe('ArticleInsertionComponent', () => {
  let component: ArticleInsertionComponent;
  let fixture: ComponentFixture<ArticleInsertionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleInsertionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
