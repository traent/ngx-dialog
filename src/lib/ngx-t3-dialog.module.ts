import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GenericDialogComponent } from './generic.dialog.component';
import { MessageDialogComponent } from './message-dialog.component';


@NgModule({
  declarations: [
    GenericDialogComponent,
    MessageDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [],
})
export class NgxT3DialogModule { }
