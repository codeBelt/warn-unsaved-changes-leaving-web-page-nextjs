import '@/styles/globals.css';
import { Layout } from '@/components/Layout';
import { AppDialogsDynamic } from '@/components/dialogs/AppDialogs.dynamic';
import { AppDialogsGlobalStore } from '../stores/app-dialogs/AppDialogsGlobalStore';

export const appDialogsGlobalStore = new AppDialogsGlobalStore();

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <AppDialogsDynamic />
    </Layout>
  );
}
