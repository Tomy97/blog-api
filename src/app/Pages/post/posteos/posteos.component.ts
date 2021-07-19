import { PosteosService } from './../services/posteos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent  {
  constructor(private PosteosService: PosteosService) { }

  get Posteos() {
    return this.PosteosService.Posteos;
  }
}
