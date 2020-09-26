import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
};

const FormikFieldWithLabel: React.FC<Props> = ({
  name,
  label,
  placeholder,
}) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <Field name={name} placeholder={placeholder} />
      <ErrorMessage name={name} />
    </Fragment>
  );
};

export default FormikFieldWithLabel;
