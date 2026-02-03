import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOfferComponent } from './article-offer-component';

describe('ArticleOfferComponent', () => {
  let component: ArticleOfferComponent;
  let fixture: ComponentFixture<ArticleOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleOfferComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
