import { UsuariosComponent } from './usuarios/usuarios.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PosteosComponent } from '../post/posteos/posteos.component'

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: ':id/posts', component: PosteosComponent },
  { path: '', component: UsuariosComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
  
export class UserRoutingModule {}
