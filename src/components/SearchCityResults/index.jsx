import React from "react";
import Card from "../Card"; 

const SearchCityResults = ({ searchResult }) => {
  return (
    <div>
      {searchResult && searchResult.length > 0 ? (
        <div>
          <h2>Resultados da Pesquisa</h2>
          {searchResult.map((imovel) => (
            <Card
              key={imovel.id}
              thumb={imovel.thumb}
              tipo={imovel.tipo}
              endereco={imovel.endereco}
              valor={imovel.valor}
              slug={imovel.slug}
            />
          ))}
        </div>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
};

export default SearchCityResults;
