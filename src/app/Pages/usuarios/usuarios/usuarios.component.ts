import { Usuarios } from './../interfaces/Usuarios.interfaces';
import { UsuariosService } from './../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  Usuarios: Usuarios[] = [];
  
  constructor(private UsuariosService: UsuariosService) { }

  test() {
    this.UsuariosService;
    
   }
}
