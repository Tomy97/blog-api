import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';

import { Usuario } from '../interfaces/Usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService { 
  private Url: string = 'https://jsonplaceholder.typicode.com';
  @Output() Usuarios: Array<Usuario> = [] ;

  constructor(private http: HttpClient) { }
  
  getUsuarios( ) {
    const url = `${ this.Url }/users?&_limit=10`
    this.http.get<Usuario[]>( url )
      .subscribe( usuarios => this.Usuarios = usuarios  );
  }

  getUsuariosId(userId: number) {
    const url = `${ this.Url }/users/${ userId }`
    this.http.get<Usuario[]>( url )
      .subscribe(usuarios => this.Usuarios = usuarios  );
  }
}
