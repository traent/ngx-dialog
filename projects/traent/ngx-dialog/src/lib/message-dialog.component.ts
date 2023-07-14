import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MessageDialogData } from './models';

@Component({
  selector: 'ngx-t3-dialog-message',
  template: `
    <div data-test="generic-dialog">
      <h2 mat-dialog-title>{{ data.title }}</h2>
      <mat-dialog-content>
        <p
          *ngIf="data.description"
          class="tw-m-0 tw-mb-6"
          [innerHtml]="data.description"></p>
        <mat-form-field
          appearance="outline"
          class="tw-w-full">
          <textarea
            *ngIf="data.multiline"
            rows="3"
            data-test="message-dialog-input"
            matInput
            [placeholder]="data.placeholder || 'Type your note here...'"
            [required]="data.required || false"
            [(ngModel)]="data.message"></textarea>
          <input
            *ngIf="!data.multiline"
            matInput
            data-test="message-dialog-input"
            [placeholder]="data.placeholder || 'Type your note here...'"
            [required]="data.required || false"
            [(ngModel)]="data.message">
        </mat-form-field>

      </mat-dialog-content>
      <mat-dialog-actions>
        <button
          mat-stroked-button
          [mat-dialog-close]="{ confirm: false }">
          {{ data.secondaryLabel }}
        </button>
        <button
          mat-flat-button
          data-test="message-dialog-primary-btn"
          type="submit"
          [color]="data.primaryButtonColor || 'accent'"
          [disabled]="data.required && !data.message"
          (click)="dialogRef.close({ confirm: true, message: data.message })">
          {{ data.primaryLabel }}
        </button>
      </mat-dialog-actions>
    </div>  `,
  styles: [],
})
export class MessageDialogComponent {

  constructor(
    readonly dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly data: MessageDialogData,
  ) {
  }
}
