import { MyGifsComponent } from './my-gifs/my-gifs.component';
import { GifSearchComponent } from './gif-search/gif-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/gifs', pathMatch: 'full' },
  { path: 'gifs/saved', component: MyGifsComponent },
  { path: 'gifs', component: GifSearchComponent },
];

@NgModule({

  imports: [ RouterModule.forRoot(routes)],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }