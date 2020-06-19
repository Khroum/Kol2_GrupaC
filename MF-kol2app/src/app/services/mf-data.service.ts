import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MFDataService {
  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get(this.url + '/api/shop/items');
  }

  public getOne(id) {
    return this.http.get(this.url + '/api/shop/items/' + id);
  }
}
