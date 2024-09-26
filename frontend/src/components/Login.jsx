import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { login } from '../redux/slices/authSlice';


const Login = () => {
    const validationSchema = z.object({
        email: z.string().min(1, "Email is required"),
        password: z.string()
            .min(8, "Password is required")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(login(data));
    };

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth]);

    return (
        <div className="w-4/5 xl:h-4/5 lg:h-4/5 h-auto py-12 flex flex-col gap-10 md:flex-row sm:gap-8 md:gap-8 lg:gap-28 xl:gap-28 justify-center items-center bg-[#1C1C1E] shadow-2xl rounded-2xl md:py-8 sm:py-4 sm:mt-8">
            <div>
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-illustration-download-in-svg-png-gif-file-formats--password-profile-businessman-pack-business-illustrations-5857593.png?f=webp"
                    // src="https://www.kali.org/images/kali-dragon-icon.svg"
                    // src="https://avatars.githubusercontent.com/u/113748706?v=4"
                    className="w-28 md:w-auto"
                    alt="Profile"
                />
            </div>
            <div className="w-10/12 md:w-1/2 flex flex-col gap-8 md:justify-center md:items-center md:pr-4">
                <h1 className="text-3xl text-wrap text-[#EAEAEA] font-semibold font-sans text-center">
                    Welcome back!<br className="md:hidden" /> Log-In
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="grid md:grid-cols-2">
                        <div className='md:mr-2'>
                            <label className="text-[#EAEAEA] font-semibold">Email</label>
                            <input
                                type="email"
                                className={`p-2 border w-full my-2 rounded shadow-xl ${errors.email ? "border-[#FF453A] outline-none" : "border-[#2C2C2E] outline-[#007AFF]"}`}
                                {...register("email")}
                            />
                            {errors.email && <span className="text-[#FF453A]">{errors.email.message}</span>}
                        </div>
                        <div className='md:ml-2'>
                            <label className="text-[#EAEAEA] font-semibold">Password</label>
                            <input
                                type="password"
                                className={`p-2 border w-full my-2 rounded shadow-xl ${errors.password ? "border-[#FF453A] outline-none" : "border-[#2C2C2E] outline-[#007AFF]"}`}
                                {...register("password")}
                            />
                            {errors.password && <span className="text-[#FF453A]">{errors.password.message}</span>}
                        </div>
                    </div>
                    <button className="bg-[#007AFF] my-5 text-[#EAEAEA] font-semibold p-2 w-full shadow-xl rounded active:bg-[#0056D1]">
                        Login
                    </button>
                </form>
                <div className='text-[#EAEAEAEA] text-center'>
                    <p>
                        Create account:
                        <Link to="/signup" className="text-[#0056D1] hover:underline ml-2">Sign-up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
