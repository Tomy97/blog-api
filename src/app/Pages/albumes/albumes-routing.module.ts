import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryPhotosComponent } from 'src/app/components/galery-photos/galery-photos.component';
import { AlbumesComponent } from './albumes/albumes.component';

const routes: Routes = [
  { path: '', component: AlbumesComponent },
  { path: ':id/photos', component: GaleryPhotosComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
  
export class AlbumesRoutingModule { }
