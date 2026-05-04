"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <p className="text-center py-10">Loading...</p>;
    }

    if (!user) {
        return (
            <div className="w-11/12 mx-auto py-10 text-center">
                <h1 className="text-2xl font-bold mb-3">Please login first</h1>
                <Link href="/signin" className="btn bg-[#145C39] text-white">Go to Login</Link>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="max-w-md mx-auto bg-base-200 rounded-lg shadow p-6 text-center">
                <div className="flex justify-center mb-4">
                    {user.image ? <Image
                        src={user.image}
                        alt={user.name}
                        width={120}
                        height={120}
                        className="h-28 w-28 rounded-full object-cover border-4 border-white shadow"
                    /> : <FaUserCircle className="text-8xl text-[#145C39]" />}
                </div>

                <h1 className="text-3xl font-bold text-[#1F2A24]">{user.name}</h1>
                <p className="text-[#6D756F] mt-2">{user.email}</p>

                <Link href="/profile/update" className="btn bg-[#145C39] text-white mt-5">
                    Update Profile
                </Link>

                <div className="divider"></div>

                <div className="text-left space-y-3">
                    <div className="bg-base-100 rounded p-3">
                        <p className="text-sm text-[#6D756F]">Name</p>
                        <p className="font-medium">{user.name}</p>
                    </div>
                    <div className="bg-base-100 rounded p-3">
                        <p className="text-sm text-[#6D756F]">Email</p>
                        <p className="font-medium">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
