import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchContainer,
  InputField,
  SearchButton,
} from "./styles";

const SearchBar = ({ isMobileMenuOpen }) => {
  const [cityName, setCityName] = useState("");
  const history = useHistory();

  const handleSearch = async () => {
    try {
      const response = await fetch(`/pesquisar-imoveis?cidade=${cityName}`);
      
      if (!response.ok) {
        throw new Error("Não foi possível concluir a pesquisa.");
      }
  
      try {
        // Tentar analisar a resposta como JSON
        const data = await response.json();
  
        // Exemplo: redirecionar para /pesquisar-imoveis e passar dados de pesquisa como estado
        history.push('/pesquisar-imoveis', { searchResult: data, cityName });
  
        // Exiba uma notificação de sucesso
        toast.success('Pesquisa concluída com sucesso!');
      } catch (jsonError) {
        // Se falhar ao analisar como JSON, talvez seja uma resposta diferente (por exemplo, uma mensagem de sucesso sem dados JSON)
        // Aqui, você pode adicionar lógica personalizada para lidar com diferentes tipos de respostas do servidor.
        console.error("Erro ao analisar resposta JSON:", jsonError);
        toast.error('Ocorreu um erro ao buscar a cidade. Tente novamente.');
      }
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
      <SearchButton isMobileMenuOpen={isMobileMenuOpen} onClick={handleSearch}>
        Pesquisar
      </SearchButton>
      <ToastContainer />
    </SearchContainer>
  );
};

export default SearchBar;
