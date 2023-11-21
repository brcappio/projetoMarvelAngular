import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MarvelCharacter } from '../models/marvelcharacter.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private apiKey = '25e7182e47e20d66734bbda94de292d9';
  private baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor(private http: HttpClient) { }

  getMarvelCharacter(characterName: string): Observable<MarvelCharacter> {
    const queryParams = {
      nameStartsWith: characterName,
      apikey: this.apiKey,
    };

    return this.http.get<MarvelCharacter>(this.baseUrl, { params: queryParams }).pipe(
      catchError(error => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }
}
