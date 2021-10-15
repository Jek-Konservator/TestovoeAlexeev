import React from "react";
import { StyledInput, StyledInputContainer, StyledLabel } from "./styleInput";

export const Input = ({
  props,
  name,
  placeholder,
  text,
  disabled,
  errorMessage,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{text}</StyledLabel>
      <StyledInput
        value={
          props.value &&
          props.value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            .concat(" ₽")
        }
        onChange={(e) =>
          props.onChange(e.target.value.replaceAll(" ", "").replace("₽", ""))
        }
        name={name}
        disabled={disabled}
        placeholder={placeholder}
      />
      {errorMessage}
    </StyledInputContainer>
  );
};
