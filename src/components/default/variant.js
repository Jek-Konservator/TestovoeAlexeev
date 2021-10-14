import React from "react";
import {StyledVariants, StyledVariantsTitle} from "./styledVariants";
import { Checkbox } from "../../UI-kit/checkBox/checkBox";

export const Variant = ({ array }) => {
  const convert = (item) => {
    return item
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      .concat(" рублей");
  };

  return (
    <StyledVariants>
      <StyledVariantsTitle>Итого можете внести в качестве досрочных:</StyledVariantsTitle>
      {array.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid #DFE3E6" }}>
          <Checkbox textOne={convert(item)} textTwo={index + 1} />
        </div>
      ))}
    </StyledVariants>
  );
};
