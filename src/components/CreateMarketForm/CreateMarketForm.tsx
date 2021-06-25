import { Formik, Form } from 'formik';

import CreateMarketFormConfigure from './CreateMarketFormConfigure';

type CreateMarketFormData = {
  question: string;
};

function CreateMarketForm() {
  const initialData: CreateMarketFormData = {
    question: ''
  };

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
    >
      <Form className="pm-c-create-market-form">
        <CreateMarketFormConfigure />
      </Form>
    </Formik>
  );
}

export default CreateMarketForm;
