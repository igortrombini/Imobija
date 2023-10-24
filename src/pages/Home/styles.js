import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 20px; /* Alterado o espaçamento lateral para 20px */
  
  @media (min-width: 768px) {
    padding: 25px 150px; /* Mantém o espaçamento original em telas maiores */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 20px; /* Alterado o espaçamento lateral para 20px */
  
  @media (min-width: 768px) {
    padding: 25px 150px; /* Mantém o espaçamento original em telas maiores */
  }
`;
