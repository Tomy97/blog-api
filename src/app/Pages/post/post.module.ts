import { BuscarTituloComponent } from './../../components/buscar-titulo/buscar-titulo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosteosComponent } from './posteos/posteos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaCommentariosComponent } from 'src/app/components/lista-commentarios/lista-commentarios.component';



@NgModule({
  declarations: [
    PosteosComponent,
    BuscarTituloComponent,
    ListaCommentariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PostModule { }
