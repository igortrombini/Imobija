import React from "react";

const SearchCityResults = ({ searchResult }) => {
  return (
    <div>
      <h2>Resultados da Pesquisa</h2>
      {searchResult && searchResult.length > 0 ? (
        <div>
          <p>Nome da Cidade: {searchResult[0].cidade}</p>
          {/* Renderize a lista de imóveis encontrados */}
          <ul>
            {searchResult.map((imovel) => (
              <li key={imovel.id}>
                <p>Nome do Imóvel: {imovel.nome}</p>
                {/* Adicione outros detalhes do imóvel conforme necessário */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
};

export default SearchCityResults;
