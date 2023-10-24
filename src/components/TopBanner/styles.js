import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 20px; /* Reduz o espaçamento lateral em telas menores */
  position: relative;
  background-size: cover;
  background-position: center;
  /* background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'); */
  
  :before {
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const Text = styled.div`
  width: 100%; /* Ocupa a largura total em telas menores */
  position: relative;
  z-index: 1;
  
  h2 {
    color: var(--white);
    font-size: 2.5rem; /* Reduz o tamanho da fonte em telas menores */
    margin-bottom: 20px; /* Reduz o espaçamento inferior */
  }
  
  p {
    color: var(--white);
    margin-bottom: 20px; /* Reduz o espaçamento inferior */
  }

  @media (min-width: 768px) {
    width: 55%; /* Retorna à largura original em telas maiores */
    
    h2 {
      font-size: 3.875rem; /* Volta ao tamanho de fonte original */
      margin-bottom: 25px; /* Volta ao espaçamento original */
    }
    
    p {
      margin-bottom: 25px; /* Volta ao espaçamento original */
    }
  }
`;
