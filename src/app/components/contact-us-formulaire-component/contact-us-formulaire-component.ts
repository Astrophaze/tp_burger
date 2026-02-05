import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api-service';
import { ArticleContactModel } from '../../models/article-contact-model';

@Component({
  selector: 'app-contact-us-formulaire-component',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us-formulaire-component.html',
  styleUrl: './contact-us-formulaire-component.scss',
})
export class ContactUsFormulaireComponent {
  h3 = 'HAVE A #QUESTION ?';
  h3SousTitre = this.h3.replace(/(#\S+)/g, '<span class="highlight">$1</span>');

  dataArticle = signal<ArticleContactModel>({
    titre: '',
    sous_titre: '',
    contenu: ''
  });

  formulaire: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private apiService: ApiService,
  ) {
    this.formulaire = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });

    this.http.get<ArticleContactModel>('http://localhost:8080/article.php?id_article=4').subscribe({
      next: (response) => {
        this.dataArticle.set(response);
      },
      error: (error) => console.error(error),
    });
  }

  envoyerFormulaire() {
    if (this.formulaire.valid) {
      const formData = new FormData();
      formData.append('nom', this.formulaire.get('nom')?.value);
      formData.append('email', this.formulaire.get('email')?.value);
      formData.append('message', this.formulaire.get('message')?.value);

      this.apiService.envoyerFormulaire(formData).subscribe({
        next: (res) => {
          console.log('Succès !', res);
          this.formulaire.reset();
        },
        error: (err) => console.error("Erreur lors de l'envoi", err),
      });
    }
  }
}
