import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='md:h-[600] flex justify-center items-center'>
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input validator" placeholder="Email" required />
                    <p className="validator-hint hidden">Required</p>
                </fieldset>

                <label className="fieldset">
                    <span className="label">Password</span>
                    <input type="password" className="input validator" placeholder="Password" required />
                    <span className="validator-hint hidden">Required</span>
                </label>
                <button className="btn btn-neutral mt-4" type="submit">Login</button>
                <p className='text-[#1F7A4D] text-center'>New here? <Link href="/signup" className='text-red-500 font-semibold'>Register</Link></p>
            </form>
        </div>
    );
};

export default LoginPage;