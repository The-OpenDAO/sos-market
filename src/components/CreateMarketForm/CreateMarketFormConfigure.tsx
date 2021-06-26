import { Input, OutcomeInput, ProbabilityInput } from '../Input';
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
        name="question"
        label="Market Question"
        placeholder="What would you like to see the world predict?"
      />
      <OutcomeInput
        badgeColor="pink"
        name="firstOutcome.name"
        placeholder="Outcome..."
      />
      <OutcomeInput
        badgeColor="blue"
        name="secondOutcome.name"
        placeholder="Outcome..."
      />
      <ProbabilityInput name="firstOutcome.probability" />
      <ProbabilityInput name="secondOutcome.probability" />

      <button type="submit">Submit</button>
    </div>
  );
}

export default CreateMarketFormConfigure;
