export interface MessageDialogData {
  classes?: string | string[];
  description?: string;
  placeholder?: string;
  message?: string;
  multiline?: boolean;
  primaryButtonColor?: string;
  primaryLabel: string;
  required?: boolean;
  secondaryLabel: string;
  title: string;
}

export interface AlertDialogData {
  title: string;
  description?: string;
  dismissLabel: string;
  type: 'alert';
  classes?: string | string[];
}

export interface ConfirmDialogData {
  title: string;
  description?: string;
  primaryLabel: string;
  secondaryLabel: string;
  classes?: string | string[];
}

export type DialogData = ConfirmDialogData | AlertDialogData;
