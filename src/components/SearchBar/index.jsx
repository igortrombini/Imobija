import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchContainer,
  InputField,
  SearchButton,
} from "./styles"; // Importe os estilos

const SearchBar = ({ isMobileMenuOpen }) => {
  const [cityName, setCityName] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      // Faça uma solicitação para a rota de pesquisa de cidade no seu servidor
      const response = await fetch(`/findcity/${cityName}`);
      if (!response.ok) {
        throw new Error("Não foi possível concluir a pesquisa.");
      }
      const data = await response.json();

      // Armazene os resultados da pesquisa no estado
      setSearchResult(data.city);
      setError(null); // Limpe qualquer erro anterior, se houver

      // Exiba uma notificação de sucesso
      toast.success('Pesquisa concluída com sucesso!');
    } catch (error) {
      console.error("Erro ao buscar a cidade:", error);
      // Exiba uma notificação de erro
      toast.error('Ocorreu um erro ao buscar a cidade. Tente novamente.');
    }
  };

  return (
    <SearchContainer>
      <InputField
        type="text"
        placeholder="Digite a cidade que deseja encontrar seu imóvel..."
        isMobileMenuOpen={isMobileMenuOpen}
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Link to="/search-results"> {/* Usando o Link para redirecionar */}
        <SearchButton isMobileMenuOpen={isMobileMenuOpen} onClick={handleSearch}>
          Pesquisar
        </SearchButton>
      </Link>
      {error && <p>{error}</p>}
      {searchResult && (
        <p>Resultado da pesquisa: {searchResult}</p>
      )}
      <ToastContainer /> {/* Renderize o ToastContainer para exibir as notificações */}
    </SearchContainer>
  );
};

export default SearchBar;
