import styled from "styled-components";

export const StyledText = styled.button`
  color: #ea0029;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  margin-top: 8px;
  padding: 0;
  border: none;
  background: none;
  :hover {
    @media screen and (min-width: 1025px) {
      color: #f53a31;
    }
  }
  :active {
    color: #ea0029;
  }
`;
