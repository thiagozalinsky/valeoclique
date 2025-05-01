import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    nome: 'Smartwatch XYZ',
    descricao: 'Modelo resistente à água, com monitoramento cardíaco.',
    pros: 'Ótimo custo-benefício, entrega rápida.',
    contras: 'Carregador frágil segundo alguns usuários.',
    imagem: 'https://http2.mlstatic.com/D_Q_NP_2X_837006-MLU72948151567_112023-F.webp',
    link: 'https://www.mercadolivre.com.br'
  },
  // Você pode adicionar mais produtos aqui
];

export default function ProductList() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Achados do Mercado Livre</h1>
      <div className="space-y-6">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
