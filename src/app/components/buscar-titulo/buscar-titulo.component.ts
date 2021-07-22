import { PosteosService } from './../../Pages/post/services/posteos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar-titulo',
  templateUrl: './buscar-titulo.component.html',
  styleUrls: ['./buscar-titulo.component.css']
})
export class BuscarTituloComponent  {
  Title: string = '' 
  constructor( private PosteosService: PosteosService ) { }
  
  BuscarTitle( ) {
    console.log( this.Title );
  }
}
