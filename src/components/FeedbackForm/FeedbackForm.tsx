import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import FormikFieldWithLabel from "../FormikField";
import { FeedbackFormContainer } from "./styled";

const FeedbackForm: React.FC = () => {
  const formConfig = [
    { name: "name", label: "Организация/бренд", placeholder: "ООО «Иванов»" },
    {
      name: "category",
      label: "Категория продукции/услуги",
      placeholder: "Одежда/заказ еды"
    },
    { name: "city", label: "Город", placeholder: "Минск" },
    { name: "address", label: "Адрес", placeholder: "пр. Независимости 111" },
    {
      name: "reason",
      label: "Почему эта организация/бренд",
      placeholder: "Cсылки на источник и описание причины попадания в каталог",
      as: "textarea"
    },
    {
      name: "additional",
      label: "Дополнительно",
      placeholder:
        "Любая дополнительная информация, замечания и предложения по улучшению каталога",
      as: "textarea"
    }
  ];

  const FeedbackFormSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, "Слишком длинное название")
      .required("Обязательное поле"),
    reason: Yup.string().required("Обязательное поле")
  });

  return (
    <FeedbackFormContainer>
      <Formik
        initialValues={{
          name: "",
          category: "",
          city: "",
          address: "",
          reason: "",
          additional: ""
        }}
        validationSchema={FeedbackFormSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {() => (
          <Form
            style={{ display: "flex", flexDirection: "column", width: "35%" }}
          >
            {formConfig.map(({ name, label, placeholder, as }) => (
              <FormikFieldWithLabel
                name={name}
                label={label}
                placeholder={placeholder || ""}
                key={name}
                as={as}
              />
            ))}
            <Button type="submit">Отправить</Button>
          </Form>
        )}
      </Formik>
    </FeedbackFormContainer>
  );
};

export default FeedbackForm;
