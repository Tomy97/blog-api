import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albumes } from '../interfaces/Albumes.interfaces';
import { AlbumesFotos } from '../interfaces/AlbumesFotos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  private Url: string = 'https://jsonplaceholder.typicode.com';
  AlbumesFotos: Array<AlbumesFotos> = [];
  Albumes: Array<Albumes> = [];

  constructor(private http: HttpClient) { }
  
  getAlbumes() {
    this.http.get<Albumes[]>(`${this.Url}/albums`)
      .subscribe(albumes => {
        this.Albumes = albumes;
        console.log(this.Albumes);
      });
  }

  getAlbumesFotos( albumId: number ) {
    this.http.get<AlbumesFotos[]>(`${ this.Url }/albums/${ albumId }/photos?limit=10`)
      .subscribe(albumesFotos => {
        this.AlbumesFotos = albumesFotos;
        console.log(this.Albumes);
      });
  }
}
