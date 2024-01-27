import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .required("This is a required field"),
  number: Yup.string().required("This is a required field"),
});

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const accessFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Username:</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span" />
        </div>

        <div>
          <label htmlFor={accessFieldId}>Number:</label>
          <Field type="number" name="number" id={accessFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add user</button>
      </Form>
    </Formik>
  );
};
