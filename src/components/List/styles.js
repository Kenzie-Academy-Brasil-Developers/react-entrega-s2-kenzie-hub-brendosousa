import styled from "styled-components";

export const TechList = styled.div`
  background-color: #212529;
  overflow-y: auto;
  max-height: 416.37px;
  padding: 20px 10px 20px 10px;
  width: 90%;
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardTech = styled.div`
  background-color: var(--gray-4);
  height: 48.73px;
  width: 100%;
  border-radius: 4.06066px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  h1 {
    font-size: 14.2123px;
    color: var(--title);
  }
  span {
    font-size: 12.182px;
    color: #868e96;
  }
`;
