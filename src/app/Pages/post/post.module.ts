import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosteosComponent } from './posteos/posteos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PosteosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class PostModule { }
