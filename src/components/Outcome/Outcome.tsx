import { useMemo } from 'react';

import { roundNumber } from 'helpers/math';
import isUndefined from 'lodash/isUndefined';
import reject from 'lodash/reject';

import { InfoIcon } from 'assets/icons';

import Badge, { BadgeColor } from '../Badge';
import MiniTable, { MiniTableRow } from '../MiniTable';
import ProgressBar, { ProgressBarColor } from '../ProgressBar';
import Tooltip from '../Tooltip';

export type OutcomeState =
  | 'default'
  | 'selected'
  | 'success'
  | 'warning'
  | 'error';

type OutcomeProps = {
  /**
   * Title of the outcome
   */
  title: string;
  /**
   * Color of the title indicator and progress bar
   * @default 'POLK'
   */
  color: BadgeColor;
  /**
   * Help text applied to title
   */
  helpText?: string;
  /**
   * Shares value
   */
  shares?: number;
  /**
   * Bond value
   */
  bond?: number;
  /**
   * Currency ticker
   */
  ticker?: string;
  /**
   * Percentage of the progress bar
   */
  progress?: number;
  /**
   * Current outcome state
   * @default 'default'
   */
  state?: OutcomeState;
};

function Outcome({
  title,
  color,
  helpText,
  shares,
  bond,
  ticker = 'POLK',
  progress,
  state = 'default'
}: OutcomeProps) {
  const miniTableRows = useMemo(() => {
    const rows = [
      !isUndefined(shares)
        ? {
            key: 'myShares',
            title: 'My Shares',
            value: roundNumber(shares, 3)
          }
        : shares,
      !isUndefined(bond)
        ? {
            key: 'myBond',
            title: 'My Bond',
            value: `${roundNumber(bond, 3)} ${ticker}`
          }
        : bond
    ];

    return reject(rows, isUndefined) as MiniTableRow[];
  }, [shares, bond, ticker]);

  return (
    <div className={`pm-c-outcome--${state}`}>
      <div className="pm-c-outcome__header">
        <div className="pm-c-outcome__row-group">
          <Badge variant="normal" label={title} color={color} />
          {helpText ? (
            <Tooltip position="top" text={helpText}>
              <InfoIcon />
            </Tooltip>
          ) : null}
        </div>
      </div>
      <MiniTable rows={miniTableRows} />
      {progress ? (
        <div className="pm-c-outcome__progress">
          <ProgressBar percent={progress} color={color as ProgressBarColor} />
        </div>
      ) : null}
    </div>
  );
}

export default Outcome;
