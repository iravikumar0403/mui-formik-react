import { useEmployees } from "context/employee-context";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import "yup-phone";

const initialValues = {
  name: "",
  mobile: "",
  email: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  mobile: Yup.string()
    .phone("IN", true, "Invalid phone number")
    .required("This field is required"),
  email: Yup.string().email().required("This field is required"),
});

export const AddEmployeeForm = () => {
  const { addEmployee } = useEmployees();

  const handleSubmit = (values) => {
    addEmployee({
      id: uuidv4(),
      ...values,
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <Field type="text" name="mobile" />
            <ErrorMessage name="mobile" />
          </div>
          <div>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
};
