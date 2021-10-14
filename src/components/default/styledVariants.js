import styled from "styled-components";

export const StyledVariants = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  flex-direction: column;
  justify-content: center;
`;
export const StyledVariantsTitle = styled.span`
  user-select: none;

  @media screen and (max-width: 414px) {
    span {
      width: 50%;
    }
  }
`;
