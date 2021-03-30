type Market = {
  prediction: string;
  odd: number;
  tableItems: {
    name: string;
    value: number | string;
  }[];
};

const markets: Market[] = [
  {
    prediction: 'No',
    odd: 1.26,
    tableItems: [{ name: 'Price Per Fraction', value: '0.00034 DOT' }]
  },
  {
    prediction: 'Yes',
    odd: 1.26,
    tableItems: [{ name: 'Price Per Fraction', value: '0.00034 DOT' }]
  }
];

type Item = {
  name: string;
  value: string | number;
};

const miniTableItems: Item[] = [
  { name: 'Prediction', value: 'ADA' },
  { name: 'Price Per Fraction', value: '0.00034 DOT' },
  { name: 'Fractions Bought', value: '3,5' },
  { name: 'Current ROI', value: '2,5%' },
  { name: 'Total Stake', value: '0.245 DOT' },
  { name: 'Potential Returns', value: '0.742 DOT' }
];

type Variant = 'default' | 'primary' | 'success' | 'danger';

type Button = {
  name: string;
  variant: Variant;
  default: boolean;
};

const toggleButtonItems: Button[] = [
  { name: 'Buy', variant: 'success', default: true },
  { name: 'Sell', variant: 'danger', default: false }
];

export { markets, miniTableItems, toggleButtonItems };
