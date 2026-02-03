import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleEnjoyModel } from '../../models/article-enjoy-model';

@Component({
  selector: 'app-article-enjoy-component',
  standalone: true,
  imports: [],
  templateUrl: './article-enjoy-component.html',
  styleUrl: './article-enjoy-component.scss',
})
export class ArticleEnjoyComponent {
  dataArticle = signal<ArticleEnjoyModel>({
    sous_titre: '',
    image_src: '',
    libelle_lien: '',
    href_lien: '',
  });

  constructor(private http: HttpClient) {
    this.http.get<ArticleEnjoyModel>('http://localhost:8080/article.php?id_article=1').subscribe({
      next: (response) => {
        response.sous_titre = response.sous_titre.replace(/(#\S+)/g, '<span class="highlight">$1</span>');
        this.dataArticle.set(response);
      },
      error: (error) => console.error(error),
    });
  }
}
