import React from 'react';

type ToastActionsProps = {
  children: React.ReactNode;
};

function ToastActions({ children }: ToastActionsProps) {
  return <div className="pm-c-toast__actions">{children}</div>;
}

ToastActions.displayName = 'ToastActions';

export default ToastActions;
