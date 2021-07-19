import { Component } from '@angular/core';

import { UsuariosService } from './../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  Title: string = 'Datos de los Usuarios';
  panelOpenState = false;
  constructor(private UsuariosService: UsuariosService) {
    this.UsuariosService.getUsuarios()
  }
  get Usuarios() {
    return this.UsuariosService.Usuarios;
  }
}
