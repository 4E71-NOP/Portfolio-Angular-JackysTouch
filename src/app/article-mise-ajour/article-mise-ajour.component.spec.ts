import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMiseAjourComponent } from './article-mise-ajour.component';

describe('ArticleMiseAjourComponent', () => {
  let component: ArticleMiseAjourComponent;
  let fixture: ComponentFixture<ArticleMiseAjourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMiseAjourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMiseAjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
