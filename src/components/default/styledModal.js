import styled from "styled-components";

export const StyledModalDefault = styled.div`
  width: 552px;
  min-height: 476px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  padding: 32px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 415px) and (max-width: 1024px) {
    width: 453px;
    min-height: 476px;
    margin-top: 120px;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 32px 16px 16px 16px;
  }
`;

export const StyledModalDefaultTitle = styled.div`
  user-select: none;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  color: #000;
  h3 {
    margin: 0;
    padding: 0;
  }
`;
export const StyledModalDefaultContentContainer = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #808080;
  margin-top: 16px;
  padding-right: 20px;
  user-select: none;
  
`;

export const StyledModalDefaultCalculator = styled.div`
  margin-top: 24px;
  width: 100%;
`;
export const StyledModalDefaultButton = styled.div`
  margin-top: 32px;
  width: 100%;

  @media screen and (min-width: 415px) and (max-width: 1024px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 414px) {
    display: flex;
    align-items: flex-end;
  }
`;
export const StyledModalDefaultTags = styled.div`
  width: 100%;
  margin-top: 18px;
  display: flex;
  align-items: center;
  div {
    display: flex;
  }
  span {
    user-select: none;
    margin-right: 32px;
  }

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 24px;
    div {
      margin-top: 24px;
      display: flex;
    }
  }

  @media screen and (min-width: 415px) and (max-width: 1024px) {
    margin-top: 12px;
  }
`;
