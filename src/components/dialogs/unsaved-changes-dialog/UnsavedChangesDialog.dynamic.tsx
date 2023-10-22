import React from 'react';
import dynamic from 'next/dynamic';
import { UnsavedChangesDialog } from './UnsavedChangesDialog';

export const UnsavedChangesDialogDynamic = dynamic(
  () =>
    import('./UnsavedChangesDialog' /* webpackChunkName: "UnsavedChangesDialog" */).then(
      (mod) => mod.UnsavedChangesDialog
    ),
  { ssr: false }
) as typeof UnsavedChangesDialog;
