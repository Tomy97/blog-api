import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumesComponent } from './albumes/albumes.component';

const routes: Routes = [
  { path: '', component: AlbumesComponent },
  { path: ':id/photos', component: AlbumesComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
  
export class AlbumesRoutingModule { }
