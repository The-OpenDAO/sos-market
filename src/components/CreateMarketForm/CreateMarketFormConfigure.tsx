import { Input } from '../Input';
import Text from '../Text';

function CreateMarketFormConfigure() {
  return (
    <div className="pm-c-create-market-form__card">
      <Text
        as="h5"
        scale="body"
        fontWeight="medium"
        className="pm-c-create-market-form__card-title"
      >
        Configure Market
      </Text>
      <Input
        name="marketQuestion"
        label="Market Question"
        placeholder="What would you like to see the world predict?"
      />
    </div>
  );
}

export default CreateMarketFormConfigure;
