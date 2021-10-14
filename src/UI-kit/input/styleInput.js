import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  -webkit-appearance: none;
  border: 1px solid #dfe3e6;
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 14px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :hover {
    border: 1px solid #000000;
  }
  :disabled {
    border: 1px solid #808080;
  }
  ::placeholder {
    color: #bec5cc;
    font-size: 14px;
  }
  :focus {
    outline: none;
    border: 1px solid #dfe3e6;
  }
  :invalid {
    border: 1px solid #ea0029;
  }
`;
export const StyledLabel = styled.label`
  user-select: none;

  font-size: 14px;
  color: #000;
  margin-bottom: 8px;
`;
