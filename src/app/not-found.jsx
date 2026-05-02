"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center text-white animate-fadeIn">

                {/* Emoji / Icon */}
                <div className="text-7xl mb-4 animate-bounce">😵</div>

                {/* Title */}
                <h1 className="text-4xl font-bold mb-2">Something went wrong</h1>

                {/* Message */}
                <p className="text-white/80 mb-6">
                    Oops! An unexpected error has occurred. Try refreshing or go back home.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                        Try Again
                    </button>

                    <Link href="/">
                        <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-indigo-600 transition">
                            Go Home
                        </button>
                    </Link>
                </div>

                {/* Error Details (Optional for dev) */}
                {process.env.NODE_ENV === "development" && (
                    <p className="text-xs mt-6 text-red-200 break-words">
                        {error?.message}
                    </p>
                )}
            </div>

            {/* Animation Style */}
            <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}