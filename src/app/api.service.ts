import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  addGif(urlStill, urlAnimate, title, rating) {
    const uri = 'http://localhost:4000/gifs/add';
    const obj = {
      urlStill: urlStill,
      urlAnimate: urlAnimate,
      title: title,
      rating: rating
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  getGifs() {
    const uri = 'http://localhost:4000/gifs';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
}