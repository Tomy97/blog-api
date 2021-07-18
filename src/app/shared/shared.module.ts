import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
  ],
  exports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
