import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumesComponent } from './albumes/albumes.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AlbumesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class AlbumesModule { }
