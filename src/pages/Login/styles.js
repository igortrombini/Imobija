import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 20px; /* Reduzi o espaçamento vertical e horizontal */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (min-width: 768px) {
    padding: 100px 150px; /* Mantive o espaçamento vertical e horizontal em telas maiores */
  }

  h2 {
    font-size: 1.5rem; /* Reduzi o tamanho da fonte */
    text-align: center; /* Centralizei o texto horizontalmente */
  }

  p {
    font-size: 1rem; /* Reduzi o tamanho da fonte */
    margin-bottom: 15px;
    text-align: center; /* Centralizei o texto horizontalmente */
  }
`;

export const ContainerForm = styled.div`
  padding: 15px;
  width: 100%;

  @media (min-width: 768px) {
    width: 370px; /* Mantive a largura fixa em telas maiores */
    padding: 35px;
  }

  background-color: var(--white);
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
`;
