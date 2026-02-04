import { Component, signal } from '@angular/core';
import { AuthService } from './services/auth-service';
import { HeaderComponent } from "./components/header-component/header-component";
import { ArticleEnjoyComponent } from "./components/article-enjoy-component/article-enjoy-component";
import { CategorieComponent } from "./components/categorie-component/categorie-component";
import { ArticleBurgersComponent } from "./components/article-burgers-component/article-burgers-component";
import { ArticleOfferComponent } from "./components/article-offer-component/article-offer-component";
import { SliderMenuComponent } from "./components/slider-menu-component/slider-menu-component";
import { SliderReviewsComponent } from "./components/slider-reviews-component/slider-reviews-component";
import { VideoPromoComponent } from "./components/video-promo-component/video-promo-component";
import { ContactUsFormulaireComponent } from "./components/contact-us-formulaire-component/contact-us-formulaire-component";
import { FooterComponent } from "./components/footer-component/footer-component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ArticleEnjoyComponent, CategorieComponent, ArticleBurgersComponent, ArticleOfferComponent, SliderMenuComponent, SliderReviewsComponent, VideoPromoComponent, ContactUsFormulaireComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('tp_burger');

  constructor(private authService: AuthService) {
    this.authService.fetchJwtToken().subscribe({
      next: () => {},
      error: (err) => {
        console.error('Impossible de récupérer le JWT');
        console.log(err);
      },
    });
  }
}
