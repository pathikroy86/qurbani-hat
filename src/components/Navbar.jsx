"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const image = user?.image;

    return (
        <div className="navbar bg-base-300 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow text-slate-700 font-medium">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/animals">All Animals</Link></li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-lg md:text-xl text-[#145C39]">QurbaniHat</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-slate-700 font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/animals">All Animals</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user ? <div className='flex items-center gap-3'>
                    <Link href="/profile" className="btn btn-ghost btn-circle" title="My Profile">
                        {image ? <Image
                            src={image}
                            alt={`${user.name}'s profile image`}
                            width={40}
                            height={40}
                            className='h-10 w-10 rounded-full object-cover'
                        /> : <FaUserCircle className="text-4xl text-[#145C39]" />}
                    </Link>
                    <p>Welcome, {user.name}</p>
                    <Link href="/signin" onClick={async () => await authClient.signOut()} className="btn bg-[#145C39] text-white font-medium">Logout</Link>
                </div> : <div>
                    <Link href="/signin" className="btn bg-[#145C39] text-white font-medium">Login</Link>
                    <Link href="/signup" className="btn bg-[#C68A2D] font-medium">Register</Link>
                </div>}

            </div>
        </div>
    );
};

export default Navbar;
