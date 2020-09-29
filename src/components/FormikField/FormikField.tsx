import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormField, Error } from "./styled";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  as?: string;
};

const FormikFieldWithLabel: React.FC<Props> = ({
  name,
  label,
  placeholder,
  as,
}) => {
  return (
    <FormField>
      <label htmlFor={name}>{label}</label>
      <Field name={name} placeholder={placeholder} as={as} />
      <ErrorMessage name={name}>{(msg) => <Error>{msg}</Error>}</ErrorMessage>
    </FormField>
  );
};

export default FormikFieldWithLabel;
