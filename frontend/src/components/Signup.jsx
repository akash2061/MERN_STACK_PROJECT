import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { signup } from '../redux/slices/authSlice';

const Signup = () => {
    const validationSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().min(1, "Email is required").email("Invalid Email"),
        password: z.string()
            .min(8, "Password must be 8 characters long")
            .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
            .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
            .regex(/[0-9]/, "Password must contain at least 1 number")
            .regex(/[\W_]/, "Password must contain at least 1 special character"),
        phoneNumber: z.string().length(10, "Phone Number must be exactly 10 digits"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, error } = useSelector((state) => state.auth);

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:5000/api/auth/google";
    };

    const onSubmit = async (data) => {
        const resultAction = await dispatch(signup(data));
        // Check if the signup action was successful
        if (signup.fulfilled.match(resultAction)) {
            alert('Signup successful! Please log in with your credentials.');
            navigate("/login");
        } else if (signup.rejected.match(resultAction)) {
            alert(`Signup error: ${resultAction.payload.message}`);
        }
    };

    useEffect(() => {
        if (error) {
            alert(`Signup error: ${error.message}`);
        }
    }, [error]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#0F0F0F]">
            <div className="w-auto xl:h-4/5 lg:h-4/5 h-auto py-12 flex flex-col gap-10 md:flex-row sm:gap-8 md:gap-8 lg:gap-28 xl:gap-28 justify-center items-center bg-[#1C1C1E] shadow-2xl rounded-2xl md:py-8 sm:py-4 m-3 md:m-3">
                <div>
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-illustration-download-in-svg-png-gif-file-formats--password-profile-businessman-pack-business-illustrations-5857593.png?f=webp"
                        className="w-28 md:w-auto"
                        alt="Profile"
                    />
                </div>
                <div className="w-10/12 md:w-1/2 flex flex-col gap-8 md:justify-center items-center md:items-center md:pr-4">
                    <h1 className="text-3xl text-wrap text-[#EAEAEA] font-semibold font-sans text-center">
                        Welcome!<br className="md:hidden" /> Sign-Up
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="grid grid-cols-2 gap-3">
                            <div className='mr-3'>
                                <label className="text-[#EAEAEA] font-semibold">Name</label>
                                <input
                                    type="text"
                                    className={`p-2 border w-full my-2 rounded shadow-xl ${errors.name ? "border-[#FF453A] outline-none" : "border-[#2C2C2E] outline-[#007AFF]"}`}
                                    {...register("name")}
                                />
                                {errors.name && <span className="text-[#FF453A]">{errors.name.message}</span>}
                            </div>
                            <div className='ml-3'>
                                <label className="text-[#EAEAEA] font-semibold">Email</label>
                                <input
                                    type="email"
                                    className={`p-2 border w-full my-2 rounded shadow-xl ${errors.email ? "border-[#FF453A] outline-none" : "border-[#2C2C2E] outline-[#007AFF]"}`}
                                    {...register("email")}
                                />
                                {errors.email && <span className="text-[#FF453A]">{errors.email.message}</span>}
                            </div>
                            <div className='mr-3'>
                                <label className="text-[#EAEAEA] font-semibold">Password</label>
                                <input
                                    type="password"
                                    className={`p-2 border w-full my-2 rounded shadow-xl ${errors.password ? "border-[#FF453A] outline-none" : "border-[#2C2C2E] outline-[#007AFF]"}`}
                                    {...register("password")}
                                />
                                {errors.password && <span className="text-[#FF453A]">{errors.password.message}</span>}
                            </div>
                            <div className='ml-3'>
                                <label className="text-[#EAEAEA] font-semibold">Phone Number</label>
                                <input
                                    type="text"
                                    className={`p-2 border w-full my-2 rounded shadow-xl ${errors.phoneNumber ? "border-[#FF453A] outline-none" : "border-[#2C2C2E] outline-[#007AFF]"}`}
                                    {...register("phoneNumber")}
                                />
                                {errors.phoneNumber && <span className="text-[#FF453A]">{errors.phoneNumber.message}</span>}
                            </div>
                        </div>
                        <button className="bg-[#007AFF] my-5 text-[#EAEAEA] font-semibold p-2 w-full shadow-xl rounded active:bg-[#0056D1]">
                            Sign-Up
                        </button>
                    </form>
                    <button className='bg-[#FF453A] my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600' onClick={handleGoogleLogin}>Sign-Up With Google</button>

                    <div className='text-[#EAEAEAEA] text-center'>
                        <p>
                            Have an account?
                            <Link to="/login" className="text-[#0056D1] hover:underline ml-2">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;