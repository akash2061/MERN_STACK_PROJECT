import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { logOut } from '../redux/slices/authSlice';

const Navbar = () => {
    const { isAuth, role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <div className='flex justify-between items-center bg-sky-950 px-6 py-4 w-full'>
            <div className='text-[#EAEAEA] text-2xl font-medium'>
                Logo
            </div>
            <div>
                <input type="text" placeholder='Search...' className='p-2 py-1 border border-gray-100 bg-transparent text-[#EAEAEA] outline-none' />
            </div>
            <div className='flex gap-5 items-center'>
                {
                    isAuth
                        ?
                        (
                            role === "User"
                                ?
                                (
                                    <div className='flex gap-5 text-[#EAEAEA]'>
                                        <Link to="/cart">Cart</Link>
                                        <Link to="/myorder">My-Orders</Link>
                                        <Link to="/profile">Profile</Link>
                                    </div>
                                )
                                :
                                (
                                    <div className='flex gap-5 text-[#EAEAEA]'>
                                        <Link to="/dashboard">Dashboard</Link>
                                        <Link to="/adminUser">Users</Link>
                                        <Link to="/adminProduct">Products</Link>
                                        <Link to="/adminOrder">Orders</Link>
                                        <Link to="/profile">Profile</Link>
                                    </div>
                                )
                        )
                        :
                        (
                            <div className='flex gap-5 text-[#EAEAEA]'>
                                <Link to="/cart">Cart</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                        )
                }
                {isAuth && (
                    <button className='text-xl text-[#EAEAEA]' onClick={handleLogOut}><FiLogOut /></button>
                )}
            </div>

        </div>
    )
}

export default Navbar
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <div className='flex justify-between items-center bg-[#181a1b] p-2 py-4'>
//             <div className='text-white text-2xl font-medium font-sans'>
//                 {/* <img src="https://avatars.githubusercontent.com/u/113748706?v=4" alt="Logo" style="height:50px;width:50px" /> */}
//                 Logo
//             </div>
//             <div>
//                 <input type="text" placeholder='Search...' className='p-2 py-1 border text-white border-gray-100 bg-transparent outline-none rounded-md' />
//             </div>
//             <div className='flex gap-5 text-white'>
//                 <Link to="/cart">Cart</Link>
//                 <Link to="/login">Login</Link>
//                 <Link to="/signup">Signup</Link>
//             </div>
//         </div>
//     )
// }

// export default Navbar