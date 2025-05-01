import ProdutoCard from './components/ProdutoCard';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Cabeçalho */}
      <header className="bg-yellow-400 text-blue-900 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Vale o Clique – Blog do Mercado Livre</h1>
        <button className="bg-blue-900 text-white px-3 py-1 rounded">Menu</button>
      </header>

      {/* Conteúdo */}
      <main className="p-4 max-w-xl mx-auto">
        <section className="mb-4">
          <h2 className="text-2xl font-bold text-blue-900">Recomendações de Produtos do Mercado Livre</h2>
          <p className="text-gray-700">Achados, promoções e reviews com nossos links afiliados!</p>
        </section>

        <section className="space-y-4">
          <ProdutoCard
            titulo="Top produtos de hoje – 1º de Maio"
            descricao="Recomendações fresquinhas com base em avaliações reais e entrega rápida."
          />
          <ProdutoCard
            titulo="Tecnologia em oferta"
            descricao="Os eletrônicos mais buscados com frete grátis no Brasil."
          />
          <ProdutoCard
            titulo="Achados do Mercado Livre – 1º de Maio"
            produto={{
              nome: "Smartwatch XYZ",
              descricao: "Resistente à água com monitoramento de saúde.",
              imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_689155-MLA51862228576_102022-F.webp",
              pros: "Ótimo custo-benefício, entrega rápida",
              contras: "Manual confuso, bateria mediana"
            }}
          />
        </section>
      </main>
    </div>
  );
}
