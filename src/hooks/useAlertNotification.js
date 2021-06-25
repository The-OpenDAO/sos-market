/* eslint-disable no-unused-vars */
import create from 'zustand';
import shallow from 'zustand/shallow';

const useAlertStore = create((set, get) => ({
  alertList: new Set(),
  show(alertId) {
    const { alertList } = get();

    const newAlertList = new Set(alertList);
    newAlertList.add(alertId);

    set({
      alertList: newAlertList
    });
  },
  close(alertId) {
    const { alertList } = get();

    const newAlertList = new Set(alertList);
    newAlertList.delete(alertId);

    set({
      alertList: newAlertList
    });
  },
  closeAll() {
    const newAlertList = new Set();

    set({
      alertList: newAlertList
    });
  }
}));

export default function useAlertNotification() {
  const controls = useAlertStore(
    store => ({
      show: store.show,
      close: store.close,
      closeAll: store.closeAll,
      alertList: store.alertList
    }),
    shallow
  );

  return controls;
}
