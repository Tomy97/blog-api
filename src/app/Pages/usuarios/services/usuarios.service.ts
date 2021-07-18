import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from '../interfaces/Usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private Url: string = 'https://jsonplaceholder.typicode.com';
  Usuarios: Array<Usuario> = [] ;

  constructor(private http: HttpClient) { }
  getUsuarios() {
    this.http.get<Usuario[]>(`${this.Url}/users?&_limit=10`)
      .subscribe(usuarios => this.Usuarios = usuarios  );
  }
}
