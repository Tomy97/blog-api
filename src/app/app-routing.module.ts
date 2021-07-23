import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PosteosComponent } from './Pages/post/posteos/posteos.component'
import { AlbumesComponent } from './Pages/albumes/albumes/albumes.component'
import { TodosComponent } from './Pages/todos/todos/todos.component'

const routes: Routes = [
  { path: 'usuarios', loadChildren: () => import('./Pages/usuarios/usuarios.module').then( m => m.UsuariosModule ) },
  { path: 'post', loadChildren: () => import('./Pages/post/post.module').then( m => m.PostModule ) },
  { path: 'albumes', loadChildren: () => import('./Pages/albumes/albumes.module').then( m => m.AlbumesModule )},
  { path: 'todos', component: TodosComponent },
  { path: '**', redirectTo: '/usuarios' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
