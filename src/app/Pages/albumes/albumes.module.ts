import { AlbumesRoutingModule } from './albumes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumesComponent } from './albumes/albumes.component';
import { HttpClientModule } from '@angular/common/http';
import { GaleryPhotosComponent } from 'src/app/components/galery-photos/galery-photos.component';
import { ModalDateUsersComponent } from 'src/app/components/modal-date-users/modal-date-users.component';




@NgModule({
  declarations: [
    AlbumesComponent,
    GaleryPhotosComponent,
    ModalDateUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AlbumesRoutingModule
  ]
})
export class AlbumesModule { }
