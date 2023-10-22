import { AsyncReturnType, Constructor } from 'type-fest';
import { AppDialogsGlobalStore } from './AppDialogsGlobalStore';
import { FunctionComponent } from 'react';
import { DialogActionAbstract } from '@/components/dialogs/AppDialogs.utils';
import { DialogResponse } from '@/components/dialogs/AppDialogs.types';
import { dialogComponentFromDialogActionMapper } from '@/components/dialogs/AppDialogs.constants';
import { appDialogsGlobalStore } from '../../pages/_app';

/**
 * @module AppDialogsUtils
 */

/**
 * Sets the Dialog Action on {@link AppDialogsGlobalStore:currentDialogs}.
 */
export const displayDialog = async <T extends DialogActionAbstract<any>>(
  dialogAction: T
): Promise<DialogResponse<AsyncReturnType<T['confirm']>>> => {
  return appDialogsGlobalStore.addDialog<T>(dialogAction);
};

/**
 * Sets the Dialog Action on {@link AppDialogsGlobalStore:currentDialogs}.
 * Closes any other open dialogs before opening; enforces one at a time
 */
export const displaySingleDialog = async <T extends DialogActionAbstract<any>>(
  dialogAction: T
): Promise<DialogResponse<AsyncReturnType<T['confirm']>>> => {
  appDialogsGlobalStore.clearDialogs();

  return appDialogsGlobalStore.addDialog<T>(dialogAction);
};

/**
 * @param dialogAction The dialog action called with {@link AppDialogsGlobalStore.currentDialogs}
 */
export const getDialogComponentFromDialogAction = <T>(
  dialogAction: DialogActionAbstract<T>
): FunctionComponent<any> | null => {
  return (
    dialogComponentFromDialogActionMapper.get(dialogAction.constructor as Constructor<DialogActionAbstract<T>>) || null
  );
};
