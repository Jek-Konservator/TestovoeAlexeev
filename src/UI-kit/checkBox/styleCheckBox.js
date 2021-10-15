import styled from "styled-components";

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  margin: 18px 11px 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.disabled
      ? "#BEC5CC"
      : props.checkBoxActive
      ? "var(--linear-gradientOne)"
      : "#fff"};
  border: 1px solid #dfe3e6;
  box-sizing: border-box;
  border-radius: 6px;
  :hover {
    @media screen and (min-width: 1025px) {
      border: ${(props) => (props.disabled ? "none" : " 1px solid #000;")};
    }
  }

  --linear-gradientOne: linear-gradient(
      255.35deg,
      #dc3131 0.83%,
      rgba(255, 79, 79, 0) 108.93%
    ),
    #ff5e56;
  
  }
`;

export const Styledlabel = styled.label`
  input[type="checkbox"] {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
export const StyledCheckboxText = styled.div`
  display: flex;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  span {
    color: gray;
  }
`;
export const TextOne = styled.label`
  color: #000;
`;
