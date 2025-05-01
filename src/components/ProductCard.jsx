export default function ProductCard({ nome, descricao, imagem, link }) {
  return (
    <div className="border p-4 rounded-lg shadow bg-white">
      <img
        src={imagem}
        alt={nome}
        className="w-full h-48 object-contain mb-2 rounded"
      />
      <h3 className="text-lg font-semibold">{nome}</h3>
      <p className="text-sm text-gray-700">{descricao}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block mt-2 bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
      >
        Ver no Mercado Livre
      </a>
    </div>
  );
}
