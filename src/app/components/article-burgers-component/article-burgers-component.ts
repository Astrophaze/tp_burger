import { Component, signal } from '@angular/core';
import { ArticleBurgersModel } from '../../models/article-burgers-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-burgers-component',
  imports: [],
  templateUrl: './article-burgers-component.html',
  styleUrl: './article-burgers-component.scss',
})
export class ArticleBurgersComponent {
  dataArticle = signal<ArticleBurgersModel>({
    titre: '',
    sous_titre: '',
    contenu: '',
    image_src: ''
  });

  constructor(private http: HttpClient) {
    this.http.get<ArticleBurgersModel>('http://localhost:8080/article.php?id_article=2').subscribe({
      next: (response) => {
        response.sous_titre = response.sous_titre.replace(/(#\S+)/g, '<span class="highlight">$1</span>');
        this.dataArticle.set(response);
      },
      error: (error) => console.error(error),
    });
  }
}
