import { Component, OnInit } from '@angular/core';
import Gif from '../gif';
import { GifService } from '../gif.service';

@Component({
  selector: 'app-my-gifs',
  templateUrl: './my-gifs.component.html',
  styleUrls: ['./my-gifs.component.css']
})
export class MyGifsComponent implements OnInit {

  gifs: Gif[];

  constructor(private gs: GifService) { }

  ngOnInit() {
    this.gs
      .getGifs()
      .subscribe((data: Gif[]) => {
        this.gifs = data;
        console.log(this.gifs);
        
    });
  }
}