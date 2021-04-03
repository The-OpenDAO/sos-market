/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

type Interval = {
  id: string;
  name: string;
  value: number;
};

type View = {
  id: string;
  icon: React.ReactNode;
};

type ChartHeaderProps = {
  intervals: Interval[];
  views: View[];
  defaultIntervalId: string;
  defaultViewId: string;
  onChangeInterval: (interval: string, value: number) => void;
  onChangeView: (view: string) => void;
};

function ChartHeader({
  intervals,
  views,
  defaultIntervalId,
  defaultViewId,
  onChangeInterval,
  onChangeView
}: ChartHeaderProps) {
  const [currentInterval, setCurrentInterval] = useState<string | undefined>(
    undefined
  );
  const [currentView, setCurrentView] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCurrentInterval(defaultIntervalId);
    setCurrentView(defaultViewId);
  }, [defaultIntervalId, defaultViewId]);

  if (!defaultIntervalId || !defaultViewId) return null;

  function handleChangeInterval(event: React.MouseEvent<HTMLButtonElement>) {
    const { id, value } = event.currentTarget;

    if (id !== currentInterval) {
      setCurrentInterval(id);
      onChangeInterval(id, parseInt(value, 10));
    }
  }

  function handleChangeView(event: React.MouseEvent<HTMLButtonElement>) {
    const { id } = event.currentTarget;

    if (id !== currentView) {
      setCurrentView(id);
      onChangeView(id);
    }
  }

  return (
    <div className="chart-header">
      <div className="chart-header__interval">
        {intervals.map(interval => (
          <button
            key={interval.id}
            id={interval.id}
            className={classNames({
              'chart-header__interval-item': true,
              active: currentInterval === interval.id
            })}
            type="button"
            value={interval.value}
            onClick={event => handleChangeInterval(event)}
          >
            {interval.name}
          </button>
        ))}
      </div>
      <div className="chart-header__view">
        {views.map(view => (
          <button
            key={view.id}
            id={view.id}
            className={classNames({
              'chart-header__view-item': true,
              active: currentView === view.id
            })}
            type="button"
            onClick={event => handleChangeView(event)}
          >
            {view.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

ChartHeader.displayName = 'ChartHeader';

export default ChartHeader;
