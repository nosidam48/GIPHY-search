import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GifService {

  constructor(private http: HttpClient) { }

  addGif(url, title, rating) {
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      url: url,
      title: title,
      rating: rating
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:4000/coins';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editCoin(id) {
    const uri = 'http://localhost:4000/coins/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}