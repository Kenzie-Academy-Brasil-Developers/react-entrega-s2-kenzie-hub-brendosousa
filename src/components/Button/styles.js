import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 12.8347px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 4.06066px;
  border: 1.5px solid ${(props) => props.backgroundColor};
  transition: 0.5s;
  width: 100%;
  padding: 0 0.5rem;
  :hover {
    border: 1.5px solid var(--grey-0);
  }
`;
