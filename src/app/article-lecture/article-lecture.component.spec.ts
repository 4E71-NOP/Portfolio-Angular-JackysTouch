import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLectureComponent } from './article-lecture.component';

describe('ArticleLectureComponent', () => {
  let component: ArticleLectureComponent;
  let fixture: ComponentFixture<ArticleLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
