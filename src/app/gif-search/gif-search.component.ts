import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent implements OnInit {
  title = 'GIPHY search';
  link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
  giphies = [];
  
  constructor(
    private http: HttpClient) { }
    
  performSearch(searchTerm: HTMLInputElement): void {
    
     var apiLink = this.link + searchTerm.value + "&limit=10";
    console.log(`User entered: ${searchTerm.value}`);

  this.http.get(apiLink).subscribe((res: Response) => {
    this.giphies = res.data;
    console.log(this.giphies)
  });
  }
  ;
  

  ngOnInit() {
    $(document).ready(function(){
      $(document).on("click", "img", function () {
      
        var state = $(this).attr("data-state")
    
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
    
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })

    $(document).on("click", ".add-gif", () => {
      console.log(this.gifChange);

      // return this.myGifs.push({"id": $(this).attr("id"), "urlAnimate": $(this).attr("data-animate"), "urlStill": $(this).attr("data-still"), "rating": $(this).attr("rating"), "title": $(this).attr("title")})
      
    })
    })
  }
}
