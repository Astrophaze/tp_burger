import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMenuComponent } from './slider-menu-component';

describe('SliderMenuComponent', () => {
  let component: SliderMenuComponent;
  let fixture: ComponentFixture<SliderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
