import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PosteosService } from './../../Pages/post/services/posteos.service';
@Component({
  selector: 'app-lista-commentarios',
  templateUrl: './lista-commentarios.component.html',
  styleUrls: ['./lista-commentarios.component.css']
})
export class ListaCommentariosComponent {
  postId: number = 1;
  
  constructor(
    private PosteosService: PosteosService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });  
  }

  get PostsC() {
   return this.PosteosService.PostsC;
  }
  

  get getPosteosComments() {
    return this.PosteosService.getPosteosComments(this.postId);
  }

  viewComments() {
    
  }

}
