import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    FormsModule
  ]
})
export class SharedModule { }
