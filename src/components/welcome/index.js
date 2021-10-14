import React from "react";
import { StyledWelcome } from "./styled";
import { Button } from "../../UI-kit/button/button";
import { useHistory } from "react-router-dom";

export const Welcome = () => {
  const history = useHistory();

  const toDefault = () => {
    history.push("/default");
  };

  return (
    <StyledWelcome>
      <Button
        text="Налоговый вычет"
        size="big"
        variant="primary"
        disable={false}
        onClick={toDefault}
      />
    </StyledWelcome>
  );
};
