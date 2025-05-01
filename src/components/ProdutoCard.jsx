export default function ProdutoCard() {
  return (
    <div className="max-w-md mx-auto bg-mercadolivre-gray p-6 rounded-2xl shadow-md mt-6">
      <h1 className="text-2xl font-bold text-mercadolivre-blue mb-2">
        Recomendação de Produto
      </h1>
      <p className="text-mercadolivre-text mb-4">
        Veja os produtos mais bem avaliados com entrega rápida no Mercado Livre!
      </p>

      <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
        <img
          src="https://http2.mlstatic.com/D_Q_NP_2X_837006-MLU72948151567_112023-F.webp"
          alt="Smartwatch XYZ"
          className="w-24 h-24 object-contain rounded-md"
        />

        <div>
          <h2 className="text-lg font-semibold text-mercadolivre-text">
            Smartwatch XYZ
          </h2>
          <p className="text-sm text-mercadolivre-text">
            <strong>Descrição:</strong> Modelo resistente à água, com monitoramento cardíaco.<br />
            <strong>Prós:</strong> Ótimo custo-benefício, entrega rápida.<br />
            <strong>Contras:</strong> Carregador frágil segundo alguns usuários.
          </p>
          <a
            href="#"
            className="inline-block mt-2 bg-mercadolivre-yellow text-mercadolivre-text font-bold py-1 px-3 rounded hover:opacity-90 transition"
          >
            Ver no Mercado Livre
          </a>
        </div>
      </div>
    </div>
  );
}
