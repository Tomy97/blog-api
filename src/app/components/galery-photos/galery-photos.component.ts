import { AlbumesService } from './../../Pages/albumes/services/albumes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-photos',
  templateUrl: './galery-photos.component.html',
  styleUrls: ['./galery-photos.component.css']
})
export class GaleryPhotosComponent {

  constructor(private AlbumesService: AlbumesService) {
    this.AlbumesService.getAlbumesFotos()
   }

  get AlbumesF() {
    return this.AlbumesService.AlbumesF
  }

}
