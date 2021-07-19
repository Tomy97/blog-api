import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albumes } from '../interfaces/Albumes.interfaces';
import { AlbumesFotos } from '../interfaces/AlbumesFotos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  private Url: string = 'https://jsonplaceholder.typicode.com';
  Albumes: Array<Albumes> = [];
  AlbumesF: Array<AlbumesFotos> = [];

  constructor(private http: HttpClient) { }
  
  getAlbumes() {
    this.http.get<Albumes[]>(`${this.Url}/albums`)
      .subscribe(albumes => {
        this.Albumes = albumes;
      });
  }

  getAlbumesFotos( albumId: number = 1) {
    this.http.get<AlbumesFotos[]>(`${ this.Url }/albums/${ albumId }/photos?limit=10`)
      .subscribe(albumesF => {
        this.AlbumesF = albumesF;
      });
  }
}
