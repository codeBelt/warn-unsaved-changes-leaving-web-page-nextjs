import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppDialogsGlobalStore } from '../../stores/app-dialogs/AppDialogsGlobalStore';
import { getDialogComponentFromDialogAction } from '../../stores/app-dialogs/AppDialogsGlobalStore.utils';
import { appDialogsGlobalStore } from '../../pages/_app';

interface IProps {}

/**
 * A single component to manage/display all dialogs.
 */
export const AppDialogs: React.FC<IProps> = observer(() => {
  return (
    <>
      {appDialogsGlobalStore.currentDialogs.map((dialog) => {
        const DialogComponent = getDialogComponentFromDialogAction(dialog);

        if (!DialogComponent) {
          return null;
        }

        return (
          <DialogComponent
            key={dialog.type}
            dialogAction={dialog}
          />
        );
      })}
    </>
  );
});

AppDialogs.displayName = 'AppDialogs';
