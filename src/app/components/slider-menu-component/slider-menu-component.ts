import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, ViewChild } from '@angular/core';
import { SliderMenuModel } from '../../models/slider-menu-model';

@Component({
  selector: 'app-slider-menu-component',
  standalone: true,
  imports: [],
  templateUrl: './slider-menu-component.html',
  styleUrl: './slider-menu-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderMenuComponent {

  
  
  h3 = 'OUR #DELICIOUS BURGERS';
  h3SousTitre = this.h3.replace(/(#\S+)/g, '<span class="highlight">$1</span>');
  
  breakpoints = {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
  
  dataBurgers = signal<SliderMenuModel[]>([]);

  constructor(private http: HttpClient) {
    
    this.http.get<SliderMenuModel[]>('http://localhost:8080/burgers.php').subscribe({
      next: (response) => {
        this.dataBurgers.set(response);
      },
      error: (error) => console.error(error),
    });
  }
  @ViewChild('swiper') swiper!: ElementRef<any>;

  

      ngAfterViewInit() {
        const slidesCount = this.dataBurgers().length;
        const maxSlidesPerView = 3;
        // swiper parameters
        const swiperParams = {
          slidesPerView: 3,
          navigation: true,
          loop: slidesCount > maxSlidesPerView,
          loopAdditionalSlides: 5,
          breakpoints: this.breakpoints
        };
        Object.assign(this.swiper.nativeElement, swiperParams);
        this.swiper.nativeElement.initialize();
      }
}
