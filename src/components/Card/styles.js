import styled from "styled-components";

export const Container = styled.div`
    width: 24%;
    margin-bottom: 12px;
    background-color: var(--white);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 48%; /* Reduz a largura para 48% em telas menores que 768px */
    }

    @media (max-width: 480px) {
        width: 100%; /* Define a largura para 100% em telas menores que 480px */
    }
`;

export const Img = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: auto;
    }
`;

export const Description = styled.div`
    padding: 12px;
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--secondary);
    }
    h4 {
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

export const Itens = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    span {
        margin-bottom: 10px;
    }
`;
