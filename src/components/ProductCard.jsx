export default function ProdutoCard({ titulo, descricao, produto }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold text-blue-900">{titulo}</h3>
      <p className="text-gray-700 mb-2">{descricao}</p>

      {produto && (
        <div className="flex items-start space-x-4 mt-2">
          <img src={produto.imagem} alt={produto.nome} className="w-24 h-24 object-cover rounded" />
          <div>
            <h4 className="font-semibold text-blue-900">{produto.nome}</h4>
            <p className="text-sm text-gray-700">{produto.descricao}</p>
            <p className="text-green-700"><strong>Prós:</strong> {produto.pros}</p>
            <p className="text-red-600"><strong>Contras:</strong> {produto.contras}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default function ProdutoCard({ titulo, descricao, produto }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold text-blue-900">{titulo}</h3>
      <p className="text-gray-700 mb-2">{descricao}</p>

      {produto && (
        <div className="flex items-start space-x-4 mt-2">
          <img src={produto.imagem} alt={produto.nome} className="w-24 h-24 object-cover rounded" />
          <div>
            <h4 className="font-semibold text-blue-900">{produto.nome}</h4>
            <p className="text-sm text-gray-700">{produto.descricao}</p>
            <p className="text-green-700"><strong>Prós:</strong> {produto.pros}</p>
            <p className="text-red-600"><strong>Contras:</strong> {produto.contras}</p>
          </div>
        </div>
      )}
    </div>
  );
}
