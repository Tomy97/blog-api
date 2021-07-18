import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class UsuariosModule { }
