import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <Header />
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
}
