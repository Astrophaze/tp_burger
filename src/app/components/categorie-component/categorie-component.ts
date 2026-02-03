import { Component, signal } from '@angular/core';
import { CategorieModel } from '../../models/categorie-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorie-component',
  standalone: true,
  imports: [],
  templateUrl: './categorie-component.html',
  styleUrl: './categorie-component.scss',
})
export class CategorieComponent {
  dataCategorie = signal<CategorieModel[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<CategorieModel[]>('http://localhost:8080/categories.php').subscribe({
      next: (response) => {
        this.dataCategorie.set(response);
        console.log(response);
      },
      error: (error) => console.error(error),
    });
  }
}
