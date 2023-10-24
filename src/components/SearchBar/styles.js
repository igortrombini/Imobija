import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none; /* Hide the entire SearchContainer on screens smaller than 768px */
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #ccc;
  display: block;

  @media (min-width: 769px) {
    width: 450px;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #0074e4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0057b3;
  }

  /* Oculta o botão de pesquisa quando isMobileMenuOpen for verdadeiro */
  display: ${(props) => (props.isMobileMenuOpen ? "none" : "block")};
`;
