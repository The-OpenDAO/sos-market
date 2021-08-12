import { Formik, Form } from 'formik';

import { useAppSelector } from 'hooks';

import ReportFormActions from './ReportFormActions';
import ReportFormDetails from './ReportFormDetails';
import ReportFormInfo from './ReportFormInfo';
import ReportFormInput from './ReportFormInput';
import ReportFormOutcomeSelect from './ReportFormOutcomeSelect';

type ReportFormData = {
  market: string;
  outcome?: string | number;
  bond: number;
};

function ReportForm() {
  const { isLoading } = useAppSelector(state => state.market);
  const marketId = useAppSelector(state => state.market.market.id);
  const selectedOutcomeId = useAppSelector(
    state => state.trade.selectedOutcomeId
  );
  const { outcomes } = useAppSelector(state => state.market.market);

  const initialData: ReportFormData = {
    market: marketId,
    outcome:
      `${selectedOutcomeId}` !== `${outcomes[0].id}`
        ? `${selectedOutcomeId}`
        : `${outcomes[0].id}`,
    bond: 0
  };

  async function handleFormSubmit(values: ReportFormData) {
    console.log(values);
  }

  if (isLoading) return null;

  return (
    <Formik
      initialValues={initialData}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        await handleFormSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <Form className="pm-c-report-form">
        <div className="pm-c-report-form__group">
          <ReportFormInfo />
          <ReportFormOutcomeSelect />
        </div>
        <div className="pm-c-report-form__group">
          <ReportFormInput />
          <ReportFormDetails />
          <ReportFormActions />
        </div>
      </Form>
    </Formik>
  );
}

export default ReportForm;
