import { AlbumesService } from './../services/albumes.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css'],
})
export class AlbumesComponent {
  constructor(private AlbumesService: AlbumesService) {
    this.AlbumesService.getAlbumes();
    this.AlbumesService.getAlbumesFotos();
  }

  get Albumes() {
    return this.AlbumesService.Albumes
  }

  get AlbumesF() {
    return this.AlbumesService.AlbumesF
  }
}
