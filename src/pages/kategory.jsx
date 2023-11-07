import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import Navbarguest from '../components/layout/navbar/navbarguest';
import ProductCard from '../components/card/card';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 0,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 4,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 1,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 0,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 2,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 0,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 0,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description of Product 1',
    image: 'http://2.bp.blogspot.com/-ohJQDruGauM/VJlzCg3QSUI/AAAAAAAABYM/5YVfefgEkYs/s1600/Model+sepatu+anak+laki+laki+sd+keren+terbaru+2015+4.jpg',
    price: 29.99,
    stock: 0,
  },

  // Daftar produk
];

const Kategory = () => {
  return (
    <div>
      <Navbarguest />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-300 text-black p-4 h-screen" style={{ height: '145vh' }}>
          <h3 className="text-xl font-semibold mb-4">Filter</h3>
          <div className="space-y-2">
          <button className="w-full py-2 px-4 rounded-md bg-gray-200 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400">
              {/* <FontAwesomeIcon icon={faSquare} className="mr-2" /> */}
              Select Category
              <svg className="-mr-1 ml-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="mt-2 space-y-1">
              <a href="#category1" className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black">
                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                Category 1
              </a>
              <a href="#category2" className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black">
                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                Category 2
              </a>
              <a href="#category2" className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black">
                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                Category 3
              </a>
              <a href="#category2" className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black">
                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                Category 4
              </a>
              <a href="#category2" className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black">
                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                Category 5
              </a>
              {/* Tambahkan kategori lainnya */}
            </div>
          </div>
        </div>

        {/* Daftar Produk */}
        <div className="w-3/4 p-4">
        <div className="mt-4 flex flex-wrap justify-center">
            {products.map(product => (
          <div key={product.id} className="mr-4 mb-4" style={{ width: '300px' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategory;