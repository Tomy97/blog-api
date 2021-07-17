import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UsuariosComponent } from './Pages/usuarios/usuarios/usuarios.component'
import { PosteosComponent } from './Pages/post/posteos/posteos.component'
import { AlbumesComponent } from './Pages/albumes/albumes/albumes.component'
import { TodosComponent } from './Pages/todos/todos/todos.component'

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'post', component: PosteosComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'todos', component: TodosComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
