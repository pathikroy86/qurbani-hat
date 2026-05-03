"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const handleLoginFunc = async (info) => {
        const { name, email, image, password } = info;
        try {
            const { data, error } = await authClient.signUp.email({
                name: name,
                email: email,
                image: image,
                password: password,
                callbackURL: '/',
            })
            if (error) {
                toast.error("Signup error:", error);
            } else {
                toast.success("Signup successful:", data);
            }
        } catch (err) {
            toast.error("Exception during signup:", err);
        }
    }
    return (
        <div className='md:h-[600] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleLoginFunc)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: 'Name is required' })} className="input" placeholder="Name" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } })} className="input" placeholder="Email" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <label className="label">Image URL</label>
                    <input type="url" {...register('image', { required: 'Image URL is required', pattern: { value: /^https?:\/\/.+/i, message: 'Must be a valid URL starting with http:// or https://' } })} className="input" placeholder="https://" />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </fieldset>
                <label className="fieldset">
                    <span className="label">Password</span>
                    <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Must be at least 8 characters' }, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, message: 'Must include number, lowercase and uppercase letter' } })} className="input" placeholder="Password" />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </label>
                <button className="btn bg-[#1F7A4D] text-white mt-4" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
