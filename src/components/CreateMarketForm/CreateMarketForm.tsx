import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CreateMarketFormConfigure from './CreateMarketFormConfigure';

type Outcome = {
  name: string;
  probability: number;
};

export type CreateMarketFormData = {
  question: string;
  firstOutcome: Outcome;
  secondOutcome: Outcome;
};

const initialData: CreateMarketFormData = {
  question: '',
  firstOutcome: {
    name: '',
    probability: 50
  },
  secondOutcome: {
    name: '',
    probability: 50
  }
};

const validationSchema = Yup.object().shape({
  question: Yup.string().required('Market Question is required!'),
  firstOutcome: Yup.object().shape({
    name: Yup.string().required('Outcome name is required!'),
    probability: Yup.number()
      .min(0, 'The probability of the Outcome must be greater or equal than 0!')
      .max(
        100,
        'The probability of the Outcome must be less or equal than 100!'
      )
      .required('Outcome probability is required!')
  }),
  secondOutcome: Yup.object().shape({
    name: Yup.string().required('Outcome name is required!'),
    probability: Yup.number()
      .min(0, 'The probability of the Outcome must be greater or equal than 0!')
      .max(
        100,
        'The probability of the Outcome must be less or equal than 100!'
      )
      .required('Outcome probability is required!')
  })
});

function CreateMarketForm() {
  async function handleFormSubmit(values: CreateMarketFormData) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialData}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        await handleFormSubmit(values);
        actions.setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      <Form className="pm-c-create-market-form">
        <CreateMarketFormConfigure />
      </Form>
    </Formik>
  );
}

export default CreateMarketForm;
