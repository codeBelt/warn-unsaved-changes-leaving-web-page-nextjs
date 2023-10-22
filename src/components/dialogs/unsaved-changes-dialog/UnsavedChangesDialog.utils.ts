import { DialogActionAbstract } from '@/components/dialogs/AppDialogs.utils';
import { UnsavedDecision } from './UnsavedChangesDialog.constants';
import { DialogActionOmit } from '@/components/dialogs/AppDialogs.types';

export class UnsavedChangesDialogAction extends DialogActionAbstract<UnsavedDecision> {
  readonly type = 'UnsavedChangesDialogAction';
  readonly someData: string;

  constructor(data: DialogActionOmit<UnsavedChangesDialogAction>) {
    super();

    this.someData = data.someData;
  }
}
