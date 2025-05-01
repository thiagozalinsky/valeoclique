export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 space-y-3">
        <img src={product.image} alt={product.title} className="w-full rounded-xl" />
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-green-600 font-medium">Prós: {product.pros}</p>
        <p className="text-red-500 font-medium">Contras: {product.cons}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-orange-600 text-white text-center py-2 rounded-xl hover:bg-orange-700 transition"
        >
          Ver no Mercado Livre
        </a>
      </div>
    );
  }
  