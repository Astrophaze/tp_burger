import { Component, signal } from '@angular/core';
import { ArticleTweetsWidgetModel } from '../../models/article-tweets-widget-model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer-component',
  imports: [ReactiveFormsModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {

  dataArticle = signal<ArticleTweetsWidgetModel>({
    sous_titre: '',
    contenu: '',
    image_src: '',
    libelle_lien: '',
    href_lien: ''
  });

  formulaire: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private apiService: ApiService,
  ) {
    this.formulaire = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    });

    this.http.get<ArticleTweetsWidgetModel>('http://localhost:8080/article.php?id_article=5').subscribe({
          next: (response) => {
            this.dataArticle.set(response);
          },
          error: (error) => console.error(error),
        });

}

envoyerNewsletter() {
    if (this.formulaire.valid) {
      // Créer un FormData au lieu d'envoyer l'objet brut
      const formData = new FormData();
      formData.append('email', this.formulaire.get('email')?.value);

      this.apiService.envoyerNewsletter(formData).subscribe({
        next: (res) => {
          console.log('Succès !', res);
          this.formulaire.reset();
        },
        error: (err) => console.error("Erreur lors de l'envoi", err),
      });
    }
  }
}
