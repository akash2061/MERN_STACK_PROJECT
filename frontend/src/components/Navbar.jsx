import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { logout } from '../redux/slices/authSlice';
import { FaShoppingCart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { PiShoppingBagFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import nextgen from '../assets/logo/nextgen_hub.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const { isAuth, role } = useSelector((state) => state.auth);
    const { cartItem } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logout());
    };

    return (
        <div className='flex rounded-md justify-between items-center m-4 p-4 bg-cyan-950 sticky top-0 z-50'>
            <div className='text-[#EAEAEA] text-3xl font-semibold'>
                <Link to="/">
                    <img src={nextgen} alt="Profile" className='h-10 w-auto' />
                </Link>
            </div>
            <div className='w-1/3'>
                <input type="text" placeholder='Search...' className='p-2 border border-gray-700 outline-none w-full rounded-md' />
            </div>
            {/* Hamburger Menu for Mobile Screens */}
            <div className='block md:hidden'>
                <button
                    className='text-[#EAEAEA] text-3xl'
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                >
                    {/* Hamburger icon - three lines */}
                    <div className='flex flex-col space-y-1'>
                        <span className='block w-8 h-1 bg-current'></span>
                        <span className='block w-8 h-1 bg-current'></span>
                        <span className='block w-8 h-1 bg-current'></span>
                    </div>
                </button>
            </div>
            {/* Regular Navigation Links */}
            <div className={`hidden md:flex gap-5 text-[#EAEAEA] text-lg font-normal`}>
                {isAuth ? (
                    role === "User" ? (
                        <>
                            <Link to="/cart">
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <Badge badgeContent={cartItem.length} color="error">
                                        <FaShoppingCart />
                                    </Badge>
                                    <p className='text-xs'>Cart</p>
                                </div>
                            </Link>
                            <Link to="/myorder">
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <PiShoppingBagFill />
                                    <p className='text-xs'>My Orders</p>
                                </div>
                            </Link>
                            <Link to="/profile">
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <CgProfile />
                                    <p className='text-xs'>Profile</p>
                                </div>
                            </Link>
                            <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <button className='active:text-gray-600' onClick={handleLogout}>
                                    <MdLogout />
                                </button>
                                <p className='text-xs'>Logout</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard">
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <MdOutlineDashboardCustomize />
                                    <p className='text-xs'>Dashboard</p>
                                </div>
                            </Link>
                            <Link to="/adminUser">
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <FaUsers />
                                    <p className='text-xs'>Users</p>
                                </div>
                            </Link>
                            <Link to="/adminProduct">
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <FaUsers />
                                    <p className='text-xs'>Products</p>
                                </div>
                            </Link>
                            <Link to="/adminOrder">
                                <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                    <FaUsers />
                                    <p className='text-xs'>Orders</p>
                                </div>
                            </Link>
                            <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <button className='active:text-gray-600' onClick={handleLogout}>
                                    <MdLogout />
                                </button>
                                <p className='text-xs'>Logout</p>
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <Link to="/cart">
                            <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <Badge badgeContent={cartItem.length} color="error">
                                    <FaShoppingCart />
                                </Badge>
                                <p className='text-xs'>Cart</p>
                            </div>
                        </Link>
                        <Link to="/login">
                            <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <RiLoginBoxFill />
                                <p className='text-xs'>Login</p>
                            </div>
                        </Link>
                        <Link to="/signup">
                            <div className='flex flex-col items-center hover:transform hover:scale-105'>
                                <FaUserPlus />
                                <p className='text-xs'>Signup</p>
                            </div>
                        </Link>
                    </>
                )}
            </div>
            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-cyan-950 z-40 flex flex-col items-center justify-center">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 text-white text-3xl">
                        &times; {/* Close button */}
                    </button>
                    <div className='flex flex-col text-[#EAEAEA] text-lg font-normal'>
                        {isAuth ? (
                            role === "User" ? (
                                <>
                                    <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                                        <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                            <Badge badgeContent={cartItem.length} color="error">
                                                <FaShoppingCart size={40} /> {/* Increased size */}
                                            </Badge>
                                            <p className='text-xs'>Cart</p>
                                        </div>
                                    </Link>
                                    <Link to="/myorder" onClick={() => setIsMenuOpen(false)}>
                                        <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                            <PiShoppingBagFill size={40} /> {/* Increased size */}
                                            <p className='text-xs'>My Orders</p>
                                        </div>
                                    </Link>
                                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                                        <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                            <CgProfile size={40} /> {/* Increased size */}
                                            <p className='text-xs'>Profile</p>
                                        </div>
                                    </Link>
                                    <div className='flex flex-col items-center space-y-2 m-10' onClick={() => { handleLogout(); setIsMenuOpen(false); }}>
                                        <MdLogout size={40} /> {/* Increased size */}
                                        <p className='text-xs'>Logout</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                                        <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                            <MdOutlineDashboardCustomize size={40} /> {/* Increased size */}
                                            <p className='text-xs'>Dashboard</p>
                                        </div>
                                    </Link>
                                    <Link to="/adminUser" onClick={() => setIsMenuOpen(false)}>
                                        <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                            <FaUsers size={40} /> {/* Increased size */}
                                            <p className='text-xs'>Users</p>
                                        </div>
                                    </Link>
                                    <Link to="/adminProduct" onClick={() => setIsMenuOpen(false)}>
                                        <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                            <FaUsers size={40} /> {/* Increased size */}
                                            <p className='text-xs'>Products</p>
                                        </div>
                                    </Link>
                                    <Link to="/adminOrder" onClick={() => setIsMenuOpen(false)}>
                                        <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                            <FaUsers size={40} /> {/* Increased size */}
                                            <p className='text-xs'>Orders</p>
                                        </div>
                                    </Link>
                                    <div className='flex flex-col items-center space-y-2 m-10' onClick={() => { handleLogout(); setIsMenuOpen(false); }}>
                                        <MdLogout size={40} /> {/* Increased size */}
                                        <p className='text-xs'>Logout</p>
                                    </div>
                                </>
                            )
                        ) : (
                            <>
                                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                                    <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                        <Badge badgeContent={cartItem.length} color="error">
                                            <FaShoppingCart size={40} /> {/* Increased size */}
                                        </Badge>
                                        <p className='text-xs'>Cart</p>
                                    </div>
                                </Link>
                                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                                    <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                        <RiLoginBoxFill size={40} /> {/* Increased size */}
                                        <p className='text-xs'>Login</p>
                                    </div>
                                </Link>
                                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                                    <div className='flex flex-col items-center space-y-2 m-10'> {/* Increased space */}
                                        <FaUserPlus size={40} /> {/* Increased size */}
                                        <p className='text-xs'>Signup</p>
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
