import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 20px; /* Reduzi o espaçamento vertical */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (min-width: 768px) {
    padding: 250px 150px; /* Mantive o espaçamento vertical em telas maiores */
  }

  h2 {
    font-size: 3.125rem; /* Reduzi o tamanho da fonte */
    text-align: center; /* Centralizei o texto horizontalmente */
  }

  p {
    font-size: 1rem; /* Reduzi o tamanho da fonte */
    text-align: center; /* Centralizei o texto horizontalmente */
  }
`;
