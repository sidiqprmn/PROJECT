import React from 'react';

const ProductCard = ({ product }) => {
  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`h-4 w-4 fill-current ${
        index < product.rating ? 'text-yellow-500' : 'text-gray-300'
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0l2.39 6.59h6.11l-4.93 3.8 1.87 6.2-4.92-3.79-4.92 3.79 1.86-6.2-4.92-3.8h6.1z" />
    </svg>
  ));

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <img className="w-full h-32 object-cover" src={product.image} alt={product.name} />
      <div className="p-2">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
      <div className="px-6 py-2 flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-800">${product.price}</div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {ratingStars}
          </div>
          <span className={`text-sm font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
      <div className="px-6 py-2 flex justify-between items-center">
        <div className="flex space-x-1">
          <svg className="h-4 w-4 inline-block text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.5 10c0 1.93 2.685 3.5 6 3.5s6-1.57 6-3.5-2.685-3.5-6-3.5-6 1.57-6 3.5zm6 1.167a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334zm0 1.167a2.334 2.334 0 1 1 0-4.667 2.334 2.334 0 0 1 0 4.667z"
            />
          </svg>
          <span className="text-gray-600 text-sm">{product.views} views</span>
        </div>
        <div className="flex space-x-1">
          <img className="h-4 w-4 inline-block text-gray-500" src="http://cdn.onlinewebfonts.com/svg/img_287671.png" alt="Comment Icon" />
          <span className="text-gray-600 text-sm">{product.comments}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
