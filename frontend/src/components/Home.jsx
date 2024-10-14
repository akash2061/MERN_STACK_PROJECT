import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './Carousel';
import Category from './Category';
import Footer from './Footer';
import { getAllProduct } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null); // State for showing product details on mobile
  const [isHovered, setIsHovered] = useState(false); // State for controlling hover effect

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleAddCart = (data) => {
    dispatch(addToCart(data));
  };

  // Function to filter products by category name
  const filterProductsByCategory = (category) => {
    return products.filter((item) => item.category === category);
  };

  const handleHover = (item) => {
    setSelectedProduct(item);
    setIsHovered(true);
  };

  const handleLeaveHover = () => {
    setIsHovered(false);
  };

  // Function to open product details for mobile
  const handleProductClick = (item) => {
    if (!isHovered) {
      setSelectedProduct(item);
      setIsHovered(true);
    }
  };

  return (
    <div>
      <Carousel />
      <Category />

      <div className="w-[90%] mx-auto text-[#EAEAEA] mt-8">
        {/* Category: Tech Items */}
        <h2 className="text-2xl font-semibold mb-4">Tech Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {filterProductsByCategory('Tech Items').map((item, i) => (
            <div
              key={i}
              className="relative bg-[#e3c5ff6b] p-4 shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
              onMouseEnter={() => handleHover(item)} // Show hover effect on desktop
              onMouseLeave={handleLeaveHover}
              onClick={() => handleProductClick(item)} // Show details on click for mobile
            >
              <img
                src={`http://localhost:5000/${item.productUrl}`}
                alt={item.name}
                className="w-full h-50 object-cover rounded-lg transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm">Price: ${item.price}</p>

              {/* Hover details section */}
              {isHovered && selectedProduct?.name === item.name && (
                <div className="absolute inset-0 bg-black bg-opacity-80 text-white font-semibold p-4 flex flex-col justify-center items-center">
                  <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                  <p className="text-base mb-1">Price: ${item.price}</p>
                  <p className="text-sm mb-3">{item.description || 'No description available'}</p>
                  <button
                    className="p-2 bg-blue-500 text-white rounded text-sm mt-2"
                    onClick={() => handleAddCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional categories can be added here similarly */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
