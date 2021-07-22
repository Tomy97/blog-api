import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PostComments } from './../interfaces/PostsComments.interface';
import { PostUsers } from './../interfaces/PostUsers.interface';
@Injectable({
  providedIn: 'root'
})
export class PosteosService {
  private Url: string = 'https://jsonplaceholder.typicode.com/';

  PostsC: Array<PostComments> = [] ;
  PostsU: Array<PostUsers> = [];

  constructor( private http: HttpClient ) { }
  
  getPosteosComments( postId : number = 1 ) {
    this.http.get<PostComments[]>(`${this.Url}posts/${ postId }/comments`)
      .subscribe( posteosCom => this.PostsC = posteosCom );
  }

  getPosteosUsers( userId : number ) {
    this.http.get<PostUsers[]>(`${this.Url}user/${ userId }/posts`)
      .subscribe(postsUsers => this.PostsU = postsUsers );
  }

}
