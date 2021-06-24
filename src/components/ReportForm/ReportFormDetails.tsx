import { ReactNode } from 'react';

import { useField } from 'formik';
import { roundNumber } from 'helpers/math';

import { ArrowRightIcon, InfoIcon } from 'assets/icons';

import { useAppSelector } from 'hooks';

import Badge from '../Badge';
import Text from '../Text';
import Tooltip from '../Tooltip';

type ItemFontWeight = 'normal' | 'bold';

type CurrentBondItem = {
  key: string;
  title: string;
  value: number;
  fontWeight: ItemFontWeight;
  helpText?: string;
};

type TotalBondItem = {
  key: string;
  title: ReactNode;
  value: number;
  fontWeight: ItemFontWeight;
  helpText?: string;
};

function ReportFormDetails() {
  const [bond] = useField('bond');
  const [outcome] = useField('outcome');

  const { outcomes } = useAppSelector(state => state.market.market);

  const currentBondItems: CurrentBondItem[] = [
    {
      key: 'bondAmount',
      title: 'Bond Amount',
      value: bond.value,
      fontWeight: 'bold',
      helpText: 'Help text'
    },
    {
      key: 'potentialProfit',
      title: 'Potential Profit',
      value: 1,
      fontWeight: 'normal'
    },
    {
      key: 'potentialLoss',
      title: 'Potential Loss',
      value: 2,
      fontWeight: 'normal'
    }
  ];

  const totalBondItems: TotalBondItem[] = [
    {
      key: 'totalBondAmount',
      title: 'Total Bond',
      value: 0,
      fontWeight: 'bold',
      helpText: 'Help text'
    },
    {
      key: `${outcomes[0].id}`,
      title: <Badge color="blue" label={outcomes[0].title} />,
      value: 1,
      fontWeight: 'normal'
    },
    {
      key: `${outcomes[1].id}`,
      title: <Badge color="pink" label={outcomes[1].title} />,
      value: 2,
      fontWeight: 'normal'
    },
    {
      key: 'invalid',
      title: <Badge color="warning" label="Invalid" />,
      value: 3,
      fontWeight: 'normal'
    }
  ];

  return (
    <div className="pm-c-report-form-details">
      <ul className="pm-c-report-form-details__group">
        {currentBondItems.map(item => (
          <li key={item.key} className="pm-c-report-form-details__item">
            <div className="pm-c-report-form-details__group-inline">
              <Text
                as="span"
                className={`pm-c-report-form-details__item-title--${item.fontWeight}`}
              >
                {item.title}
              </Text>
              {item.helpText ? (
                <Tooltip position="top" text={item.helpText}>
                  <InfoIcon />
                </Tooltip>
              ) : null}
            </div>
            <Text
              as="span"
              className={`pm-c-report-form-details__item-value--${item.fontWeight}`}
            >
              {`${roundNumber(item.value, 3)} POLK`}
            </Text>
          </li>
        ))}

        <div className="pm-c-report-form-details__separator" />

        {totalBondItems.map(item => (
          <li key={item.key} className="pm-c-report-form-details__item">
            <div className="pm-c-report-form-details__group-inline">
              <Text
                as="span"
                className={`pm-c-report-form-details__item-title--${item.fontWeight}`}
              >
                {item.title}
              </Text>
              {item.helpText ? (
                <Tooltip position="top" text={item.helpText}>
                  <InfoIcon />
                </Tooltip>
              ) : null}
            </div>
            <div className="pm-c-report-form-details__group-inline--new-bond">
              <Text
                as="span"
                className={`pm-c-report-form-details__item-value--${item.fontWeight}`}
              >
                {`${roundNumber(item.value, 3)} POLK`}
              </Text>
              {outcome.value && outcome.value === item.key ? (
                <>
                  <ArrowRightIcon />
                  <Text
                    as="span"
                    className={`pm-c-report-form-details__item-value--${item.fontWeight}--new-bond`}
                  >
                    {`${roundNumber(item.value + bond.value, 3)} POLK`}
                  </Text>
                </>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReportFormDetails;
