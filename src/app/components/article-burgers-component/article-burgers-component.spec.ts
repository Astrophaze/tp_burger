import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBurgersComponent } from './article-burgers-component';

describe('ArticleBurgersComponent', () => {
  let component: ArticleBurgersComponent;
  let fixture: ComponentFixture<ArticleBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleBurgersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleBurgersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
