import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderReviewsComponent } from './slider-reviews-component';

describe('SliderReviewsComponent', () => {
  let component: SliderReviewsComponent;
  let fixture: ComponentFixture<SliderReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderReviewsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
