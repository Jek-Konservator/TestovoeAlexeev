import React, {useState} from "react";
import {StyledTag} from "./styleTags";

export const Tag = ({ name, textOne, textTwo}) => {

const [active, setActive] = useState(false)

    const clickTag = () => {
        setActive(!active)
    }

  return (
    <>
      <StyledTag onClick={clickTag} name={name} active={active}>
        {`${textOne} ${textTwo ? textTwo : ""}`}
      </StyledTag>
    </>
  );
};


