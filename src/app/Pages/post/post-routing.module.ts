import { PosteosComponent } from './posteos/posteos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaCommentariosComponent } from 'src/app/components/lista-commentarios/lista-commentarios.component';


const routes: Routes = [
  { path: 'posts', component: PosteosComponent },
  { path: ':id/posts', component: PosteosComponent },
  { path: 'posts/:id/comments', component: ListaCommentariosComponent },
  { path: '', component: PosteosComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
