import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}


  envoyerFormulaire(formValues: FormData) {
    return this.http.post('http://localhost:8080/contact.php', formValues);
}

  envoyerNewsletter(formValues: any) {
    return this.http.post('http://localhost:8080/newsletter.php', formValues);
}

}
