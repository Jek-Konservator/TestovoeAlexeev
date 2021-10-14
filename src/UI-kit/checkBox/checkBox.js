import { IconCheckbox } from "../../icons/iconCheckbox";
import {
  StyledCheckbox,
  StyledCheckboxText,
  Styledlabel,
} from "./styleCheckBox";
import { useState } from "react";

export const Checkbox = ({ disabled, textOne, textTwo }) => {
  const [checkBoxActive, setCheckBoxActive] = useState(false);

  const checkBoxUpdate = () => {
    setCheckBoxActive(!checkBoxActive);
  };

  const convert = (textTwo) => {
    const iy = [1, 4, 5, 9, 10]; //ЫЙ
    const oy = [6, 7, 8]; //ОЙ

    if (textTwo <= 10) {
      if (textTwo === 2) {
        return { pre: "во", post: "ой" };
      } else if (textTwo === 3) {
        return { pre: "в", post: "ий" };
      } else if (iy.includes(textTwo)) {
        return { pre: "в", post: "ый" };
      } else if (oy.includes(textTwo)) {
        return { pre: "в", post: "ой" };
      }
    } else {
      if (textTwo === 12 || textTwo === 13) {
        return { pre: "в", post: "ый" };
      } else if (
        iy.includes(Number(textTwo.toString()[textTwo.toString().length - 1]))
      ) {
        return { pre: "в", post: "ый" };
      } else if (
        oy.includes(Number(textTwo.toString()[textTwo.toString().length - 1]))
      ) {
        return { pre: "в", post: "ой" };
      }
    }
  };

  return (
    <>
      <Styledlabel onChange={checkBoxUpdate} disabled={disabled}>
        <input type="checkbox" />
        <StyledCheckbox disabled={disabled} checkBoxActive={checkBoxActive}>
          <IconCheckbox />
        </StyledCheckbox>
        <StyledCheckboxText onChange={checkBoxUpdate} disabled={disabled}>
          {textOne + "\u00A0"}
          {textTwo && (
            <span>{`${convert(textTwo).pre} ${textTwo}-${
              convert(textTwo).post
            } год`}</span>
          )}
        </StyledCheckboxText>
      </Styledlabel>
    </>
  );
};
