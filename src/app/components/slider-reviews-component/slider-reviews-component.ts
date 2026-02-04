import { Component, signal, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SliderReviewsModel } from '../../models/slider-reviews-model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-reviews-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-reviews-component.html',
  styleUrl: './slider-reviews-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderReviewsComponent {

  h3 = 'WHAT OUR #CLIENTS SAY';
  h3SousTitre = this.h3.replace(/(#\S+)/g, '<span class="highlight">$1</span>');

  
  dataSlider = signal<SliderReviewsModel[]>([]);

  constructor(private http: HttpClient) {

    this.http.get<SliderReviewsModel[]>('http://localhost:8080/reviews.php').subscribe({
          next: (response) => {
            this.dataSlider.set(response);
          },
          error: (error) => console.error(error),
        });
  }

}
