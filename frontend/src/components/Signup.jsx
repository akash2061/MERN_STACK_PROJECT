import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Singup = () => {
    const validationSchema = z.object({
        "name": z.string().min(1, "Name is required"),
        "email": z.string().min(1, "Email is required").email("Invalid Email"),
        "password": z.string().min(8, "password must be 8 character longs")
            .regex(/[a-z]/, "Password must contain atleast 1 lowercase letter")
            .regex(/[A-Z]/, "Password must contain atleast 1 uppercase letter")
            .regex(/[0-9]/, "Password must contain atleast 1 Number")
            .regex(/[\w_]/, "Password must contain atleast 1 spacial Character"),
        "phoneNumber": z.string().min(10, "Phone Number must contain 10 numbers").max(10, "Phone Number must contain 10 numbers")
    })
    // const [formData, setFormData] = useState({
    //     resolver: zodResolver(validationSchema)
    // });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
            <div className='w-1/2'>
                <img src="" alt="" className='w-full' />
            </div>
            <div className='w-1/2 flex flex-col gap-8'>
                <h1 className='text-3xl text-blue-500 font-semibold text-center'>Welcome ! Sign-In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <label className='text-blue-500 font-medium'>Name</label>
                            <br />
                            <input type="text" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("name")} />
                        </div>
                        <div>
                            <label className='text-blue-500 font-medium'>Email</label>
                            <br />
                            <input type="email" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("email")} />
                        </div>
                        <div>
                            <label className='text-blue-500 font-medium'>Password</label>
                            <br />
                            <input type="password" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("password")} />
                        </div>
                        <div>
                            <label className='text-blue-500 font-medium'>Phone Number</label>
                            <br />
                            <input type="number" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("phoneNumber")} />
                        </div>
                    </div>
                    <button className='bg-blue-500 my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600'>Sign-Up</button>
                </form>
            </div>
        </div>
    )
}

export default Singup