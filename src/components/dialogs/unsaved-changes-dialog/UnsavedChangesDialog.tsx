import React from 'react';
import { UnsavedChangesDialogAction } from './UnsavedChangesDialog.utils';
import { UnsavedDecision } from '@/components/dialogs/unsaved-changes-dialog/UnsavedChangesDialog.constants';
import { Dialog } from '@headlessui/react';

interface IProps {
  dialogAction: UnsavedChangesDialogAction;
  testId?: string;
}

export const UnsavedChangesDialog: React.FC<IProps> = (props) => {
  const { testId = UnsavedChangesDialog.displayName } = props;

  return (
    <Dialog
      className="relative z-10"
      open={true}
      onClose={() => false}
      data-testid={testId}
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              You have unsaved changes
            </Dialog.Title>

            <Dialog.Description className={'p-3'}>
              There are unsaved changes. You can save your changes, cancel to continue editing, or leave and discard
              changes.
            </Dialog.Description>

            <div className="mt-4">
              <button
                className={'border border-blue-500 rounded-md px-4 py-2 bg-blue-500 text-white'}
                onClick={() => props.dialogAction.confirm(UnsavedDecision.Save)}
              >
                Save
              </button>
              <button
                className={'border border-blue-500 rounded-md px-4 py-2 bg-blue-500 text-white ml-2'}
                onClick={() => props.dialogAction.confirm(UnsavedDecision.Cancel)}
              >
                Cancel
              </button>
              <button
                className={'border border-blue-500 rounded-md px-4 py-2 bg-blue-500 text-white ml-2'}
                onClick={() => props.dialogAction.confirm(UnsavedDecision.Discard)}
              >
                Leave & Discard
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

UnsavedChangesDialog.displayName = 'UnsavedChangesDialog';
