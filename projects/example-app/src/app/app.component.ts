import { Component, inject } from '@angular/core';
import { AlertDialogData, ConfirmDialogData, DialogData, MessageDialogData } from 'projects/traent/ngx-dialog/src/lib/models';

import { NgxT3DialogService } from '@traent/ngx-dialog';

type ExampleDialogTypes = 'alert' | 'confirm' | 'message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly dialogService = inject(NgxT3DialogService);

  result?: boolean | void | { confirm: boolean; message?: string | undefined; };

  async openDialog(type: ExampleDialogTypes, dialogData: DialogData | MessageDialogData) {
    switch (type) {
      case 'message':
        this.result = await this.dialogService.message(dialogData as MessageDialogData);
        break;
      case 'alert':
      case 'confirm':
        this.result = await this.dialogService[type](dialogData as AlertDialogData & ConfirmDialogData);
    }
  }
}
