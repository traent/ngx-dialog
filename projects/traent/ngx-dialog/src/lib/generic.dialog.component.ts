import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from './models';
import { isAlertDialog, isConfirmDialog } from './utils';

@Component({
  selector: 'ngx-t3-dialog-generic',
  template: `
    <div data-test="generic-dialog">
      <h2 mat-dialog-title>{{ data.title }}</h2>
      <mat-dialog-content class="tw-mb-3" *ngIf="data.description">{{ data.description }}</mat-dialog-content>
      <mat-dialog-actions>
        <button
          *ngIf="isAlertDialog(data)"
          mat-flat-button
          mat-dialog-close
          color="accent">
          {{ data.dismissLabel }}
        </button>
        <button
          *ngIf="isConfirmDialog(data)"
          mat-stroked-button
          [mat-dialog-close]="false">
          {{ data.secondaryLabel }}
        </button>
        <button
          *ngIf="isConfirmDialog(data)"
          mat-flat-button
          color="accent"
          [mat-dialog-close]="true"
          data-test="confirmation-dialog-primary-btn">
          {{ data.primaryLabel }}
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [
  ],
})
export class GenericDialogComponent {

  readonly isConfirmDialog = isConfirmDialog;
  readonly isAlertDialog = isAlertDialog;

  constructor(
    readonly dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) readonly data: DialogData,
  ) {
  }

}
