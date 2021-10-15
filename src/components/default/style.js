import styled from "styled-components";

export const StyledDefault = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 415px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
