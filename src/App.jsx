import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm">
      <Header />
      <section className="space-y-6 mt-6">
        <div>
          <h2 className="text-lg font-bold">Top produtos de hoje - 15 de abril</h2>
          <p className="text-sm text-gray-600">
            Confira nossas recomendações diárias com avaliações e comentários reais!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Melhores eletrônicos da semana</h2>
          <p className="text-sm text-gray-600">
            Selecionamos os mais bem avaliados com entrega rápida no Brasil.
          </p>
        </div>

        <ProductCard />
      </section>
    </div>
  );
}
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm">
      <Header />
      <section className="space-y-6 mt-6">
        <div>
          <h2 className="text-lg font-bold">Top produtos de hoje - 15 de abril</h2>
          <p className="text-sm text-gray-600">
            Confira nossas recomendações diárias com avaliações e comentários reais!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Melhores eletrônicos da semana</h2>
          <p className="text-sm text-gray-600">
            Selecionamos os mais bem avaliados com entrega rápida no Brasil.
          </p>
        </div>

        <ProductCard />
      </section>
    </div>
  );
}
