import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuarios } from './../interfaces/Usuarios.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private Url: string = 'https://jsonplaceholder.typicode.com';
  public Usuarios: Usuarios[] = [];

  constructor(private http: HttpClient) {  }
  getUsuarios() {
    this.http.get<Usuarios>(`${this.Url}/users?&_limit=10`)
      .subscribe((res) => {
        this.Usuarios = res;
      } )
  }
}
