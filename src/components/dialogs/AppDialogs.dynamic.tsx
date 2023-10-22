import React from 'react';
import dynamic from 'next/dynamic';
import { AppDialogs } from './AppDialogs';

export const AppDialogsDynamic = dynamic(
  () => import('./AppDialogs' /* webpackChunkName: "AppDialogs" */).then((mod) => mod.AppDialogs),
  { ssr: false }
) as typeof AppDialogs;
