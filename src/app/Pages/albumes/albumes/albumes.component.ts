import { AlbumesService } from './../services/albumes.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css'],
})
export class AlbumesComponent {
  displayedColumns: string[] = [ 'Albumes', 'Ver Galeria', 'Ver Detalle del Usuario']
  constructor(private AlbumesService: AlbumesService) {
    this.AlbumesService.getAlbumes();
    this.AlbumesService.getAlbumesFotos();
  }

  get Albumes() {
    return this.AlbumesService.Albumes
  }

}
