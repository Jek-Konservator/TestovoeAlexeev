import React from "react";
import { StyledButton } from "./styleButton";

export const Button = ({type, style, text, size, variant, disabled, onClick }) => {
  const sizeToPx = () => {
    if (size === "small") {
      if (variant === "outlined") {
        return { width: "288px", height: "40px" };
      } else if (variant === "primary") {
        return { width: "158px", height: "40px" };
      }
    } else if (size === "big") {
      if (variant === "outlined") {
        return { width: "280px", height: "56px" };
      } else if (variant === "primary") {
        return { width: "211px", height: "56px" };
      }
    }
  };

  return (
    <>
      <StyledButton
          type={type}
        style={style}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
        size={sizeToPx()}
      >
        {text}
      </StyledButton>
    </>
  );
};
