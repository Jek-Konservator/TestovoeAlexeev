import React from "react";
import {StyledText} from "./styleTextButton";

export const TextButton = ({ text, onClick }) => {
  return (
    <>
      <StyledText   type="submit" onClick={onClick}>{text}</StyledText>
    </>
  );
};

