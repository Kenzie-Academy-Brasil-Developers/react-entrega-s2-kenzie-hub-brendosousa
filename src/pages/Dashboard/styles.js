import styled from "styled-components";

export const Container = styled.div`
  color: var(--gray-0);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--gray-4);
  gap: 20px;
  main {
    width: 90%;
    max-width: 779.73px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Header = styled.div`
  width: 90%;
  max-width: 779.73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  figure {
    padding-right: 45%;
  }
  button {
    width: 56px;
  }
`;

export const HelloUser = styled.header`
  height: 118px;
  background: #121214;
  width: 90%;
  max-width: 779.73px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  h1 {
    color: var(--title);
    font-size: 18px;
  }
  h2 {
    color: var(--gray-1);
    font-size: 12px;
    font-weight: normal;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderTechs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 779.73px;
  height: 35px;
  span {
    font-size: 16px;
    color: var(--title);
    font-weight: 600;
  }
  button {
    width: 32px;
    height: 32px;
    background-color: var(--gray-3);
    color: white;
    font-weight: 600;
    border: transparent;
    border-radius: 4px;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #343b41;
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  border-top: 1px solid var(--gray-3);
  border-bottom: 1px solid var(--gray-3);
  display: flex;
  justify-content: center;
`;
