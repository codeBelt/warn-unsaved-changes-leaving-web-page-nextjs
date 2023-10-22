export abstract class DialogActionAbstract<T = undefined> {
  static type: string;
  abstract type: string; // you need to override this in your class

  /**
   * Called when the user confirms the {@link AppDialogsGlobalStore:currentDialogs}.
   *
   * This method is overridden in {@link AppDialogsGlobalStore:addDialog} when this dialog-action is passed to
   * {@link displayDialog}. We do this, so we can magically await/resolve the
   * promise dialog depending on the users action.
   *
   * {@link AppDialogsGlobalStore}
   */
  async confirm(value?: T): Promise<T> {
    return value as T;
  }

  /**
   * Called when the user cancels the {@link AppDialogsGlobalStore:currentDialogs}.
   *
   * This method is overridden in {@link AppDialogsGlobalStore:addDialog} when this dialog-action is passed to
   * {@link displayDialog}. We do this, so we can magically await/resolve the
   * promise dialog depending on the users action.
   *
   * {@link AppDialogsGlobalStore}
   */
  async cancel(): Promise<true> {
    return true;
  }
}
