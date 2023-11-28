import React, { useState, useEffect } from "react";
import Card from "../Card"; // Certifique-se de importar o componente Card
import { urlApi } from "../../services/Api"; // Importe a URL da API, se necessário

const PesquisarImoveis = ({ cidade }) => {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faça uma chamada à API para pesquisar imóveis por cidade
        const response = await fetch(`/pesquisar-imoveis?cidade=${cidade}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar imóveis por cidade.");
        }
        const data = await response.json();

        // Atualize o estado com os resultados da pesquisa
        setImoveis(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [cidade]);

  return (
    <div>
      <h2>Resultados da Pesquisa</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {imoveis.length > 0 ? (
            imoveis.map((imovel) => (
              <Card
                key={imovel.id}
                thumb={`${urlApi}/uploads/${imovel.thumb}`}
                tipo={imovel.tipo}
                endereco={imovel.endereco}
                valor={imovel.valor}
                slug={imovel.slug}
              />
            ))
          ) : (
            <p>Nenhum resultado encontrado para a cidade {cidade}.</p>
          )}
        </>
      )}
    </div>
  );
};

export default PesquisarImoveis;