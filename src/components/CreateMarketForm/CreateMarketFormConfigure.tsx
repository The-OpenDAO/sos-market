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

      <div className="pm-c-create-market-form__card-outcome-group--row">
        <OutcomeInput
          badgeColor="pink"
          name="firstOutcome.name"
          label="Outcome"
          placeholder="Outcome..."
        />
        <ProbabilityInput name="firstOutcome.probability" label="Probability" />
      </div>
      <div className="pm-c-create-market-form__card-outcome-group--row">
        <OutcomeInput
          badgeColor="blue"
          name="secondOutcome.name"
          placeholder="Outcome..."
        />
        <ProbabilityInput name="secondOutcome.probability" />
      </div>
    </div>
  );
}

export default CreateMarketFormConfigure;
