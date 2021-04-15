/* eslint-disable no-unused-vars */
import create from 'zustand';
import shallow from 'zustand/shallow';

const useToastStore = create((set, get) => ({
  toastList: new Set<string>(),
  show(toastId) {
    const toastList = get().toastList as Set<string>;

    const newToastList = new Set<string>(toastList);
    newToastList.add(toastId);

    set({
      toastList: newToastList
    });
  },
  close(toastId) {
    const toastList = get().toastList as Set<string>;

    const newToastList = new Set<string>(toastList);
    newToastList.delete(toastId);

    set({
      toastList: newToastList
    });
  },
  closeAll() {
    const newToastList = new Set<string>();

    set({
      toastList: newToastList
    });
  }
}));

export default function useToastNotification() {
  const controls = useToastStore(
    store => ({
      show: store.show as (toastId: string) => any,
      close: store.close as (toastId: string) => any,
      closeAll: store.closeAll as () => any,
      toastList: store.toastList as Set<string>
    }),
    shallow
  );

  return controls;
}
