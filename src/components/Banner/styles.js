import styled from "styled-components";

export const Container = styled.div`
  padding: 200px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');

  @media (max-width: 768px) {
    padding: 100px 20px; /* Reduz o padding para telas menores */
  }

  @media (max-width: 576px) {
    padding: 80px 10px; /* Ajusta o padding para telas ainda menores */
  }

  @media (max-width: 384px) {
    padding: 60px 5px; /* Estilos para telas muito pequenas (largura máxima de 384px) */
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;

  h2 {
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    color: var(--white);
    margin-bottom: 25px;
  }

  span {
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 120px;
    cursor: pointer;
    display: inline-block; /* Adicione essa propriedade para que o botão não quebre em várias linhas */
    white-space: nowrap; /* Impede a quebra de texto em várias linhas */
    overflow: hidden; /* Impede que o conteúdo seja cortado */
    text-overflow: ellipsis; /* Adiciona reticências (...) quando o texto estiver muito longo */
  }

  /* Estilos para telas menores */
  @media (max-width: 768px) {
    span {
      font-size: 12px;
      padding: 10px 60px;
    }
  }

  /* Estilos para telas muito pequenas */
  @media (max-width: 576px) {
    span {
      font-size: 10px;
      padding: 8px 40px;
    }
  }

  /* Estilos para o iPad Mini no modo retrato */
  @media (max-width: 768px) and (max-height: 1024px) {
    span {
      /* Adicione aqui os estilos específicos para o iPad Mini em modo retrato */
    }
  }

  /* Estilos para o iPad Mini no modo paisagem */
  @media (max-width: 1024px) and (max-height: 768px) {
    span {
      /* Adicione aqui os estilos específicos para o iPad Mini em modo paisagem */
    }
  }
  
  /* Estilos para telas menores */
  @media (max-width: 768px) {
    width: 80%; /* Reduz a largura para telas menores */
    font-size: 24px; /* Reduz o tamanho da fonte para telas menores */
    padding: 0 20px; /* Adiciona espaço horizontal para telas menores */

    h2 {
      font-size: 36px; /* Ajusta o tamanho do título para telas menores */
    }
  }

  /* Estilos para telas muito pequenas */
  @media (max-width: 576px) {
    width: 90%; /* Reduz ainda mais a largura para telas muito pequenas */
    font-size: 20px; /* Reduz ainda mais o tamanho da fonte */
    padding: 0 10px; /* Adiciona espaço horizontal mínimo para telas muito pequenas */

    h2 {
      font-size: 32px; /* Ajusta o tamanho do título para telas muito pequenas */
    }
  }

  /* Estilos para telas muito pequenas */
  @media (max-width: 384px) {
    /* Estilos adicionais para telas muito pequenas (largura máxima de 384px) */
    width: 95%;
    font-size: 18px;
    padding: 0 5px;

    h2 {
      font-size: 28px;
    }
  }
`;
