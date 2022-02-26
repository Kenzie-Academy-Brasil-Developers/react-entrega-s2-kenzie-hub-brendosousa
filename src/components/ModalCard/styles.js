import styled from "styled-components";

export const Header = styled.header`
  background: #343b41;
  width: 100%;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: bold;
    font-size: 14px;
    color: var(--title);
  }
  button {
    border: transparent;
    background-color: transparent;
    color: #868e96;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  background-color: var(--gray-3);
  color: var(--gray-0);
  display: flex;
  flex-direction: column;
  padding: 33.6911px 17.6477px;
  width: 100%;
  height: 100px;
  gap: 20px;
  button {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  div + div {
    margin-top: 8px;
  }
  h1 {
    text-align: center;
    font-size: 14.439px;
    color: var(--title);
  }
  input {
    background: #343b41;
    height: 40px;
    border: 1.2182px solid #343b41;
    box-sizing: border-box;
    border-radius: 4px;
    color: #868e96;
    font-size: 13.0293px;
    padding: 10px;
  }
  label {
    color: var(--title);
    font-size: 12.182px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const SelectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-size: 12.182px;
    color: var(--title);
  }
  select {
    background-color: var(--gray-2);
    height: 38.38px;
    color: var(--gray-0);
    box-sizing: border-box;
    border-radius: 3.19812px;
    border: 0.973988px solid #343b41;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
