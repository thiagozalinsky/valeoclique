import { useEffect, useState } from 'react';

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/abc123xyz456") // coloque sua URL real
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div className="p-4 grid gap-4">
      {produtos.map((produto, i) => (
        <div key={i} className="border p-4 rounded-xl bg-white shadow">
          <img src={produto.imagem} alt={produto.nome} className="w-32 h-32 object-cover mb-2" />
          <h2 className="font-bold text-lg">{produto.nome}</h2>
          <p className="text-sm">{produto.descricao}</p>
          <a
            href={produto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            Ver no Mercado Livre
          </a>
        </div>
      ))}
    </div>
  );
}
