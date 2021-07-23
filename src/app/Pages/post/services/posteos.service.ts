import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostComments } from './../interfaces/PostsComments.interface';
import { PostUsers } from './../interfaces/PostUsers.interface';
@Injectable({
  providedIn: 'root'
})
export class PosteosService {
  private Url: string = 'https://jsonplaceholder.typicode.com/';

 @Output() PostsC: Array<PostComments> = [] ;
  PostsU: Array<PostUsers> = [];

  constructor( private http: HttpClient ) { }
  
  getPosteosComments( postId : number ) {
    this.http.get<PostComments[]>(`${this.Url}posts/${ postId }/comments`)
      .subscribe( posteosCom => this.PostsC = posteosCom );
  }

  getPosteos(userId?: number) {
    if (userId) {
     this.http.get<PostUsers[]>(`${this.Url}user/${ userId }/posts`)
      .subscribe(postsUsers => this.PostsU = postsUsers ); 
    } else {
      this.http.get<PostUsers[]>(`${this.Url}posts`)
      .subscribe(posts => this.PostsU = posts ); 
    }
  }

}
