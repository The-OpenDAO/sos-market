/* eslint-disable no-unused-vars */
import create from 'zustand';
import shallow from 'zustand/shallow';

const useAlertStore = create((set, get) => ({
  alertList: new Set<string>(),
  show(alertId) {
    const alertList = get().alertList as Set<string>;

    const newAlertList = new Set<string>(alertList);
    newAlertList.add(alertId);

    set({
      alertList: newAlertList
    });
  },
  close(alertId) {
    const alertList = get().alertList as Set<string>;

    const newAlertList = new Set<string>(alertList);
    newAlertList.delete(alertId);

    set({
      alertList: newAlertList
    });
  },
  closeAll() {
    const newAlertList = new Set<string>();

    set({
      alertList: newAlertList
    });
  }
}));

export default function useAlertNotification() {
  const controls = useAlertStore(
    store => ({
      show: store.show as (alertId: string) => any,
      close: store.close as (alertId: string) => any,
      closeAll: store.closeAll as () => any,
      alertList: store.alertList as Set<string>
    }),
    shallow
  );

  return controls;
}
