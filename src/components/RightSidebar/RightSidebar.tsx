import { useEffect, useState } from 'react';

import { useAppSelector } from 'hooks';
import useAlertNotification from 'hooks/useAlertNotification';

import LiquidityForm from '../LiquidityForm';
import ReportForm from '../ReportForm';
import TradeForm from '../TradeForm';

function RightSidebar() {
  const { alertList } = useAlertNotification();
  const [hasAlertNotification, setHasAlertNotification] = useState(false);

  useEffect(() => {
    setHasAlertNotification(alertList.size > 0);
  }, [alertList]);

  const rightSidebarIsVisible = useAppSelector(
    state => state.ui.rightSidebar.visible
  );
  const tradeFormIsVisible = useAppSelector(
    state => state.ui.tradeForm.visible
  );
  const liquidityFormIsVisible = useAppSelector(
    state => state.ui.liquidityForm.visible
  );
  const reportFormIsVisible = useAppSelector(
    state => state.ui.reportForm.visible
  );

  if (!rightSidebarIsVisible) return null;

  if (tradeFormIsVisible)
    return (
      <div
        className={
          hasAlertNotification
            ? 'pm-l-right-sidebar--with-notification'
            : 'pm-l-right-sidebar'
        }
      >
        <TradeForm />
      </div>
    );

  if (liquidityFormIsVisible)
    return (
      <div
        className={
          hasAlertNotification
            ? 'pm-l-right-sidebar--with-notification'
            : 'pm-l-right-sidebar'
        }
      >
        <LiquidityForm />
      </div>
    );

  if (reportFormIsVisible)
    return (
      <div
        className={
          hasAlertNotification
            ? 'pm-l-right-sidebar--with-notification'
            : 'pm-l-right-sidebar'
        }
      >
        <ReportForm />
      </div>
    );

  return null;
}

export default RightSidebar;
