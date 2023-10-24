import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 50px 150px;
  }

  h2 {
    font-size: 1.875rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const ContainerForm = styled.div`
  padding: 15px;
  width: 100%;

  @media (min-width: 768px) {
    width: 370px;
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
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
