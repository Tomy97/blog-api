import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule
  ]
})
export class SharedModule { }
