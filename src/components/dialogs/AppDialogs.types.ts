import type { AsyncReturnType, Constructor } from 'type-fest';
import type { FunctionComponent } from 'react';
import { DialogActionAbstract } from './AppDialogs.utils';

export type ConfirmedDialogResponse<T = true> = { canceled: false; confirmed: T };
export type CanceledDialogResponse = { canceled: true; confirmed: undefined };
export type DialogResponse<T> = ConfirmedDialogResponse<T> | CanceledDialogResponse;

export type DialogActionConfirmType<T> = AsyncReturnType<DialogActionAbstract<T>['confirm']>;

export type DialogActionOmit<T extends DialogActionAbstract<any>> = Omit<T, 'type' | 'confirm' | 'cancel'>;
export type DialogActionDataOnly<T extends DialogActionAbstract<any> = DialogActionAbstract<any>> = Omit<
  T,
  'confirm' | 'cancel'
>;

export type DialogActionComponent = [Constructor<DialogActionAbstract<any>>, FunctionComponent<any>];
