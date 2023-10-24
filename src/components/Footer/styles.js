import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 50px 150px;
    flex-direction: row;
    align-items: center; /* Centralizar verticalmente */
  }

  h2 {
    font-size: 1.875rem;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 15px; /* Espaçamento entre ServicesContainer e Item */
  }
`;

export const Item = styled.div`
  text-align: center;
  padding: 20px;
  margin: 0 auto; /* Centralizar na tela */

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin: 0 auto;
  }

  h3 {
    margin-bottom: 10px;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  ul {
    li {
      padding: 12px 0;
    }
  }

  nav {
    display: flex;
    justify-content: center; /* Centralizar horizontalmente */
    align-items: center; /* Centralizar verticalmente */

    li {
      span {
        margin-right: 15px;
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 768px) {
    margin-right: 210px; /* Espaçamento à direita para telas maiores */
    text-align: left;

    nav {
      justify-content: center; /* Centralizar horizontalmente */
      align-items: center; /* Centralizar verticalmente */
    }
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      span {
        margin-left: 0;
        margin-bottom: 10px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px; /* Espaçamento entre Copy e ServicesContainer */

    ul {
      flex-direction: row;
      margin-left: 15px; /* Espaçamento entre os itens */
      align-items: center;
    }
  }
`;

export const LogoAndPages = styled.div`
  display: flex;
  align-items: center; /* Centralizar verticalmente */
  margin-left: auto; /* Espaçamento maior entre os elementos */
  margin-right: auto; /* Espaçamento maior entre os elementos */

  @media (min-width: 768px) {
    justify-content: center; /* Centralizar horizontalmente */
  }
`;
