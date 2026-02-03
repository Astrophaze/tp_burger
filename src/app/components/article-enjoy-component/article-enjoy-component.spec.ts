import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEnjoyComponent } from './article-enjoy-component';

describe('ArticleEnjoyComponent', () => {
  let component: ArticleEnjoyComponent;
  let fixture: ComponentFixture<ArticleEnjoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleEnjoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleEnjoyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
