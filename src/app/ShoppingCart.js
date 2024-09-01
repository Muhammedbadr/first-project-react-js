"use client"; // Add this line at the top

import { useState } from 'react';

const initialProducts = [
  { id: 0, name: 'Baklava', count: 1 },
  { id: 1, name: 'Cheese', count: 5 },
  { id: 2, name: 'Spaghetti', count: 2 },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, count: product.count + 1 } : product
    ));
  }

  function handleDecreaseClick(productId) {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, count: Math.max(product.count - 1, 0) } : product
    ));
  }

  return (
    <div className="w-1/2 p-6 mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Shopping Cart</h2>
      <ul className="space-y-4">
        {products.map(product => (
          <li
            key={product.id}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <span className="text-lg font-medium text-gray-800">{product.name}</span>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleDecreaseClick(product.id)}
                className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
              >
                -
              </button>
              <span className="text-lg font-semibold text-gray-900">
                <span className="bg-gray-200 px-4 py-2 rounded-md">{product.count}</span>
              </span>
              <button
                onClick={() => handleIncreaseClick(product.id)}
                className="px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
