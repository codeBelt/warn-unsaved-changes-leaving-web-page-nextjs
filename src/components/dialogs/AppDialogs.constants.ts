import type { Constructor } from 'type-fest';
import type { DialogActionAbstract } from './AppDialogs.utils';
import type { DialogActionComponent } from './AppDialogs.types';
import type { FunctionComponent } from 'react';
import { UnsavedChangesDialogAction } from '@/components/dialogs/unsaved-changes-dialog/UnsavedChangesDialog.utils';
import { UnsavedChangesDialogDynamic } from '@/components/dialogs/unsaved-changes-dialog/UnsavedChangesDialog.dynamic';

export const dialogActionComponentList: DialogActionComponent[] = [
  [UnsavedChangesDialogAction, UnsavedChangesDialogDynamic],
];

export const dialogComponentFromDialogActionMapper = new Map<
  Constructor<DialogActionAbstract<any>>,
  FunctionComponent<any>
>(dialogActionComponentList);
