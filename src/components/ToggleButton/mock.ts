type Variant = 'default' | 'primary' | 'success' | 'danger';

type Button = {
  name: string;
  variant: Variant;
  default: boolean;
};

const buttons: Button[] = [
  { name: 'Buy', variant: 'success', default: true },
  { name: 'Sell', variant: 'danger', default: false }
];

export default buttons;
