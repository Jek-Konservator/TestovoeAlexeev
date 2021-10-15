import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  border: ${(props) =>
    props.variant === "outlined" ? "none" : "1px solid #fff"};
  font-size: 16px;
  font-style: normal;
  color: #ffffff;
  background: ${(props) =>
    props.variant === "outlined" ? "var(--linear-gradientOne)" : "#0000"};
  box-shadow: ${(props) =>
    props.variant === "outlined"
      ? "0px 0px 24px rgba(234, 0, 41, 0.33)"
      : "none"};
  border-radius: 6px;
  cursor: pointer;
  :hover {
    @media screen and (min-width: 1025px) {
      background: ${(props) =>
        props.variant === "outlined" ? "#EA0029" : "#ffffff"};
      color: ${(props) =>
        props.variant === "outlined" ? "#ffffff" : "#000000"};
    }
  }
  :disabled {
    background: #bec5cc;
    box-shadow: none;
  }

  --linear-gradientOne: linear-gradient(
      255.35deg,
      #dc3131 0.83%,
      rgba(255, 79, 79, 0) 108.93%
    ),
    #ff5e56;
`;
