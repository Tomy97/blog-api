import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ]
})
export class SharedModule { }
