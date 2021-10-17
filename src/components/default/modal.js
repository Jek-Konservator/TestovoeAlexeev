import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import {
  StyledModalDefault,
  StyledModalDefaultButton,
  StyledModalDefaultCalculator,
  StyledModalDefaultContentContainer,
  StyledModalDefaultTags,
  StyledModalDefaultTitle,
} from "./styledModal";
import { Input } from "../../UI-kit/input/input";
import { TextButton } from "../../UI-kit/textButton/textButton";
import { Tag } from "../../UI-kit/tags/tags";
import { Button } from "../../UI-kit/button/button";
import { Variant } from "./variant";
import { IconClose } from "../../icons/iconClose";
import { useHistory } from "react-router-dom";

export const ModalDefault = () => {
  const [variantVisible, setVariantVisible] = useState(false);
  const [array, setArray] = useState([]);

  const history = useHistory();

  const calcTaxDeduction = (values) => {
    let salary;
    if (values) {
      salary = values.salary;
    }
    if (!salary || salary < 10000) {
      return;
    }

    let taxDeduction = 0;
    let price = 2300000;
    const arr = [];
    if (price * 0.13 > 260000) {
      taxDeduction = 260000;
    } else {
      taxDeduction = price * 0.13;
    }
    if (taxDeduction % (salary * 12 * 0.13) === 0) {
      for (let i = 0; i < taxDeduction / (salary * 12 * 0.13); i++) {
        arr.push(taxDeduction / (taxDeduction / (salary * 12 * 0.13)));
      }
    } else {
      for (
        let i = 0;
        i < Math.floor(taxDeduction / (salary * 12 * 0.13));
        i++
      ) {
        arr.push(
          Math.round(taxDeduction / (taxDeduction / (salary * 12 * 0.13)))
        );
      }
      arr.push(Math.round(taxDeduction % (salary * 12 * 0.13)));
    }
    setArray(arr);
    setVariantVisible(true);
  };

  const valid = (value) => {
    return value.match(/^(\d){1,13}$/g);
  };
  const toWelcome = () => {
    history.push("/");
  };

  return (
    <StyledModalDefault>
      <div>
        <StyledModalDefaultTitle>
          <h3>Налоговый вычет</h3>
          <IconClose onClick={toWelcome} />
        </StyledModalDefaultTitle>
        <StyledModalDefaultContentContainer>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </StyledModalDefaultContentContainer>
        <StyledModalDefaultCalculator>
          <Form
            onSubmit={calcTaxDeduction}
            initialValues={{
              salary: null,
            }}
            render={({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Field name="salary" parse={valid}>
                  {(props, meta) => (
                    <>
                      <Input
                        props={{ ...props.input }}
                        placeholder="Введите данные"
                        text="Ваша зарплата в месяц"
                        disabled={false}
                        errorMessage=""
                      />
                    </>
                  )}
                </Field>

                <TextButton
                  type="submit"
                  text="Рассчитать"
                  onClick={() => calcTaxDeduction()}
                />
              </form>
            )}
          />
        </StyledModalDefaultCalculator>
        {variantVisible && <Variant array={array} />}
        <StyledModalDefaultTags>
          <span>Что уменьшаем?</span>
          <div>
            <Tag textOne="Платёж" />
            <Tag textOne="Срок" />
          </div>
        </StyledModalDefaultTags>
      </div>
      <div style={{ width: "100%" }}>
        <StyledModalDefaultButton>
          <Button
            text="Добавить"
            size="big"
            style={{ width: "100%" }}
            variant="outlined"
            disable={false}
          />
        </StyledModalDefaultButton>
      </div>
    </StyledModalDefault>
  );
};
