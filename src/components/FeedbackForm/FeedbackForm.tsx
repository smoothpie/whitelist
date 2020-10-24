import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import FormikFieldWithLabel from "../FormikField";
import { FeedbackFormContainer } from "./styled";
import { gql, useMutation } from "@apollo/client";

const AddCompanyMutation = gql`
  mutation CreateChallenger(
    $name: String!
    $reason: String!
    $description: String!
    $email: String!
    $logo: String!
    $category: String!
  ) {
    createChallenger(
      data: {
        name: $name
        reason: $reason
        description: $description
        email: $email
        logo: $logo
        category: $category
      }
    ) {
      _id
      name
    }
  }
`;

const FeedbackForm: React.FC = () => {
  const [CreateChallenger] = useMutation(AddCompanyMutation);

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
        onSubmit={(values: any, { resetForm }) => {
          CreateChallenger({
            variables: {
              name: values.name,
              description: "test description",
              reason: values.reason,
              email: "email@email.com",
              logo:
                "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/telegram-icon.png",
              category: values.category
            }
          });
          resetForm({ values: "" });
        }}
      >
        {() => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "35%"
            }}
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
