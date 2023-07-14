import { AlertDialogData, ConfirmDialogData, DialogData } from './models';

export const isConfirmDialog = (t: DialogData): t is ConfirmDialogData =>  'primaryLabel' in t;
export const isAlertDialog = (t: DialogData): t is AlertDialogData =>  'dismissLabel' in t;
