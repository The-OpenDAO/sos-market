import { InfoIcon } from 'assets/icons';

import AmountInput from '../AmountInput';
import Button from '../Button';
import MarketSelect from '../MarketSelect';
import MiniTable from '../MiniTable';
import ToggleButton from '../ToggleButton';
import { markets, toggleButtonItems, miniTableItems } from './mock';

const QuickTrade = () => {
  return (
    <div className="quick-trade sticky">
      <div className="quick-trade__group">
        <MarketSelect markets={markets} />
        <Button
          size="sm"
          style={{
            backgroundColor: '#12161D',
            color: '#F3F4F6',
            border: 'none'
          }}
        >
          <span>Add liquidity</span>
          <InfoIcon />
        </Button>
      </div>

      <div className="quick-trade__group">
        <ToggleButton
          defaultActiveId="sell"
          buttons={toggleButtonItems}
          onChange={activeButton => console.log(activeButton)}
        />
        <AmountInput label="Buy Fractions" max={0.0104} />
        <MiniTable items={miniTableItems} />

        <Button color="success" size="lg">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default QuickTrade;
