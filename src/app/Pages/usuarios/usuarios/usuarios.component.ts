import { UsuariosService } from './../services/usuarios.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['Datos de los Usuarios'];
  panelOpenState = false;
  constructor(private UsuariosService: UsuariosService) {
    this.UsuariosService.getUsuarios()
  }
  get Usuarios() {
    return this.UsuariosService.Usuarios;
  }
}
