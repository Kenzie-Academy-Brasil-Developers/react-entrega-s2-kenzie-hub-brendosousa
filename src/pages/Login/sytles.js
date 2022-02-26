import styled from "styled-components";

export const Container = styled.div`
  color: var(--gray-0);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--gray-4);
  gap: 20px;
`;

export const Form = styled.form`
  background: #212529;
  color: var(--gray-0);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  display: flex;
  flex-direction: column;
  padding: 33.6911px 17.6477px;
  width: 90%;
  max-width: 369px;
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
`;

export const ContainerMessage = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 9.62602px;
  text-align: center;
  strong {
    font-weight: 600;
  }
`;
