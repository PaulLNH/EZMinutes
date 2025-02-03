// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
      {/* Left: Text/CSS Logo */}
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          {/* Logo Icon as a styled div */}
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 mr-2">
            <span className="text-white font-bold text-sm">EZ</span>
          </div>
          <span className="text-xl font-bold text-blue-600">Minutes</span>
        </div>
      </Link>
      
      {/* Right: Auth Controls */}
      <div className="relative">
        {session ? (
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <span className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  {session.user.firstName.charAt(0)}
                </span>
              )}
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded shadow-lg z-10">
                <div className="p-4 border-b">
                  <p className="text-gray-800">Hello, {session.user.firstName}!</p>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
