import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import FormikFieldWithLabel from "../components/FormikField";

const formConfig = [
  { name: "name", label: "Название организации / бренда" },
  {
    name: "reason",
    label: "Напишите почему мы должны добавить компанию / бренд",
  },
  { name: "description", label: "Описание компании / бренда" },
  { name: "email", label: "Email", placeholder: "live_belarus@2020.by" },
  {
    name: "logoLink",
    label: "Ссылка на логотип компании",
    placeholder: "https://google.com/image",
  },
  { name: "addresses", label: "Адреса организации / бренда" },
  { name: "categories", label: "Категории организации / бренда" },
];

const FeedbackFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Слишком длинное название")
    .required("Обязательное поле"),
  description: Yup.string().max(200, "Слишком длинное описание"),
  reason: Yup.string()
    .max(200, "Слишком длинное описание")
    .required("Обязательное поле"),
  logoLink: Yup.string().url("Введите корректный URL"),
  email: Yup.string().email("Введите правильный email организации"),
  addresses: Yup.array().max(3, "Максимум 3 адреса"),
  categories: Yup.array().max(5, "Максимум 5 категорий"),
});
const FeedbackForm: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Добавьте организацию / бренд</h1>
      <Formik
        initialValues={{
          name: "",
          reason: "",
          description: "",
          logoLink: "",
          email: "",
          addresses: "",
          categories: "",
        }}
        validationSchema={FeedbackFormSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", width: "35%" }}
          >
            {formConfig.map(({ name, label, placeholder }) => (
              <FormikFieldWithLabel
                name={name}
                label={label}
                placeholder={placeholder || ""}
                key={name}
              />
            ))}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
