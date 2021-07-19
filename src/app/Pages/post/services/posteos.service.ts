import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Posts } from '../interfaces/PostUsers.interface';
@Injectable({
  providedIn: 'root'
})
export class PosteosService {
  private Url: string = 'https://jsonplaceholder.typicode.com';
  Posteos: Array<Posts> = [] ;

  constructor(private http: HttpClient) { }
  
  getPosteos(  ) {
    this.http.get<Posts[]>(`${this.Url}/posts/1/comments?&_limit=10`)
      .subscribe(posteos => this.Posteos = posteos  );
  }
}
