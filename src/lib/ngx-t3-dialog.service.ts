import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GenericDialogComponent } from './generic.dialog.component';
import { MessageDialogComponent } from './message-dialog.component';
import { AlertDialogData, ConfirmDialogData, MessageDialogData } from './models';

@Injectable({
  providedIn: 'root',
})
export class NgxT3DialogService {

  constructor(
    private readonly dialog: MatDialog,
  ) {
  }

  async confirm({ classes, ...data }: ConfirmDialogData): Promise<boolean | undefined> {
    return this.dialog.open(GenericDialogComponent, { data, panelClass: ['confirm'].concat(classes || []) }).afterClosed().toPromise()
      .catch(() => undefined)
      .then((r) => !!r);
  }

  async alert({ classes, ...data }: AlertDialogData): Promise<void> {
    return this.dialog.open(GenericDialogComponent, { data, panelClass: ['alert'].concat(classes || []) }).afterClosed().toPromise()
      .catch(() => undefined);
  }

  async message({ classes, ...data }: MessageDialogData): Promise<{ confirm: boolean; message?: string }> {
    return this.dialog.open(MessageDialogComponent, { data, panelClass: ['opal-w-500px'].concat(classes || []) }).afterClosed().toPromise()
      .catch(() => undefined);
  }
}
