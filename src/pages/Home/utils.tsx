/* eslint-disable import/prefer-default-export */
import { ArrowDownSmallestIcom, ArrowUpSmallestIcon } from 'assets/icons';

const filters = [
  {
    value: 'expiresAt',
    name: 'Expiration Date',
    defaultTrigger: 0,
    optionalTriggers: [
      {
        name: 'asc',
        icon: <ArrowUpSmallestIcon />
      },
      {
        name: 'desc',
        icon: <ArrowDownSmallestIcom />
      }
    ]
  },
  {
    value: 'volume',
    name: 'Volume',
    defaultTrigger: 1,
    optionalTriggers: [
      {
        name: 'asc',
        icon: <ArrowUpSmallestIcon />
      },
      {
        name: 'desc',
        icon: <ArrowDownSmallestIcom />
      }
    ]
  },
  {
    value: 'liquidity',
    name: 'Liquidity',
    defaultTrigger: 1,
    optionalTriggers: [
      {
        name: 'asc',
        icon: <ArrowUpSmallestIcon />
      },
      {
        name: 'desc',
        icon: <ArrowDownSmallestIcom />
      }
    ]
  },
  {
    value: 'id',
    name: 'Newest',
    defaultTrigger: 1,
    optionalTriggers: [
      {
        name: 'asc',
        icon: <ArrowUpSmallestIcon />
      },
      {
        name: 'desc',
        icon: <ArrowDownSmallestIcom />
      }
    ]
  }
];

export { filters };
