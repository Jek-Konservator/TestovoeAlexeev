import styled from "styled-components";

export const StyledTag = styled.button`
  height: 36px;
  border-radius: 50px;
  margin: 8px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border: none;
  justify-content: center;
  padding: 6px 12px;
  color: ${(props) => (props.active ? "#EEF0F2" : "#000")};
  background: ${(props) =>
    props.active ? "var(--linear-gradientOne)" : "#EEF0F2"};
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  :hover {
    @media screen and (min-width: 1025px) {
      color: #000;
      background: #dfe3e6;
    }
  }
  :active {
    color: #fff;
    background: var(--linear-gradientOne);
  }
  textTime {
    color: ${(props) => (props.active ? "#EEF0F2" : "grey")};
  }

  --linear-gradientOne: linear-gradient(
      255.35deg,
      #dc3131 0.83%,
      rgba(255, 79, 79, 0) 108.93%
    ),
    #ff5e56;
  
  
  }
`;
