import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  uri = 'http://localhost:4000/gifs/mygifs';

  constructor(private http: HttpClient) { }

  getGifs() {
    return this
           .http
           .get(`${this.uri}`);
  }
}