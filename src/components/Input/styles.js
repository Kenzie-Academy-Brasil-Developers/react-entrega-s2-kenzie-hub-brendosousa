import styled, { css } from "styled-components";

export const Container = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  background-color: var(--gray-2);
  padding: 0.8rem;
  width: 100%;
  transition: 0.5s;
  border: 0.9772px solid var(--title);
  border-radius: 3.20867px;
  :focus-within {
    border: 1.5px solid var(--gray-2);
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: green;
    `}
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--gray-0);
    font-size: 13.0293px;
    &::placeholder {
      color: var(--gray-0);
    }
  }
`;

export const Label = styled.label`
  font-size: 9.772px;
  color: var(--title);
`;
