// src/App.jsx

import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm">
      <Header />
      <ProductCard />
    </div>
  );
}
