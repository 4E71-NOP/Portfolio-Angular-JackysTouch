import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFreshJackiesComponent } from './special-fresh-jackies.component';

describe('SpecialFreshJackiesComponent', () => {
  let component: SpecialFreshJackiesComponent;
  let fixture: ComponentFixture<SpecialFreshJackiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialFreshJackiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialFreshJackiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
