import { Component } from '@angular/core'

import { UsuariosService } from './../services/usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  displayedColumns: string[] = [
    'UserName',
    'Nombre y Apellido',
    'Sitio Web',
    'Ver Posteos',
    'Ver Albumes',
    'Ver los Todos',
  ]
  Title: string = 'Datos de los Usuarios'
  panelOpenState = false
  userId: number = 1

  constructor(private UsuariosService: UsuariosService) {
    this.UsuariosService.getUsuarios()
  }

  get Usuarios() {
    return this.UsuariosService.Usuarios
  }

  getUsuariosId() {
    return this.UsuariosService.getUsuariosId(this.userId)
  }
}
