import { ModalDateUsersComponent } from './../../../components/modal-date-users/modal-date-users.component';
import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PosteosService } from './../services/posteos.service';

import { ListaCommentariosComponent } from 'src/app/components/lista-commentarios/lista-commentarios.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css'],
})
export class PosteosComponent {
  
  displayedColumns: string[] = [
    'Usuario',
    'Titulo',
    'Ver Detalle del Usuario',
    'Ver Comentarios'
  ];
  userId: number;
  postId: number;

  constructor(
    private PosteosService: PosteosService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      this.PosteosService.getPosteos(this.userId);
    } else {
      this.PosteosService.getPosteos();
    }
    this.postId = this.route.snapshot.params['id'];
  }

  get PostsC() {
    return this.PosteosService.PostsC;
  }

  get PostsU() {
    return this.PosteosService.PostsU;
  }

  viewComments() {
      const dialogRef = this.dialog.open(ListaCommentariosComponent, {
        width: '500px',
      });
    console.log(this.postId);
    
  }
  
  viewUserData() {
    console.log(this.userId);
      const dialogRef = this.dialog.open(ModalDateUsersComponent, {
        width: '500px',
      });
  }

}
