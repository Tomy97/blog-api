import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router'
import { UsuariosService } from './../../Pages/usuarios/services/usuarios.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-modal-date-users',
  templateUrl: './modal-date-users.component.html',
  styleUrls: ['./modal-date-users.component.css'],
})
export class ModalDateUsersComponent {
  constructor(
    private UsuariosService: UsuariosService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }
  
  get Usuarios() {
    return this.UsuariosService.Usuarios
  }
}
