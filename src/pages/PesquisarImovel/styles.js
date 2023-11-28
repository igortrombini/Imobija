import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const ResultsContainer = styled.div`
  margin-top: 20px;
`;

export const LoadingMessage = styled.p`
  font-size: 16px;
  color: #333;
`;

export const NoResultsMessage = styled.p`
  font-size: 18px;
  color: #d9534f; /* Cor de destaque para mensagens de erro ou alerta */
`;

export const ResultTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: #d9534f;
`;