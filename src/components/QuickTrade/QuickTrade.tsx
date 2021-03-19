import AmountInput from '../AmountInput';
import MiniTable from '../MiniTable';
import ToggleButton from '../ToggleButton';
import { toggleButtonItems, miniTableItems } from './mock';

const QuickTrade = () => {
  return (
    <div className="quick-trade">
      <ToggleButton buttons={toggleButtonItems} />
      <AmountInput label="Buy Fractions" max={0.0104} />
      <MiniTable items={miniTableItems} />
    </div>
  );
};

export default QuickTrade;
