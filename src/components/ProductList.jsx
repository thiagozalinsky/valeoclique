import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/5swgpzzyfsusd')
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {produtos.map((produto, index) => (
        <ProductCard
          key={index}
          nome={produto.nome}
          descricao={produto.descricao}
          imagem={produto.imagem}
          link={produto.link}
        />
      ))}
    </div>
  );
}
