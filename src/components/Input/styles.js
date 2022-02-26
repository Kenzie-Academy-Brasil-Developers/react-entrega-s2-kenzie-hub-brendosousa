import styled, { css } from "styled-components";

export const Container = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  background-color: var(--gray-2);
  padding: 0.5rem;
  width: 100%;
  transition: 0.5s;
  border: 1.2182px solid var(--gray-2);
  border-radius: 3.20867px;

  :focus-within {
    border: 1.2182px solid var(--title);
  }
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--gray-0);
    width: 100%;
    font-size: 13.0293px;
    &::placeholder {
      color: var(--gray-0);
    }
    height: 1px;
    padding: 1.2em 0.5em;
    background-clip: content-box;
    ::first-line {
      color: var(--gray-0);
    }
  }
`;

export const Label = styled.label`
  font-size: 12.182px;
  color: var(--title);
`;
