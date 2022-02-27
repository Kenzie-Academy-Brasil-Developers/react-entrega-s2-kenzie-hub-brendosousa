import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Container = styled.div`
  color: var(--gray-0);
  height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--gray-4);
  gap: 20px;
`;

export const Form = styled.form`
  background-color: var(--gray-3);
  color: var(--gray-0);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  display: flex;
  flex-direction: column;
  padding: 33.6911px 17.6477px;
  width: 90%;
  max-width: 369px;
  gap: 10px;
  margin-bottom: 30px;
  button {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  div + div {
    margin-top: 5px;
  }
  h1 {
    text-align: center;
    font-size: 14.3916px;
    color: var(--title);
  }
  h2 {
    font-size: 9.59437px;
    text-align: center;
    color: var(--gray-1);
  }
`;

export const Header = styled.header`
  width: 90%;
  max-width: 370px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  figure {
    padding-right: 46%;
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
    height: 48px;
    width: 100%;
    padding: 0.5rem;
    color: var(--gray-0);
    box-sizing: border-box;
    border-radius: 3.19812px;
    transition: 0.5s;
    border: 0.973988px solid #343b41;
    :focus-within {
      border: 1.2182px solid var(--title);
    }
  }
`;

export const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: var(--gray-2);
  }

  .Toastify__toast--success {
    background: var(--gray-2);
    color: var(--title);
    font-weight: bold;
    font-size: 14px;
  }

  .Toastify__toast--error {
    background: var(--gray-2);
    color: var(--title);
    font-weight: bold;
    font-size: 14px;
  }
`;
