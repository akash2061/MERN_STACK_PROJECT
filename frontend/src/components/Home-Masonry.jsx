import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './Carousel';
import Category from './Category';
import Footer from './Footer';
import { getAllProduct } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';

const Home = () => {
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    const handleAddCart = (data) => {
        dispatch(addToCart(data));
    };

    const filterProductsByCategory = (category) => {
        return products.filter((item) => item.category === category);
    };

    return (
        <div>
            <Carousel />
            <Category />

            <div className="w-[90%] mx-auto text-[#EAEAEA] mt-8">
                {/* Category: Tech Items */}
                <h2 className="text-2xl font-semibold mb-4">Tech Items</h2>
                <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
                    {filterProductsByCategory('Tech Items').map((item, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid bg-slate-700 p-2 shadow-xl rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-150 ease-out"
                        >
                            <img
                                src={`http://localhost:5000/${item.productUrl}`}
                                alt={item.name}
                                className="w-full h-auto object-cover rounded-lg transition-transform duration-150 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out overflow-hidden max-h-0 group-hover:max-h-[300px] transition-max-height">
                                {/* Scrollable content */}
                                <div className="overflow-y-auto max-h-full flex flex-col *:justify-center items-center">
                                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                    <p className="text-sm mb-1">Price: ${item.price}</p>
                                    <p className="text-sm mb-1">Category: {item.category}</p>
                                    <p className="text-sm mb-3">Description: {item.description || 'No description available'}</p>
                                    <button
                                        className="p-2 text-sm bg-[#0056D1] text-[#EAEAEA] font-semibold rounded transition duration-150 ease-out hover:bg-[#007AFF] hover:text-white"
                                        onClick={() => handleAddCart(item)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other categories follow the same structure as Tech Items */}
                {/* Category: Gadgets-Weaponry */}
                <h2 className="text-2xl font-semibold mb-4">Gadgets-Weaponry</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {filterProductsByCategory('Gadgets-Weaponry').map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-[#e3c5ff6b] p-4 shadow-xl rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-150 ease-out"
                        >
                            <img
                                src={`http://localhost:5000/${item.productUrl}`}
                                alt={item.name}
                                className="w-full h-50 object-cover rounded-lg transition-transform duration-150 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out overflow-hidden max-h-0 group-hover:max-h-[300px] transition-max-height">
                                {/* Scrollable content */}
                                <div className="overflow-y-auto max-h-full">
                                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                    <p className="text-sm mb-1">Price: ${item.price}</p>
                                    <p className="text-sm mb-1">Category: {item.category}</p>
                                    <p className="text-sm mb-3">Description: {item.description || 'No description available'}</p>
                                    <button
                                        className="p-2 text-sm bg-[#0056D1] text-[#EAEAEAEA] font-semibold rounded transition duration-150 ease-out hover:bg-[#007AFF] hover:text-white"
                                        onClick={() => handleAddCart(item)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Category: Accessories */}
                <h2 className="text-2xl font-semibold mb-4">Accessories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {filterProductsByCategory('Accessories').map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-[#e3c5ff6b] p-4 shadow-xl rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-150 ease-out"
                        >
                            <img
                                src={`http://localhost:5000/${item.productUrl}`}
                                alt={item.name}
                                className="w-full h-50 object-cover rounded-lg transition-transform duration-150 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out overflow-hidden max-h-0 group-hover:max-h-[300px] transition-max-height">
                                {/* Scrollable content */}
                                <div className="overflow-y-auto max-h-full">
                                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                    <p className="text-sm mb-1">Price: ${item.price}</p>
                                    <p className="text-sm mb-1">Category: {item.category}</p>
                                    <p className="text-sm mb-3">Description: {item.description || 'No description available'}</p>
                                    <button
                                        className="p-2 text-sm bg-[#0056D1] text-[#EAEAEAEA] font-semibold rounded transition duration-150 ease-out hover:bg-[#007AFF] hover:text-white"
                                        onClick={() => handleAddCart(item)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Category: Smart Devices - EXOs */}
                <h2 className="text-2xl font-semibold mb-4">Smart Devices - EXOs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {filterProductsByCategory('Smart Devices - EXOs').map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-[#e3c5ff6b] p-4 shadow-xl rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-150 ease-out"
                        >
                            <img
                                src={`http://localhost:5000/${item.productUrl}`}
                                alt={item.name}
                                className="w-full h-50 object-cover rounded-lg transition-transform duration-150 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out overflow-hidden max-h-0 group-hover:max-h-[300px] transition-max-height">
                                {/* Scrollable content */}
                                <div className="overflow-y-auto max-h-full">
                                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                    <p className="text-sm mb-1">Price: ${item.price}</p>
                                    <p className="text-sm mb-1">Category: {item.category}</p>
                                    <p className="text-sm mb-3">Description: {item.description || 'No description available'}</p>
                                    <button
                                        className="p-2 text-sm bg-[#0056D1] text-[#EAEAEAEA] font-semibold rounded transition duration-150 ease-out hover:bg-[#007AFF] hover:text-white"
                                        onClick={() => handleAddCart(item)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
