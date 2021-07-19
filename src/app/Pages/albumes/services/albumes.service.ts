import { Album } from './../interfaces/Albumes.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  private Url: string = 'https://jsonplaceholder.typicode.com';
  Albumes: Array<Album> = [];
  AlbumesFotos: Array<Album> = [];

  constructor(private http: HttpClient) { }
  getAlbumes() {
    this.http.get<Album[]>(`${this.Url}/https://jsonplaceholder.typicode.com/albums/1/photos?&_limit=10`)
      .subscribe(albumes => this.Albumes = albumes  );
  }
}
