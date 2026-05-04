"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        values: {
            name: user?.name || "",
            email: user?.email || "",
            image: user?.image || "",
            currentPassword: "",
            newPassword: "",
        },
    });

    const handleUpdateProfile = async (info) => {
        try {
            if (info.name !== user.name || info.image !== (user.image || "")) {
                const { error } = await authClient.updateUser({
                    name: info.name,
                    image: info.image,
                });

                if (error) {
                    toast.error(error.message || "Profile update failed");
                    return;
                }
            }

            if (info.email !== user.email) {
                const response = await fetch("/api/update-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: info.email,
                    }),
                });

                const result = await response.json();

                if (!response.ok) {
                    toast.error(result.message || "Email update failed");
                    return;
                }

                await fetch("/api/auth/get-session?disableCookieCache=true");
            }

            if (info.currentPassword || info.newPassword) {
                if (!info.currentPassword || !info.newPassword) {
                    toast.error("Write both current and new password");
                    return;
                }

                const { error } = await authClient.changePassword({
                    currentPassword: info.currentPassword,
                    newPassword: info.newPassword,
                });

                if (error) {
                    toast.error(error.message || "Password update failed");
                    return;
                }
            }

            toast.success("Profile updated");
            window.location.assign("/profile");
        } catch (err) {
            toast.error(err.message || "Something went wrong");
        }
    };

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
            <form onSubmit={handleSubmit(handleUpdateProfile)} className="max-w-md mx-auto bg-base-200 rounded-lg shadow p-6">
                <h1 className="text-3xl font-bold text-[#1F2A24] text-center mb-5">Update Profile</h1>

                {user.image && (
                    <div className="flex justify-center mb-4">
                        <Image
                            src={user.image}
                            alt={user.name}
                            width={100}
                            height={100}
                            className="h-24 w-24 rounded-full object-cover border-4 border-white shadow"
                        />
                    </div>
                )}

                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: "Name is required" })} className="input w-full" placeholder="Name" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </fieldset>

                <fieldset className="fieldset">
                    <label className="label">Image URL</label>
                    <input type="url" {...register("image")} className="input w-full" placeholder="https://" />
                </fieldset>

                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: "Email is required" })} className="input w-full" placeholder="Email" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </fieldset>

                <div className="divider">Change Password</div>

                <fieldset className="fieldset">
                    <label className="label">Current Password</label>
                    <input type="password" {...register("currentPassword")} className="input w-full" placeholder="Current password" />
                </fieldset>

                <fieldset className="fieldset">
                    <label className="label">New Password</label>
                    <input type="password" {...register("newPassword", { minLength: { value: 8, message: "Must be at least 8 characters" } })} className="input w-full" placeholder="New password" />
                    {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
                </fieldset>

                <div className="flex gap-3 mt-5">
                    <Link href="/profile" className="btn flex-1">Cancel</Link>
                    <button className="btn bg-[#145C39] text-white flex-1" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Updating..." : "Update"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfilePage;
