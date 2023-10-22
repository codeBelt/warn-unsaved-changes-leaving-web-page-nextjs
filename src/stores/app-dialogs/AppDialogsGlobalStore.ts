import { makeAutoObservable } from 'mobx';
import type { AsyncReturnType } from 'type-fest';
import { DialogActionAbstract } from '@/components/dialogs/AppDialogs.utils';
import { DialogActionConfirmType, DialogResponse } from '@/components/dialogs/AppDialogs.types';

export class AppDialogsGlobalStore {
  currentDialogs: DialogActionAbstract[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async addDialog<T extends DialogActionAbstract>(
    dialogAction: T
  ): Promise<DialogResponse<AsyncReturnType<T['confirm']>>> {
    let resolver: (value: DialogResponse<DialogActionConfirmType<T>>) => void;
    const promise = new Promise((resolve) => (resolver = resolve));

    const confirm: any = async (value: DialogActionConfirmType<any> = true): Promise<void> => {
      resolver({ canceled: false, confirmed: value });

      await this._removeDialog(dialogAction);
    };

    const cancel: any = async (): Promise<void> => {
      resolver({ canceled: true, confirmed: undefined });

      await this._removeDialog(dialogAction);
    };

    /*
     * Here is the magic: We override the dialog action confirm method with a new function,
     * so we can resolve the promise with the appropriate data.
     */
    dialogAction.confirm = confirm;
    dialogAction.cancel = cancel;

    this.currentDialogs.push(dialogAction);

    return promise as Promise<DialogResponse<AsyncReturnType<T['confirm']>>>;
  }

  clearDialogs(): void {
    this.currentDialogs = [];
  }

  private async _removeDialog<T extends DialogActionAbstract>(dialogAction: T): Promise<void> {
    this.currentDialogs = this.currentDialogs.filter((item) => item !== dialogAction);
  }
}
