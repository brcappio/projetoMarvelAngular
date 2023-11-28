import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getData():Observable <any> {
    let url="assets/data/CardsDatabase.json";
    return this.http.get(url);
  }

}
