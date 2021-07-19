import { Component } from '@angular/core';

import { PosteosService } from './../services/posteos.service';
@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent  {
  constructor(private PosteosService: PosteosService) {
    this.PosteosService.getPosteosComments();
   }

  get PostsC() {
    return this.PosteosService.PostsC;
  }
}
