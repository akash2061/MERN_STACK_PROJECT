import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-[#181a1b] p-2 py-4'>
            <div className='text-white text-2xl font-medium font-sans'>
                {/* <img src="https://avatars.githubusercontent.com/u/113748706?v=4" alt="Logo" style="height:50px;width:50px" /> */}
                Logo
            </div>
            <div>
                <input type="text" placeholder='Search...' className='p-2 py-1 border text-white border-gray-100 bg-transparent outline-none rounded-md' />
            </div>
            <div className='flex gap-5 text-white'>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default Navbar